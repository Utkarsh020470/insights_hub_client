import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@/components/shared/card';

const BlogsContainer = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getAllBlogs');

      setBlogs(response.data);
    } catch (error) {
      console.log(error);
      setBlogs([]);
    }
  };

  const updateAllBlogList = (_id) => {
    const allBlogs = [...blogs].filter((blog) => {
      if (blog._id !== _id);
    });
    setBlogs(allBlogs);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Latest Blogs
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Dive into a world of insightful articles, tips, and stories curated
            just for you
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-3 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link to={`/blog/${blog._id}`} key={blog._id}>
              <Card
                createdDateTime={blog.createdDateTime}
                title={blog.title}
                content={blog.content}
                _id={blog._id}
                category={blog.category}
                updateAllBlogList={updateAllBlogList}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsContainer;
