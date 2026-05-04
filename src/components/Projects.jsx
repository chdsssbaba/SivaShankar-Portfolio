import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const projects = [
  {
    title: 'To-Do List App',
    description: 'A robust task management system supporting comprehensive CRUD functionality with persistent data storage via localStorage and optimized DOM updates for minimal UI interaction delay.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    githubLink: 'https://github.com/chdsssbaba/Project-To-Do-List-App',
    liveLink: '#',
  },
  {
    title: 'Weather Check App',
    description: 'A dynamic weather application integrating the OpenWeatherMap API with GPS-based location detection for enhanced usability and robust error handling for reliable data fetching.',
    techStack: ['JavaScript', 'OpenWeatherMap API', 'Geolocation'],
    githubLink: 'https://github.com/chdsssbaba/Project-Weather-Check-App',
    liveLink: '#',
  },
  {
    title: 'Modern Calculator',
    description: 'A highly accurate calculator supporting complex arithmetic operations with advanced accessibility features like keyboard input, theme switching, and comprehensive history tracking.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/chdsssbaba/Project-Calculator',
    liveLink: '#',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const Projects = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="section-heading">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group h-full flex flex-col glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]"
              >
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <FiFolder className="text-4xl text-primary/50 group-hover:text-primary transition-colors duration-300" />
                    <div className="flex gap-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className="text-gray-500 hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 transform"
                      >
                        <FiGithub size={20} />
                      </a>
                      {project.liveLink !== '#' && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${project.title}`}
                          className="text-gray-500 hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 transform"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs font-medium text-primary/80 bg-primary/[0.08] px-3 py-1.5 rounded-full border border-primary/10"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
