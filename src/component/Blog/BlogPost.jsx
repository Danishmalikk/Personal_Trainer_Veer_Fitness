import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaComment, FaArrowLeft } from 'react-icons/fa';

const BlogPost = ({ blogPosts }) => {
  const { id } = useParams();
  const post = blogPosts?.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Post Header */}
        <div className="mb-8">
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-6 text-gray-500">
            <span className="flex items-center">
              <FaCalendar className="mr-2" /> {post.date}
            </span>
            <span className="flex items-center">
              <FaUser className="mr-2" /> {post.author}
            </span>
            <span className="flex items-center">
              <FaComment className="mr-2" /> {post.comments} Comments
            </span>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Key Points
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li className="mb-2">Point 1: Detailed explanation about the topic</li>
            <li className="mb-2">Point 2: Important considerations and tips</li>
            <li className="mb-2">Point 3: Practical applications and examples</li>
            <li className="mb-2">Point 4: Common mistakes to avoid</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Related Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(0, 2).map((relatedPost) => (
              <Link 
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img 
                  src={relatedPost.image} 
                  alt={relatedPost.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {relatedPost.excerpt.substring(0, 100)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 