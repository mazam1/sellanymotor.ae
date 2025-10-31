import Link from "next/link";
import Image from "next/image";
import ImageWithFallback from "../../src/components/ImageWithFallback";
import { blogPosts } from "../../src/data/blogs";
import { ArrowRight, MapPin, TrendingUp, Award, Clock, Calendar, Search, Star, Car, Users } from "lucide-react";

export const metadata = {
  title: "Dubai Car Market Insights | SellAnyMotor",
  description: "Expert insights on Dubai's automotive market, local trends, and practical tips to maximize your vehicle's value in the UAE.",
  keywords: "Dubai cars, UAE automotive market, sell car Dubai, car valuation UAE, luxury vehicles Dubai",
  openGraph: {
    title: "Dubai Car Market Insights | SellAnyMotor",
    description: "Expert insights on Dubai's automotive market, local trends, and practical tips to maximize your vehicle's value in the UAE.",
    images: [{ url: "/images/dubai-luxury-cars.svg", width: 1200, height: 630 }],
  },
};

export default function BlogsPage() {
  // Group posts by category for the sidebar
  const categories = [
    { name: "Dubai Market", count: 5, icon: "🏙️" },
    { name: "Selling Tips", count: 4, icon: "💰" },
    { name: "Luxury Vehicles", count: 3, icon: "✨" },
    { name: "Electric Vehicles", count: 3, icon: "⚡" },
    { name: "Documentation", count: 4, icon: "📄" },
  ];

  // Featured post (first post)
  const featuredPost = blogPosts[0];
  // Other posts
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/dubai-skyline.svg')] bg-no-repeat bg-center bg-cover"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4" aria-label="Dubai's Premier Automotive Insights">
            Dubai's Premier
            <span className="block text-brand-gold mt-2">Automotive Insights</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-white/90 text-base sm:text-lg">
            Expert analysis on UAE's luxury car market, local trends, and professional tips to maximize your vehicle's value in Dubai's competitive marketplace.
          </p>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="relative max-w-xs sm:max-w-md w-full">
              <input 
                type="text" 
                placeholder="Search for automotive insights..." 
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-full border-2 border-brand-gold/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:border-brand-gold"
                aria-label="Search for automotive insights"
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-gold hover:bg-brand-gold/90 text-secondary p-2 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="relative h-64 sm:h-72 md:h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-transparent z-10"></div>
                  <ImageWithFallback
                    src={featuredPost.cover || "/images/dubai-luxury-cars.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-brand-gold text-secondary px-4 py-2 rounded-full font-medium z-20">
                    Featured
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-6 sm:p-8">
                <div className="flex items-center mb-3">
                  <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">
                    {featuredPost.category || "Dubai Market"}
                  </span>
                  <span className="text-muted-foreground text-xs ml-3 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString('en-AE', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold">
                      {featuredPost.author?.[0] || "S"}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-foreground">{featuredPost.author || "Sarah Johnson"}</p>
                      <p className="text-xs text-muted-foreground">{featuredPost.readTime || "8 min read"}</p>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="bg-brand-gold hover:bg-brand-gold/90 text-secondary px-4 py-2 rounded-full text-sm font-medium transition-colors inline-flex items-center"
                  >
                    Read Article <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
              {/* Main Articles */}
              <div className="lg:w-2/3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">Latest Dubai Insights</h2>
                    <p className="text-muted-foreground mt-1 sm:mt-2">
                      Stay updated with UAE's automotive market trends and expert advice
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                    <button className="p-2 rounded-md border border-border hover:bg-muted" aria-label="Show trending">
                      <TrendingUp className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-md border border-border hover:bg-muted" aria-label="Show featured">
                      <Award className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  {otherPosts.map((post) => (
                    <div key={post.slug} className="bg-card border border-border rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
                      <div className="relative h-48 sm:h-56">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <ImageWithFallback
                          src={post.cover || "/images/dubai-cars.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className="bg-brand-gold/90 text-secondary text-xs px-3 py-1 rounded-full">
                            {post.category || "Dubai Market"}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(post.date).toLocaleDateString('en-AE', {
                              day: 'numeric',
                              month: 'short'
                            })}
                          </span>
                          <span className="mx-2 text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime || "5 min read"}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-brand-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-xs text-foreground">
                              {post.author?.[0] || "A"}
                            </div>
                            <span className="ml-2 text-xs font-medium text-foreground">
                              {post.author || "Author"}
                            </span>
                          </div>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-brand-gold hover:text-brand-gold/80 text-sm flex items-center font-medium"
                            aria-label={`Read more about ${post.title}`}
                          >
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Success Stories */}
                <div className="mt-12 sm:mt-16">
                  <div className="flex items-center mb-6">
                    <Users className="h-5 w-5 text-brand-gold mr-2" />
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">Customer Success Stories</h2>
                  </div>
                  
                  <div className="bg-card border border-border rounded-xl shadow-md p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="sm:w-1/3 relative h-48 sm:h-auto rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src="/images/customer-success.svg"
                          alt="Customer success story"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="sm:w-2/3">
                        <div className="flex items-center mb-3">
                          <Star className="h-4 w-4 text-brand-gold" />
                          <Star className="h-4 w-4 text-brand-gold" />
                          <Star className="h-4 w-4 text-brand-gold" />
                          <Star className="h-4 w-4 text-brand-gold" />
                          <Star className="h-4 w-4 text-brand-gold" />
                          <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">How Ahmed Sold His Range Rover in Just 30 Minutes</h3>
                        <p className="text-muted-foreground mb-4">
                          "I was amazed by how quick and professional the entire process was. From valuation to payment, 
                          SellAnyMotor handled everything with expertise and transparency. I received a fair price for my 
                          Range Rover and the funds were transferred immediately."
                        </p>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold">
                            A
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-foreground">Ahmed K.</p>
                            <p className="text-xs text-muted-foreground">Dubai Marina</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 py-3 rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors">
                    Explore More Dubai Insights
                  </button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3 mt-10 lg:mt-0">
                <div className="bg-card border border-border rounded-xl shadow-md p-5 sm:p-6 mb-6 sm:mb-8 sticky top-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground flex items-center">
                    <MapPin className="h-5 w-5 text-brand-gold mr-2" />
                    Dubai Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div 
                        key={category.name} 
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer border border-transparent hover:border-brand-gold/20 transition-all"
                      >
                        <div className="flex items-center">
                          <span className="mr-3 text-lg">{category.icon}</span>
                          <span className="text-foreground font-medium">{category.name}</span>
                        </div>
                        <span className="bg-brand-gold/10 text-brand-gold text-xs px-2.5 py-1 rounded-full font-medium">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl shadow-md p-5 sm:p-6 mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground flex items-center">
                    <TrendingUp className="h-5 w-5 text-brand-gold mr-2" />
                    Trending in Dubai
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {blogPosts.slice(0, 5).map((post, index) => (
                      <Link 
                        key={post.slug} 
                        href={`/blog/${post.slug}`}
                        className="flex items-center hover:bg-muted p-3 rounded-lg group transition-all"
                      >
                        <span className="text-xl sm:text-2xl font-bold text-brand-gold/30 mr-3 group-hover:text-brand-gold">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="text-foreground text-sm font-medium group-hover:text-brand-gold line-clamp-2">{post.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{post.category || "Dubai Market"}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Service Highlights */}
                <div className="bg-card border border-border rounded-xl shadow-md p-5 sm:p-6 mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground flex items-center">
                    <Car className="h-5 w-5 text-brand-gold mr-2" />
                    Our Services
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg hover:border-brand-gold/20 transition-all">
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center mr-2">
                          <Award className="h-3 w-3 text-brand-gold" />
                        </span>
                        Premium Car Valuation
                      </h4>
                      <p className="text-sm text-muted-foreground">Expert valuation based on Dubai market trends and vehicle condition</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-brand-gold/20 transition-all">
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center mr-2">
                          <Clock className="h-3 w-3 text-brand-gold" />
                        </span>
                        Same-Day Payment
                      </h4>
                      <p className="text-sm text-muted-foreground">Immediate cash or bank transfer in AED with no hidden fees</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-brand-gold/20 transition-all">
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center mr-2">
                          <MapPin className="h-3 w-3 text-brand-gold" />
                        </span>
                        Dubai RTA Assistance
                      </h4>
                      <p className="text-sm text-muted-foreground">Complete support with all UAE documentation and transfer requirements</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl shadow-md p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/dubai-pattern.svg')] opacity-10"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">UAE Market Updates</h3>
                    <p className="text-white/80 mb-6 text-sm">
                      Get the latest Dubai car market insights and exclusive UAE automotive trends delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-brand-gold"
                        aria-label="Email for UAE market updates"
                      />
                      <button 
                        className="w-full bg-brand-gold hover:bg-brand-gold/90 text-secondary px-4 py-3 rounded-full font-medium transition-all"
                        aria-label="Subscribe to Dubai updates"
                      >
                        Subscribe to Dubai Updates
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}