import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Card = ({
  createdDateTime,
  title,
  content,
  _id,
  category,
  updateAllBlogList,
}) => {
  const onClickEditBlog = (e) => {
    e.preventDefault();
    navigate(`/edit-blog/${_id}`);
  };

  const deleteBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:8000/deleteBlog/${_id}`
      );

      updateAllBlogList(_id);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <article className="flex max-w-xl flex-col items-start justify-between rounded-md border-2 border-gray-100 p-3 shadow-xl min-h-56 hover:scale-105 duration-500 transition-all">
      <div>
        <div className="flex justify-between w-full items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">
            {new Date(createdDateTime).toDateString()}
          </time>
          <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {category?.toUpperCase()}
          </span>
        </div>
        <h3 className="line-clamp-1 pt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
          {title}
        </h3>
        <p className="mt-5 line-clamp-3 text-sm text-gray-600 flex-1">
          {content}
        </p>
      </div>
      <div className="flex justify-end items-center w-full gap-5 pr-2 pt-2">
        <button
          onClick={onClickEditBlog}
          className="p-1.5 rounded-full hover:bg-gray-200 duration-300 transition-all bg-white/50"
        >
          <FaRegEdit />
        </button>
        <button
          onClick={deleteBlog}
          className="p-1.5 rounded-full hover:bg-gray-200 duration-300 transition-all bg-white/50"
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default Card;
