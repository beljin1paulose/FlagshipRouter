import Link from "next/link";

const stats = [
  { value: "12k+", label: "students supported" },
  { value: "94%", label: "say they feel more organized" },
  { value: "3x", label: "faster project planning" },
];

const benefits = [
  {
    title: "Smart study planning",
    description: "Turn deadlines, notes, and goals into a clear weekly plan that keeps you moving.",
    icon: "calendar_month",
  },
  {
    title: "Focused accountability",
    description: "Break big assignments into daily steps so you can stay consistent without the overwhelm.",
    icon: "task_alt",
  },
  {
    title: "Real progress tracking",
    description: "Measure what matters with momentum dashboards, milestones, and quick reflection prompts.",
    icon: "insights",
  },
];

const steps = [
  {
    number: "01",
    title: "Set your goals",
    text: "Choose your courses, upcoming deadlines, and the pace that fits your semester.",
  },
  {
    number: "02",
    title: "Plan your week",
    text: "Build a realistic study rhythm with focus blocks, revision time, and backup sessions.",
  },
  {
    number: "03",
    title: "Track your wins",
    text: "See your momentum build with streaks, completed tasks, and progress snapshots.",
  },
];

const testimonials = [
  {
    quote:
      "I finally stopped missing deadlines. My week feels manageable, and I’m actually keeping up with classwork.",
    name: "Maya K.",
    role: "Computer Science student",
  },
  {
    quote:
      "The planning flow is simple enough to use daily, but strong enough to help me stay on top of finals.",
    name: "Jordan L.",
    role: "Business major",
  },
  {
    quote:
      "It helped me turn big goals into tiny actions, which made studying much less stressful.",
    name: "Aisha R.",
    role: "Biology student",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(79,107,255,0.18),_transparent_30%),linear-gradient(180deg,#f8faff_0%,#eef4ff_100%)] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Link href="/landing" className="flex items-center gap-3" aria-label="StudentFlow home">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-indigo-200">
                S
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-tight text-slate-900">StudentFlow</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <a href="#features" className="transition hover:text-indigo-600">Benefits</a>
              <a href="#how-it-works" className="transition hover:text-indigo-600">How it works</a>
              <a href="#reviews" className="transition hover:text-indigo-600">Reviews</a>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600 sm:inline-flex">
                Dashboard
              </Link>
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-indigo-600">
                Get started
              </Link>
            </div>
          </div>
        </header>

        <section className="grid items-center gap-12 pb-12 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Built for student momentum
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Study smarter.
              <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Feel in control.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              StudentFlow helps you plan your week, stay accountable, and turn big academic goals into small, doable steps that actually get finished.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_16px_30px_rgba(79,107,255,0.35)] transition hover:-translate-y-0.5">
                Start for free
              </Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600">
                See how it works
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm">
                  <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-indigo-300/25 blur-3xl" />
            <div className="absolute -right-8 bottom-14 h-44 w-44 rounded-full bg-cyan-300/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-950 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="rounded-[28px] bg-white p-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">This week</p>
                    <p className="text-xl font-extrabold text-slate-900">Academic momentum</p>
                  </div>
                  <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">On track</div>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    ["Research paper", "2/3 milestones complete", "82%"],
                    ["Math revision", "Practice set due Friday", "64%"],
                    ["Group project", "Presentation prep", "91%"],
                  ].map(([title, subtitle, percent]) => (
                    <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="font-semibold text-slate-900">{title}</div>
                          <div className="text-sm text-slate-500">{subtitle}</div>
                        </div>
                        <div className="text-sm font-bold text-indigo-600">{percent}</div>
                      </div>
                      <div className="mt-3 h-2.5 rounded-full bg-slate-200">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                          style={{ width: percent }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-4 text-white shadow-lg shadow-indigo-200/60">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-indigo-100">Focus streak</p>
                      <p className="text-2xl font-black">7 days</p>
                    </div>
                    <div className="rounded-full bg-white/15 px-3 py-1.5 text-sm font-semibold">+18% this week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-18">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Why students love it</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A calmer way to stay on top of university life.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(79,107,255,0.08)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-md shadow-indigo-100">
                  <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="rounded-[32px] border border-indigo-100 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-[0_25px_60px_rgba(79,107,255,0.25)] sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-100">Built for real student life</p>
                <h3 className="mt-3 max-w-lg text-3xl font-black tracking-tight sm:text-4xl">
                  Focus on progress — not pressure.
                </h3>
              </div>
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-indigo-700 transition hover:bg-indigo-50">
                Try the planner
              </Link>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">How it works</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A simple rhythm, from semester start to final week.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="py-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Student voices</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Real confidence, built one study session at a time.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
                <div className="mb-4 flex gap-1 text-indigo-500" aria-label="review score">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="material-symbols-outlined text-xl">star</span>
                  ))}
                </div>
                <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 pb-8">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 text-center shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Ready to begin?</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Build your best semester with less stress.
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_16px_30px_rgba(79,107,255,0.35)] transition hover:-translate-y-0.5">
                Start now
              </Link>
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600">
                View dashboard
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
          <div className="flex items-center gap-3 font-medium text-slate-700">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-black text-white">S</div>
            StudentFlow
          </div>
          <div>Designed to help students stay focused, organized, and confident.</div>
        </footer>
      </div>
    </main>
  );
}
