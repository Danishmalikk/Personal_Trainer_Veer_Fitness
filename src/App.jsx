import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost blogPosts={blogPosts} />} />
        {/* ... other routes ... */}
      </Routes>
    </Router>
  );
}

export default App; 