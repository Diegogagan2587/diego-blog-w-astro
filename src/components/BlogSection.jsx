const blogPosts = [
    {
      title: "How I Became a Full-stack Developer",
      excerpt: "A personal story of curiosity, struggle, and persistence that led me to tech.",
      link: "#"
    },
    {
      title: "Tips for Writing Clean React Code",
      excerpt: "Some quick tips I use when building React apps that make my code readable and maintainable.",
      link: "#"
    },
    {
      title: "Deploying Projects with Netlify and Vercel",
      excerpt: "A comparison and quickstart guide to hosting your front-end projects.",
      link: "#"
    }
  ];
  
  const BlogSection = ({ sectionRef }) => {
    return (
      <section
        id="blog"
        ref={sectionRef}
        className="flex flex-col items-center py-28 px-6 bg-[#F4F5F7] min-h-screen"
      >
        <h2 className="font-bold text-4xl text-[#172B4D] mb-16 text-center">Blog</h2>
  
        <div className="grid gap-12 w-full max-w-6xl md:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#DFE1E6] p-6 rounded-2xl flex flex-col justify-between h-full transition-shadow hover:shadow-lg"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#172B4D] mb-3">{post.title}</h3>
                <p className="text-[#344563] text-base leading-6">{post.excerpt}</p>
              </div>
              <div className="mt-6">
                <a
                  href={post.link}
                  className="text-[#6070FF] font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-16">
          <a
            href="/blog"
            className="bg-[#6070FF] text-white px-6 py-3 rounded-xl hover:bg-[#4050D2] transition"
          >
            View All Blog Posts
          </a>
        </div>
      </section>
    );
  };
  
  export default BlogSection;
  