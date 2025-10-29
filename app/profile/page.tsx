import Link from 'next/link'

export default function ProfilePage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.3) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="gradient-text">Về tôi</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Main Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 sticky top-24">
              {/* chandung */}
              <div className="flex justify-center mb-6">
                <div className="relative animate-float">
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-50 animate-pulse-glow bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
                  <img
                    src="/BuiDuongTin-2280603198-Blog/images/chandung.jpg"
                    alt="Bùi Dương Tín"
                    className="relative w-48 h-48 rounded-full shadow-2xl border-4 border-transparent bg-clip-padding object-cover object-top"
                  />
                </div>
              </div>

              {/* Name */}
              <h2 className="text-2xl font-bold text-center mb-2 gradient-text">
                Bùi Dương Tín
              </h2>
              <p className="text-center text-slate-400 mb-6">
                Software Engineering Student
              </p>

              {/* Social Links */}
              <div className="space-y-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <span className="text-xl">📘</span>
                  <span className="text-cyan-400">Facebook</span>
                </a>
                <a
                  href="https://github.com/BuiDuongTin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <span className="text-xl">💻</span>
                  <span className="text-cyan-400">GitHub</span>
                </a>
                <a
                  href="mailto:tinbui.koks@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <span className="text-xl">✉️</span>
                  <span className="text-cyan-400">Gmail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
                Giới thiệu
              </h3>
              <div className="text-slate-300 space-y-4 leading-relaxed">
                <p>
                  Xin chào! Mình là <strong className="text-cyan-400">Bùi Dương Tín</strong>, 
                  sinh viên năm 4 chuyên ngành Công nghệ Phần mềm tại Đại học Công nghệ TP. Hồ Chí Minh (HUTECH).
                </p>
                <p>
                  Mình có đam mê với lập trình và đặc biệt yêu thích các chủ đề về 
                  <strong className="text-cyan-400"> lập trình mạng</strong>, 
                  <strong className="text-cyan-400"> Java</strong>, và 
                  <strong className="text-cyan-400"> JavaScript</strong>.
                </p>
                <p>
                  Blog này được tạo ra với mục đích chia sẻ kiến thức và kinh nghiệm học tập 
                  của mình trong quá trình học tập và nghiên cứu. Hy vọng những bài viết 
                  của mình có thể giúp ích cho các bạn sinh viên cùng đam mê.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
                Học vấn
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h4 className="text-xl font-bold text-white mb-1">
                    Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)
                  </h4>
                  <p className="text-cyan-400 font-medium mb-2">
                    Công nghệ Phần mềm
                  </p>
                  <p className="text-slate-400 text-sm">
                    Năm 4 • 2021 - 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
                Kỹ năng
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Ngôn ngữ lập trình</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'JavaScript', 'TypeScript', 'Python', 'HTML/CSS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'Node.js', 'Spring Boot', 'Express.js'].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Chuyên môn</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Lập trình mạng', 'OOP', 'Web Development', 'REST API', 'Socket Programming'].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
                Thành tựu
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { image: '../images/nw.png', title: 'Thành tựu 1', pdfLink: '../images/NetworkingBasicsUpdate20251026-30-vihrkg.pdf' },
                  { image: '../images/jv2.png', title: 'Thành tựu 2', pdfLink: '../images/JavaScriptEssentials2Update20251026-31-psumuq.pdf' },
                  { image: '../images/jv1.png', title: 'Thành tựu 3', pdfLink: '../images/JavaScriptEssentials1Update20251026-32-f18m22.pdf' }
                ].map((achievement) => (
                  <div
                    key={achievement.title}
                    className="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] bg-slate-800 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="relative z-10 w-full h-full object-contain p-2"
                      />
                    </div>
                    <div className="p-3 bg-slate-900/80 border-t border-slate-700">
                      <a
                        href={achievement.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                      >
                        Xem thêm
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
                Sở thích
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: '💻', title: 'Coding', desc: 'Giải quyết vấn đề với code' },
                  { icon: '📚', title: 'Học tập', desc: 'Khám phá công nghệ mới' },
                  { icon: '🎮', title: 'Gaming', desc: 'Thư giãn với game' },
                  { icon: '✍️', title: 'Viết blog', desc: 'Chia sẻ kiến thức' }
                ].map((interest) => (
                  <div
                    key={interest.title}
                    className="flex items-start gap-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span className="text-3xl">{interest.icon}</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">{interest.title}</h4>
                      <p className="text-sm text-slate-400">{interest.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Khám phá Blog của mình
              </h3>
              <p className="text-slate-300 text-center mb-6">
                Đọc các bài viết về Java, JavaScript và lập trình mạng
              </p>
              <div className="flex justify-center">
                <Link
                  href="/blog"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                >
                  📖 Xem Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
