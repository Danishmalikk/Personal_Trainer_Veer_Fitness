import React from 'react';
import { FaCalendar, FaUser, FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Building Muscle Mass",
    excerpt: "Learn the science-backed methods for maximizing muscle growth through proper training and nutrition.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Veer Fitness",
    date: "March 15, 2024",
    category: "Training",
    comments: 12,
    tags: ["Muscle Building", "Nutrition", "Workout"]
  },
  {
    id: 2,
    title: "Nutrition Myths Debunked: What Really Works",
    excerpt: "Separating fact from fiction in the world of fitness nutrition. Get evidence-based answers to common diet questions.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Veer Fitness",
    date: "March 12, 2024",
    category: "Nutrition",
    comments: 8,
    tags: ["Diet", "Health", "Nutrition"]
  },
  {
    id: 3,
    title: "Best Fat Loss Workouts for 2024",
    excerpt: "Discover the most effective workout routines that maximize fat burning while preserving muscle mass.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Veer Fitness",
    date: "March 10, 2024",
    category: "Weight Loss",
    comments: 15,
    tags: ["Fat Loss", "Cardio", "HIIT"]
  },
  {
    id: 4,
    title: "Recovery Techniques for Better Results",
    excerpt: "Learn how proper recovery methods can enhance your training results and prevent injuries.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Veer Fitness",
    date: "March 8, 2024",
    category: "Recovery",
    comments: 6,
    tags: ["Recovery", "Mobility", "Sleep"]
  }
];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fitness Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest fitness tips, training advice, and nutrition guidance
            from Veer Fitness experts.
          </p>
        </div>

        {/* Featured Post */}
        <Link to={`/blog/${blogPosts[0].id}`} className="block mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="md:flex">
              <div className="md:w-2/3">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/3">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {blogPosts[0].category}
                </div>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  {blogPosts[0].title}
                </h2>
                <p className="mt-4 text-gray-600">
                  {blogPosts[0].excerpt}
                </p>
                <div className="mt-6">
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <FaCalendar className="mr-2" /> {post.date}
                      </span>
                      <span className="flex items-center">
                        <FaComment className="mr-2" /> {post.comments}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-2" /> {post.author}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
