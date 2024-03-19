const Header = () => {
  return (
    <header className="h-16  bg-primary-200 sticky top-0 left-0 z-50">
      <div className="container mx-auto h-full px-8">
        <div className="flex h-full items-center justify-between">
          <div>
            <a href="" className=" flex gap-1 items-center sm:hidden">
              <figure>
                <img src={logo} alt="Logo" height="30" width="50" />
              </figure>
              <h3 className=" text-primary-900 font-semibold  text-lg">
                Green Yard
              </h3>
            </a>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex gap-2">
              <div className=" h-10 w-10  rounded-full overflow-hidden">
                <img src="https://picsum.photos/300/300" alt="" />
              </div>
              <div className="hidden lg:block">
                <h3 className="text-gray-800 font-medium text-base">
                  Kawsar ahmed
                </h3>
                <p className="text-xs font-medium text-gray-800">Admin</p>
              </div>
            </div>
            <span className="hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </span>
            {/* Hamburder icon */}
            <div>
              <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
