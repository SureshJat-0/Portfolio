import MyPhoto from "../assets/MyPhoto.webp";
import ContactButton from "../Components/Contact/ContactButton";

export default function ({ setShowContactModal, aboutRef }) {
  const focusPoints = [
    "Real-time features (WebSockets)",
    "REST API design",
    "Performance optimization",
    "Clean, testable code",
    "Responsive UI/UX",
    "Data Structures & Algorithms",
  ];

  return (
    <div
      ref={aboutRef}
      className="scroll-mt-16 w-full px-4 py-10 sm:px-6 md:px-8 md:py-20 xl:px-12 [background:radial-gradient(circle_at_top_left,hsl(127_45%_50%_/_0.06),transparent_34%),linear-gradient(180deg,hsl(200_23%_8%),hsl(200_22%_7%))]"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[0.95rem] font-bold tracking-[0.16em] text-[var(--text-green)]">
          ABOUT ME
        </p>
        <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-[var(--text)] mt-3">
          <span>Full stack web developer</span>{" "}
          <span className="text-[var(--text-green)]">| MERN Stack</span>
        </h1>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1140px] grid-cols-1 gap-5 lg:grid-cols-[0.82fr_1.58fr] lg:gap-5">
        <div className="mx-auto w-full max-w-[260px] lg:max-w-[260px]">
          <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-[1.25rem] border border-[hsl(127_22%_36%_/_0.22)] bg-[linear-gradient(160deg,hsl(200_22%_11%),hsl(201_20%_8%))] shadow-[inset_0_0_0_1px_hsl(127_18%_36%_/_0.08),0_16px_36px_hsl(0_0%_0%_/_0.24)]">
            <img
              src={MyPhoto}
              alt="Suresh Jat"
              loading="lazy"
              className="block aspect-[3.35/4] w-full object-cover"
            />
          </div>
          <div className="mx-auto mt-3 grid w-full max-w-[260px] grid-cols-2 gap-3">
            <div className="flex min-h-[4.75rem] flex-col justify-center rounded-2xl border border-[hsl(127_24%_38%_/_0.18)] bg-[linear-gradient(160deg,hsl(201_22%_14%),hsl(201_18%_10%))] px-4 py-[0.95rem] shadow-[0_10px_24px_hsl(0_0%_0%_/_0.18)]">
              <h3 className="text-[1.5rem] leading-none font-bold text-[var(--text-green)]">
                MERN
              </h3>
              <p className="mt-[0.35rem] text-[0.95rem] text-[hsl(220_18%_55%)]">
                Core Stack
              </p>
            </div>
            <div className="flex min-h-[4.75rem] flex-col justify-center rounded-2xl border border-[hsl(127_24%_38%_/_0.18)] bg-[linear-gradient(160deg,hsl(201_22%_14%),hsl(201_18%_10%))] px-4 py-[0.95rem] shadow-[0_10px_24px_hsl(0_0%_0%_/_0.18)]">
              <h3 className="text-[1.5rem] leading-none font-bold text-[var(--text-green)]">
                5+
              </h3>
              <p className="mt-[0.35rem] text-[0.95rem] text-[hsl(220_18%_55%)]">
                Projects Built
              </p>
            </div>
            <div className="flex min-h-[4.75rem] flex-col justify-center rounded-2xl border border-[hsl(127_24%_38%_/_0.18)] bg-[linear-gradient(160deg,hsl(201_22%_14%),hsl(201_18%_10%))] px-4 py-[0.95rem] shadow-[0_10px_24px_hsl(0_0%_0%_/_0.18)]">
              <h3 className="text-[1.5rem] leading-none font-bold text-[var(--text-green)]">
                DSA
              </h3>
              <p className="mt-[0.35rem] text-[0.95rem] text-[hsl(220_18%_55%)]">
                Problem Solving
              </p>
            </div>
            <div className="flex min-h-[4.75rem] flex-col justify-center rounded-2xl border border-[hsl(127_24%_38%_/_0.18)] bg-[linear-gradient(160deg,hsl(201_22%_14%),hsl(201_18%_10%))] px-4 py-[0.95rem] shadow-[0_10px_24px_hsl(0_0%_0%_/_0.18)]">
              <h3 className="text-[1.5rem] leading-none font-bold text-[var(--text-green)]">
                Open
              </h3>
              <p className="mt-[0.35rem] text-[0.95rem] text-[hsl(220_18%_55%)]">
                To Internship
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:min-h-full">
          <section className="rounded-[1.25rem] border border-[hsl(127_24%_38%_/_0.22)] bg-[linear-gradient(160deg,hsl(201_24%_12%_/_0.95),hsl(201_20%_9%_/_0.98))] p-4 shadow-[inset_0_0_0_1px_hsl(127_18%_36%_/_0.08),0_16px_34px_hsl(0_0%_0%_/_0.2)] md:p-5">
            <p className="mb-3 text-[0.95rem] font-bold tracking-[0.08em] text-[var(--text-green)]">
              WHO I AM
            </p>
            <p className="text-[1rem] leading-[1.7] text-[var(--text-muted)] md:text-[1.05rem] md:leading-[1.75] [&_strong]:text-[var(--text)]">
              I'm a <strong>Full Stack Developer</strong> and computer science
              and engineering student from India, focused on building{" "}
              <strong>scalable and real-time</strong> web applications using the
              MERN stack.
            </p>
            <p className="mt-4 text-[1rem] leading-[1.7] text-[var(--text-muted)] md:text-[1.05rem] md:leading-[1.75] [&_strong]:text-[var(--text)]">
              I build interactive systems—from real-time chat applications to
              collaborative tools and Ai code reviewer—with a strong focus on
              performance, clean architecture and user experience.{" "}
            </p>
            <p className="mt-4 text-[1rem] leading-[1.7] text-[var(--text-muted)] md:text-[1.05rem] md:leading-[1.75] [&_strong]:text-[var(--text)]">
              Alongside development, I actively strengthen my{" "}
              <strong>problem-solving skills</strong> through DSA and focus on
              writing efficient, maintainable code.
            </p>
          </section>

          <section className="rounded-[1.25rem] border border-[hsl(127_24%_38%_/_0.22)] bg-[linear-gradient(160deg,hsl(201_24%_12%_/_0.95),hsl(201_20%_9%_/_0.98))] p-4 shadow-[inset_0_0_0_1px_hsl(127_18%_36%_/_0.08),0_16px_34px_hsl(0_0%_0%_/_0.2)] md:p-5">
            <p className="mb-3 text-[0.95rem] font-bold tracking-[0.08em] text-[var(--text-green)]">
              WHAT I FOCUS ON
            </p>
            <div className="flex flex-wrap gap-[0.7rem]">
              {focusPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-[0.7rem] border border-[hsl(127_22%_38%_/_0.22)] bg-[hsl(201_20%_11%_/_0.85)] px-[0.85rem] py-[0.52rem] text-[0.95rem] text-[var(--text)]"
                >
                  {point}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-[1.25rem] border border-[hsl(138_72%_38%_/_0.28)] bg-[linear-gradient(160deg,hsl(201_24%_12%_/_0.85),hsl(201_20%_9%_/_0.88)),linear-gradient(160deg,hsl(137_70%_16%_/_0.9),hsl(145_65%_14%_/_0.9))] p-4 shadow-[inset_0_0_0_1px_hsl(127_18%_36%_/_0.08),0_16px_34px_hsl(0_0%_0%_/_0.2)] md:p-5">
            <div>
              <h3 className="mb-[0.55rem] text-[1.15rem] text-[var(--text)] md:text-[1.35rem]">
                Open to Internship Opportunities
              </h3>
              <p className="text-[1rem] leading-[1.7] text-[hsl(140_43%_76%_/_0.95)]">
                Actively looking for roles where I can contribute to real-world
                products, collaborate with experienced teams, and grow as a
                developer.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-start gap-y-[0.9rem] gap-x-4 md:items-center">
              <ContactButton setShowContactModal={setShowContactModal} />
              <span className="inline-flex flex-wrap items-center gap-[0.55rem] text-[0.95rem] text-[hsl(145_43%_82%_/_0.95)]">
                <span className="h-[0.55rem] w-[0.55rem] rounded-full bg-[hsl(147_66%_63%)] shadow-[0_0_10px_hsl(147_66%_63%_/_0.45)]"></span>
                Available for internship & freelance
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
