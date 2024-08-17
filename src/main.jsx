import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from '@/RootLayout';
import SingleBlog from '@/components/SingleBlog';
import BlogsContainer from '@/components/BlogsContainer';
import CreateNewBlog from '@/components/CreateNewBlog';
import EditBlog from '@/components/EditBlog';
import NotFound from '@/components/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<BlogsContainer />} />
      <Route path="/blog/:id" element={<SingleBlog />} />
      <Route path="/create-new-blog" element={<CreateNewBlog />} />
      <Route path="/edit-blog/:id" element={<EditBlog />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
