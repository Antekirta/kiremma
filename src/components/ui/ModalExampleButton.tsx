import React from "react";
import Modal from "./Modal";

export default function ModalExampleButton() {
  const [open, setOpen] = React.useState(false);
  const okRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-zinc-600"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Example Modal"
        initialFocusRef={okRef}
      >
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          This is a reusable modal powered by framer-motion. It traps scroll,
          supports Escape key, overlay click, and restores focus on close.
        </p>
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-600"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button
            ref={okRef}
            type="button"
            className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-zinc-600"
            onClick={() => setOpen(false)}
          >
            OK
          </button>
        </div>
      </Modal>
    </>
  );
}

