import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/[0.06] relative z-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Chitturi Dola Satya Siva Shankar Baba
          </p>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a href="https://github.com/chdsssbaba" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-white transition-colors duration-300">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mr-stg/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors duration-300">
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:chdsssbaba0@gmail.com" aria-label="Email" className="text-gray-500 hover:text-white transition-colors duration-300">
              <FiMail size={18} />
            </a>
          </div>

          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Built with <FiHeart className="text-primary" size={14} /> and React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
