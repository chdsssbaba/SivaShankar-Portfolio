import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const socialLinks = [
  { href: 'https://github.com/chdsssbaba', icon: FiGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mr-stg/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'mailto:chdsssbaba0@gmail.com', icon: FiMail, label: 'Email' },
]

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0px', '100px'])
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.5])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <motion.div
        style={{ y: backgroundY, scale: orbScale }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
      </motion.div>

      <div className="absolute inset-0 z-[1] pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full glass-card text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-gray-300">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Siva Shankar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium mb-8"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I craft responsive web applications with clean architecture,
            smooth animations, and pixel-perfect attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a href="#projects" className="btn-primary w-full sm:w-auto text-center">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
              <FiMail size={18} />
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-5"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <link.icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
}

export default Hero
