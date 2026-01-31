import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold font-heading text-center mb-4 text-gray-900">
          🚀 My Projects
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Things I&apos;ve built while learning!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden"
            >
              {/* Image/Gradient area */}
              <div className={`bg-gradient-to-br ${project.gradient} h-40 flex items-center justify-center`}>
                <span className="text-6xl">{project.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Award badge */}
                {project.award && (
                  <div className="bg-yellow-400 inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 border-2 border-black text-gray-900">
                    {project.award}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
                  >
                    GitHub →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}