import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const contactLinks = [
  {
    icon: FiMail,
    title: 'Email',
    detail: 'chdsssbaba0@gmail.com',
    link: 'mailto:chdsssbaba0@gmail.com',
  },
  {
    icon: FiLinkedin,
    title: 'LinkedIn',
    detail: 'linkedin.com/in/mr-stg',
    link: 'https://www.linkedin.com/in/mr-stg/',
  },
  {
    icon: FiGithub,
    title: 'GitHub',
    detail: 'github.com/chdsssbaba',
    link: 'https://github.com/chdsssbaba',
  }
]

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[120px] pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Let's connect</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactLinks.map((item, i) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    target={item.title !== 'Email' ? '_blank' : undefined}
                    rel={item.title !== 'Email' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group flex flex-col items-center text-center gap-4 glass-card p-8 rounded-2xl transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm group-hover:text-primary transition-colors duration-300 break-all">
                        {item.detail}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
