import { useState } from "react";

const BlogComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newBlogPost = { title, content };
      setBlogPosts([...blogPosts, newBlogPost]);
      setTitle("");  // Clear input after submission
      setContent(""); // Clear input after submission
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Add New Blog Post</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter the blog title"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            className="w-full p-2 border rounded-md"
            placeholder="Write your blog content"
            rows="6"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Blog Post
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-center mb-4">Blog Posts</h2>
        {blogPosts.length === 0 ? (
          <p>No blog posts added yet!</p>
        ) : (
          blogPosts.map((post, index) => (
            <div key={index} className="mb-6 p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogComponent;
