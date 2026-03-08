import React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export interface ModalProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  showClose?: boolean;
  closeOnOverlay?: boolean;
  className?: string; // content container classes
  containerClassName?: string; // overlay container classes
  initialFocusRef?: React.RefObject<HTMLElement>;
  ariaLabel?: string; // if no title, provide label for accessibility
}

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  showClose = true,
  closeOnOverlay = true,
  className = "",
  containerClassName = "",
  initialFocusRef,
  ariaLabel,
}: ModalProps) {
  const [mounted, setMounted] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = React.useRef<HTMLElement | null>(null);

  // Track mount to avoid SSR/CSR mismatches
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Body scroll locking when open
  React.useEffect(() => {
    if (!mounted) return;
    if (open) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement | null;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // focus management
      const toFocus = initialFocusRef?.current || contentRef.current || null;
      if (toFocus) {
        // slight delay to ensure in DOM
        setTimeout(() => toFocus.focus(), 0);
      }
      return () => {
        document.body.style.overflow = previousOverflow;
        if (previouslyFocusedElement.current) {
          previouslyFocusedElement.current.focus();
        }
      };
    }
    return;
  }, [open, mounted, initialFocusRef]);

  const close = React.useCallback(() => {
    onOpenChange?.(false);
  }, [onOpenChange]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      close();
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div
          className={`fixed inset-0 z-50 ${containerClassName}`}
          aria-hidden={!open}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnOverlay ? close : undefined}
          />

          {/* Content */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={!title ? ariaLabel : undefined}
            aria-labelledby={title ? "modal-title" : undefined}
            tabIndex={-1}
            ref={contentRef}
            className={`absolute left-1/2 top-1/2 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl outline-none dark:bg-zinc-900 ${className}`}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            onKeyDown={onKeyDown}
          >
            {(title || showClose) && (
              <div className="mb-4 flex items-start justify-between gap-4">
                {title ? (
                  <div id="modal-title" className="text-base font-semibold">
                    {title}
                  </div>
                ) : (
                  <span />
                )}
                {showClose && (
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={close}
                    className="rounded-md p-1 text-zinc-500 outline-none transition hover:bg-zinc-100 hover:text-zinc-700 focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 dark:focus-visible:ring-zinc-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            )}

            <div>{children}</div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

export default Modal;

