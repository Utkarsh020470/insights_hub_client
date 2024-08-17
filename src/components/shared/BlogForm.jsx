import { useForm } from 'react-hook-form';
import { CATEGORIES } from '@/utils/constants';
import { useEffect } from 'react';

const BlogForm = ({ isEditing = false, data, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues:
      isEditing && data
        ? { title: data.title, content: data.content, category: data.category }
        : {},
  });

  useEffect(() => {
    if (isEditing && data) {
      reset({
        title: data.title || '',
        content: data.content || '',
        category: data.category || '',
      });
    }
  }, [isEditing, data, reset]);

  console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            {isEditing ? 'Edit' : 'Create new'} Blog
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            {isEditing
              ? 'Change Blog content'
              : 'Share Your Thoughts and Ideas – Create a New Blog Post Below'}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-full">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2 flex flex-col">
                <input
                  {...register('title', { required: true })}
                  type="text"
                  className="py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 border-2 rounded-md
                sm:text-sm sm:leading-6 w-full"
                  placeholder="Give a new title"
                />

                {errors.title && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Content
              </label>
              <div className="mt-2 flex flex-col">
                <textarea
                  placeholder="Write your blog content"
                  {...register('content', { required: true })}
                  rows="8"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:p-2 p-1"
                ></textarea>
                {errors.content && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2 flex flex-col">
                <select
                  {...register('category', { required: true })}
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="" className="text-gray-500">
                    Select Category
                  </option>
                  {CATEGORIES.map((category) => (
                    <option
                      value={category.id}
                      key={category.id}
                      className="text-gray-900"
                    >
                      {category.displayName}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className={`rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${
            isEditing
              ? 'bg-yellow-600 hover:bg-yellow-500'
              : 'bg-teal-600 hover:bg-teal-500'
          }`}
        >
          {isEditing ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
