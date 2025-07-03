import IconCloudDemo from "@/components/globe";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className=" mx-auto max-w-6xl space-y-12 px-6 md:space-y-20">
        <h2 className="text-center text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
          Developer | Designer | Explorer | Innovator.
        </h2>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Globe or Visual Component */}
          <div className="flex justify-center">
            <IconCloudDemo />
          </div>

          {/* Bio Block */}
          <div className="space-y-6">
            <blockquote className="border-l-4 border-blue-500 pl-6 text-gray-300 space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate Flex developer with a strong foundation in software development, data science, and analytics. I enjoy crafting scalable, intelligent applications and extracting insights through data-driven solutions.
              </p>

              <p className="text-lg leading-relaxed">
                Currently in my final year of B.Tech in Artificial Intelligence & Data Science at <strong className="text-white">Guru Gobind Singh Indraprastha University</strong>. I'm driven by building impactful systems, solving real-world problems, and actively participating in hackathons and innovation challenges.
              </p>

              <cite className="block text-right font-semibold text-white">
                — Aditya Kumar
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
