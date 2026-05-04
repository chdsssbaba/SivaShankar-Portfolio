import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiLayout } from 'react-icons/fi'

const focusAreas = [
  { icon: FiCode, title: 'Clean Code', desc: 'Writing maintainable & scalable code' },
  { icon: FiLayout, title: 'UI / UX', desc: 'Crafting engaging user experiences' },
  { icon: FiCpu, title: 'Performance', desc: 'Optimizing for speed & efficiency' },
]

const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-14">
            <h2 className="section-heading">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glow-border">
                <img
                  src="/avatar.png"
                  alt="Siva Shankar Baba"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            <div className="md:col-span-7 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Hello! I'm <span className="text-white font-semibold">Chitturi Dola Satya Siva Shankar Baba</span>. Frontend Developer with experience in HTML, CSS, and JavaScript, building responsive web applications. Improved performance by reducing load time up to 40% and implemented scalable UI components. Delivered efficient and maintainable code for better user experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
              >
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="glass-card p-5 rounded-xl flex flex-col gap-3 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1 group/card"
                  >
                    <area.icon className="text-primary text-2xl group-hover/card:text-accent transition-colors duration-300" />
                    <h3 className="text-white font-semibold text-sm">{area.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{area.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
