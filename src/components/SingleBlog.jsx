import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaCalendar } from 'react-icons/fa';

const SingleBlog = () => {
  const { id } = useParams();

  const [blogData, setBlogData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getSingleBlogData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/getSingleBlog/${id}`
      );

      setBlogData(response.data);
    } catch (error) {
      setBlogData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    getSingleBlogData();
  }, [id]);

  return (
    <div>
      {isLoading && !blogData ? (
        <div>Loading Blog Content...</div>
      ) : (
        <div className="mx-auto w-full px-10 max-w-4xl">
          <div className="flex justify-end items-center gap-3">
            <span className="relative z-10 rounded-xl bg-gray-100 px-1.5 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {blogData.category?.toUpperCase()}
            </span>
            <time
              dateTime="2020-03-16"
              className="text-gray-500 flex gap-1 justify-center items-center"
            >
              <FaCalendar />
              {new Date(blogData.createdDateTime).toDateString()}
            </time>
          </div>
          <h1
            className="text-center tracking-wide text-3xl font-extrabold 
                        leading-tight text-gray-900 lg:mb-6 lg:text-4xl"
          >
            {blogData.title}
          </h1>
          <p>{blogData.content}</p>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
