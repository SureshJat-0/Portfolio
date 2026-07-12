import { motion } from "motion/react";
import { FaDownload, FaExpand, FaHouse } from "react-icons/fa6";

const resumePdfUrl = "/suresh_jat_resume.pdf";

export default function ResumePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--bg)] px-4 py-6 text-[var(--text)] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pt-2 sm:pt-4 lg:pt-6">
        <motion.header
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col gap-4 rounded-[1.4rem] border border-[var(--text-green)]/15 bg-[linear-gradient(135deg,hsl(200_23%_10%_/_0.96),hsl(200_23%_13%_/_0.84))] px-5 py-5 shadow-[0_18px_40px_hsl(200_40%_2%_/_0.45)] backdrop-blur-lg sm:px-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-green)]/90">
              Resume
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Suresh Jat
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-[var(--text-muted)] sm:text-base">
              Embedded resume preview with quick access to the full PDF and a
              direct download.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--text-green)]/20 bg-[hsl(200_23%_8%_/_0.4)] px-4 py-2.5 text-sm font-medium text-[var(--text-green-light)] transition-colors duration-200 hover:border-[var(--text-green)]/45 hover:bg-[hsl(200_23%_8%_/_0.55)]"
            >
              <FaHouse className="text-[0.8rem]" />
              <span>Back to Portfolio</span>
            </a>
            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--text-green)]/20 bg-[hsl(200_23%_8%_/_0.4)] px-4 py-2.5 text-sm font-medium text-[var(--text-green-light)] transition-colors duration-200 hover:border-[var(--text-green)]/45 hover:bg-[hsl(200_23%_8%_/_0.55)]"
            >
              <FaExpand className="text-[0.8rem]" />
              <span>View Fullscreen</span>
            </a>
            <a
              href={resumePdfUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--text-green)] px-4 py-2.5 text-sm font-semibold text-[var(--bg-dark)] transition-colors duration-200 hover:bg-[var(--text-green-light)]"
            >
              <FaDownload className="text-[0.8rem]" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="relative overflow-hidden rounded-[1.5rem] border border-[var(--text-green)]/12 bg-[linear-gradient(180deg,hsl(200_23%_11%_/_0.96),hsl(200_23%_8%_/_0.98))] p-3 shadow-[0_24px_60px_hsl(200_40%_2%_/_0.5)] sm:p-4"
        >
          <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_top_right,hsl(127_40%_55%_/_0.10),transparent_36%),radial-gradient(circle_at_bottom_left,hsl(196_68%_18%_/_0.24),transparent_34%)]" />

          <div className="relative mx-auto flex w-full max-w-5xl flex-col rounded-[1.1rem] border border-[var(--text-green)]/12 bg-[var(--bg-dark)]/80 p-2 shadow-[inset_0_0_0_1px_hsl(127_30%_45%_/_0.03)] sm:p-3">
            <div className="aspect-[210/297] w-full overflow-hidden rounded-[1rem] border border-[var(--text-green)]/10 bg-[hsl(200_23%_6%_/_0.9)]">
              <iframe
                title="Suresh Jat resume"
                src={`${resumePdfUrl}#page=1&zoom=page-fit&toolbar=0&navpanes=0&scrollbar=0`}
                className="h-full w-full bg-[var(--bg-dark)]"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}