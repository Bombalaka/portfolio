export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-pink-50 to-yellow-50">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Big card container */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left - About text */}
            <div className="flex-1 space-y-4">
              <h2 className="text-4xl font-bold font-heading text-gray-900 flex items-center gap-3">
                🙋 About Me
              </h2>
              
              <p className="text-lg text-gray-700">
                Hello there! I&apos;m a passionate <span className="text-yellow-600 font-semibold">Cloud Developer</span> on an exciting learning journey. Think of me as a curious explorer in the vast world of cloud computing! 🌍
              </p>
              
              <p className="text-lg text-gray-700">
                I&apos;m currently diving deep into <strong>C# and Object-Oriented Programming</strong>, learning how to build applications that live in the cloud with <strong>Azure, GCP, and AWS</strong>.
              </p>
              
              <p className="text-lg text-gray-700">
                When I&apos;m not coding, you&apos;ll find me experimenting with <strong>Flutter</strong> and dreaming up new project ideas! 💭
              </p>
            </div>

            {/* Right - Info cards (stacked) */}
            <div className="flex flex-col gap-4 md:w-64">
              <div className="bg-pink-200 p-4 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform">
                <div className="font-bold text-gray-900">📍 Location</div>
                <div className="text-gray-700">Gothenburg, Sweden</div>
              </div>
              
              <div className="bg-yellow-200 p-4 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform">
                <div className="font-bold text-gray-900">🎯 Focus</div>
                <div className="text-gray-700">Cloud Development</div>
              </div>
              
              <div className="bg-purple-200 p-4 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform">
                <div className="font-bold text-gray-900">💼 Status</div>
                <div className="text-gray-700">LIA @ Zero8.io</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}