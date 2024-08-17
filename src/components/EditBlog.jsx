import BlogForm from '@/components/shared/BlogForm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getSingleBlogData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/getSingleBlog/${id}`
      );
      console.log(response.data);
      setBlogData(response.data);
    } catch (error) {
      setBlogData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const editBlog = async (editedBlog) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/updateBlog/${id}`,
        {
          ...editedBlog,
        }
      );
      console.log(response.data);
      navigate(`/blog/${blogData._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    editBlog(data);
  };

  useEffect(() => {
    getSingleBlogData();
  }, []);

  return <BlogForm isEditing={true} data={blogData} onSubmit={onSubmit} />;
};

export default EditBlog;
