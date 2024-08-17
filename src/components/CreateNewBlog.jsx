import BlogForm from '@/components/shared/BlogForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNewBlog = () => {
  const navigate = useNavigate();

  const saveNewBlog = async (data) => {
    // console.log(data);
    const { title, content, category } = data;
    try {
      const createdBlog = await axios.post(
        'http://localhost:8000/createSingleBlog',
        {
          title,
          content,
          category,
        }
      );
      console.log(createdBlog.data.insertedId);
      navigate(`/blog/${createdBlog.data.insertedId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    saveNewBlog(data);
  };

  return <BlogForm isEditing={false} onSubmit={onSubmit} />;
};

export default CreateNewBlog;
