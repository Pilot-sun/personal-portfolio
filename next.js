export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-200">
      {/* Grid Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24">
        {/* Status */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
            System Online
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl font-mono text-5xl font-medium tracking-tight text-zinc-50 md:text-7xl">
          Thoughtful interfaces.
          <br />
          <span className="text-cyan-300">
            Quietly futuristic.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Modern digital experiences built with precision, accessibility,
          and restraint. Inspired by terminal clarity, engineered for
          contemporary products.
        </p>

        {/* Actions */}
        <div className="mt-12 flex flex-wrap gap-4">
          <button className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            Get Started
          </button>

          <button className="rounded-lg border border-zinc-800 px-6 py-3 font-medium text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-600">
            Documentation
          </button>
        </div>

        {/* Metrics */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            { value: "99.9%", label: "Availability" },
            { value: "<120ms", label: "Response Time" },
            { value: "WCAG", label: "Accessibility First" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm"
            >
              <div className="font-mono text-2xl text-cyan-300">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-zinc-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}