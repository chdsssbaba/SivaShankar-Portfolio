import { motion } from 'framer-motion'
import {
  SiJavascript, SiPython, SiC, SiGit, SiGithub
} from 'react-icons/si'
import { FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa'

const skills = [
  { name: 'HTML5', icon: FaHtml5, hue: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, hue: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, hue: '#F7DF1E' },
  { name: 'Python', icon: SiPython, hue: '#3776AB' },
  { name: 'C', icon: SiC, hue: '#A8B9CC' },
  { name: 'Java', icon: FaJava, hue: '#007396' },
  { name: 'Git', icon: SiGit, hue: '#F05032' },
  { name: 'GitHub', icon: SiGithub, hue: '#ffffff' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 12 }
  }
}

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="section-heading mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            Technologies and tools I use to bring ideas to life
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-wrap justify-center gap-5 md:gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group flex flex-col items-center gap-3 p-6 w-[110px] sm:w-[130px] md:w-[140px] glass-card rounded-2xl cursor-default transition-all duration-300 hover:shadow-lg"
                style={{
                  '--skill-color': skill.hue,
                }}
              >
                <div
                  className="text-4xl text-gray-500 transition-colors duration-300"
                  style={{ color: undefined }}
                >
                  <skill.icon
                    className="group-hover:drop-shadow-lg transition-all duration-300"
                    style={{ color: 'inherit' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = skill.hue}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
