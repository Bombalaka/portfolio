export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
          
          <div className="text-2xl">
            Made with 💖 and lots of ☕
          </div>
          
          <div className="text-gray-400">
            © 2026 Yotaka Khaowgomol. Learning one line of code at a time!
          </div>
  
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#skills" className="hover:text-yellow-400 transition">Skills</a>
            <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </div>
  
        </div>
      </footer>
    );
  }