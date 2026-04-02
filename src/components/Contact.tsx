export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="bg-neutral-900 rounded-3xl p-12 md:p-16 text-center">
        <span className="text-sm font-semibold text-green-400 tracking-widest uppercase">
          Contact
        </span>
        <h2 className="text-4xl font-bold text-white mt-3 mb-5 tracking-tight">
          Let's work together.
        </h2>
        <p className="text-neutral-400 mb-10 max-w-md mx-auto leading-relaxed">
          I'm currently looking for UX internship roles. Feel free to contact me
          if I seem to be a good fit for your company.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:artkim2005@gmail.com"
            className="px-7 py-3.5 bg-green-400 text-black rounded-full text-sm font-semibold transition-colors"
          >
            Send me an email
          </a>
          <a
            href="https://www.linkedin.com/in/arthur-kim-3464994/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-semibold transition-colors"
          >
            LinkedIn profile
          </a>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-400 text-sm">
          <span>© 2026 Arthur Kim</span>
        </div>
      </div>
    </section>
  );
}
