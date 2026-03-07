import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Roko Labs",
    link: "https://roko-labs.com/",
    positions: [
      {
        title: "Python AI Engineer (RAG)",
        year: "02/2025 - present",
        description: `
- ♦ Building LLM-powered systems, RAG pipelines, and document processing workflows (PDF, docx, xlsx, pptx to markdown, markdown to pdf and docx).
            `,
        skills: [
          "Python",
          "Fast API",
          "LangChain",
          "RAG",
          "OCR",
          "AWS",
          "Docling",
          "Sagemaker",
          "SqlAlchemy",
          "PostgreSQL",
        ]
      },
    ],
  },
  {
    company: "Virtual Health",
    link: "https://www.virtualhealth.com/",
    positions: [
      {
        title: "Front-end Engineer",
        year: "11/2019 - 02/2025",
        description: `
- ♦  Developed a universal notification system.
- ♦  Led the migration to a modern tech stack.
- ♦ Created full-featured text-editor.
- ♦ Built numerous reusable components for the company’s shared component library.
            `,
        skills: [
          "Vue",
          "React",
          "Docker",
          "Pinia",
          "Webpack",
          "Jest",
          "Vitest"
        ],
      }
    ],
  },

  {
    company: "Sidenis",
    link: 'https://solveva.com/',
    positions: [
      {
        title: "Front-end developer",
        year: "09/2016 - 11/2019",
        description: `
- ♦ Optimized Webpack build system, reducing build time by 30%.
- ♦ Improved search page rendering, cutting page load time by more than half.
- ♦ Developed the company’s main website.
- ♦ Developed coworking space rental platform for optimizing office space usage.
- ♦ Developed a real estate sales website for an external company project.
            `,
        skills: [
          "React",
          "Express.js",
          "MongoDB",
          "Node.js",
          "Docker",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    company: "Education",
    link: '',
    positions: [
      {
        title: "Computer Science | Siberian State University of Telecommunications and Information Sciences (SUBGUTI)",
        year: "2020 - 2022",
        description: ` `,
        skills: [
          "C/C++",
          "Linux",
          "UI/UX Foundation",
          "Algorithms",
          "Relational Databases",
          "Software Engineering"
        ],
      },
      {
        title: "Radio Physics and Electronics | Baltic Federal University",
        year: "2009 - 2014",
        description: ` `
      }
    ],
  },
];

