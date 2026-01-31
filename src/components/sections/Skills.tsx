export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-yellow-100">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold font-heading text-center mb-12 text-gray-900">
          🛠️ My Toolbox
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Cloud Platforms */}
          <div className="bg-cyan-100 p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-4 text-gray-900">☁️ Cloud Platforms</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">🔷</span>
                <span className="font-medium text-gray-900">Microsoft Azure</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">🟠</span>
                <span className="font-medium text-gray-900">AWS</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">🔴</span>
                <span className="font-medium text-gray-900">Google Cloud</span>
              </div>
            </div>
          </div>

          {/* Programming */}
          <div className="bg-purple-200 p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-4 text-gray-900">💻 Programming</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">🟣</span>
                <span className="font-medium text-gray-900">C# / .NET</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">💙</span>
                <span className="font-medium text-gray-900">Flutter / Dart / React Native</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">💛</span>
                <span className="font-medium text-gray-900">JavaScript / React</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">🐍</span>
                <span className="font-medium text-gray-900">Python</span>
              </div>
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="bg-pink-200 p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-4 text-gray-900">⚙️ DevOps & Tools</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">🐳</span>
                <span className="font-medium text-gray-900">Docker</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <span className="font-medium text-gray-900">CI/CD</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">🐙</span>
                <span className="font-medium text-gray-900">Git / GitHub</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <span className="text-2xl">🗄️</span>
                <span className="font-medium text-gray-900">SQL / MongoDB / GraphQL</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}