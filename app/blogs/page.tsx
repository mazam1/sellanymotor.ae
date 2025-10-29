import Link from "next/link";
import Image from "next/image";
import ImageWithFallback from "../../src/components/ImageWithFallback";
import { blogPosts } from "../../src/data/blogs";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog & Insights | SellAnyMotor",
  description: "Expert insights, market trends, and practical tips to help you get the best value for your vehicle.",
};

export default function BlogsPage() {
  // Group posts by category for the sidebar
  const categories = [
    { name: "Selling Tips", count: 5, icon: "🏷️" },
    { name: "Market Analysis", count: 3, icon: "📊" },
    { name: "Valuation", count: 5, icon: "💰" },
    { name: "Electric Vehicles", count: 3, icon: "🔋" },
    { name: "Documentation", count: 4, icon: "📄" },
  ];

  // Featured post (first post)
  const featuredPost = blogPosts[0];
  // Other posts
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Motor Selling
            <span className="block text-amber-400 mt-2">Blog & Insights</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-200">
            Expert insights, market trends, and practical tips to help you get the best value for your
            vehicle. Stay informed with the latest in automotive buying and selling.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <div className="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded-md text-sm font-medium">
                  Featured
                </div>
                <ImageWithFallback 
                  src={featuredPost.cover ?? "/file.svg"} 
                  alt={featuredPost.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Selling Tips</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs ml-3">
                      {new Date(featuredPost.date).toLocaleDateString()} • 8 min read
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Sarah Johnson</p>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Articles */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Latest Articles</h2>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Stay updated with the latest trends and insights in car selling
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {otherPosts.map((post) => (
                  <div key={post.slug} className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <ImageWithFallback 
                        src={post.cover ?? "/file.svg"} 
                        alt={post.title} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center mb-2">
                        <span className="text-gray-500 dark:text-gray-400 text-xs">
                          {new Date(post.date).toLocaleDateString()} • 7 min read
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                            {post.title.includes("Market") ? "M" : "D"}
                          </div>
                          <span className="ml-2 text-xs text-gray-600 dark:text-gray-400">
                            {post.title.includes("Market") ? "Michael Rodriguez" : "David Chen"}
                          </span>
                        </div>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm flex items-center"
                        >
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-md">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div 
                      key={category.name} 
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{category.icon}</span>
                        <span className="text-gray-800 dark:text-gray-200">{category.name}</span>
                      </div>
                      <span className="bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <Link 
                      key={post.slug} 
                      href={`/blog/${post.slug}`}
                      className="flex items-center hover:bg-gray-100 dark:hover:bg-slate-700 p-2 rounded-lg"
                    >
                      <h4 className="text-gray-800 dark:text-gray-200 text-sm">{post.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Stay Updated</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Get the latest car selling tips and market insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
                  />
                  <button className="w-full bg-amber-400 hover:bg-amber-500 text-black px-4 py-3 rounded-md font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}