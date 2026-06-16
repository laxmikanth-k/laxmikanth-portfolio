import { motion } from 'framer-motion';

export default function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 text-slate-300">
          <span className="inline-block h-0.5 w-14 rounded-full bg-sky-500" />
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{title}</p>
        </div>
        {children}
      </motion.div>
    </section>
  );
}
