import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="max-w-7xl px-6 lg:p-8 py-3 lg:py-5 mx-auto">
      <header className="flex gap-5 justify-between items-center mb-10 border-b border-b-gray-200 pb-2">
        <NavLink to="/">
          <h1 className="text-teal-500 text-xl font-semibold">Insights Hub</h1>
        </NavLink>
        <div className="flex gap-3 justify-center items-center ">
          <NavLink
            to="/"
            className="hover:scale-105 duration-300 transition-all hover:text-gray-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/create-new-blog"
            className="hover:scale-105 duration-300 transition-all hover:text-gray-400"
          >
            Create New
          </NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
