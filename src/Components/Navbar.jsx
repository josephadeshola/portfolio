// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MdLightMode, MdDarkMode } from 'react-icons/md';
// import { useDarkMode } from '../../DarkModeContext';

// const Navbar = () => {
//   const { isDarkMode, toggleDarkMode } = useDarkMode();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleToggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 border-gray-200 ${
//           isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
//         }`}
//       >
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <span className="self-center animate-bounce font-bold md:text-xl text-md whitespace-nowrap">
//               {"<"}AYO <span className='text-yellow-300'>MIDE{"/>"}</span>
//             </span>
//           </Link>

//           <button
//             onClick={handleToggleDropdown}
//             type="button"
//             className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none ${
//               isDarkMode
//                 ? 'text-gray-400 hover:bg-white focus:ring-white'
//                 : 'text-gray-500 focus:ring-gray-200'
//             }`}
//             aria-controls="navbar-default"
//             aria-expanded={isDropdownOpen}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>

//           <div
//             className={`w-full md:block md:w-auto ${
//               isDropdownOpen ? 'block' : 'hidden'
//             }`}
//             id="navbar-default"
//           >
//             <ul
//               className={`font-medium flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${
//                 isDarkMode
//                   ? 'bg-black border-gray-700 md:bg-transparent text-white'
//                   : 'bg-white border-gray-100 md:bg-transparent text-black'
//               }`}
//             >
//               <li>
//                 <Link
//                   to="/"
//                   className={`block py-2 px-3 rounded md:p-0 ${
//                     isDarkMode
//                       ? 'hover:text-white'
//                       : 'hover:bg-gray-100 hover:text-blue-700'
//                   }`}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/project"
//                   className={`block py-2 px-3 rounded md:p-0 ${
//                     isDarkMode
//                       ? 'hover:text-white'
//                       : 'hover:bg-gray-100 hover:text-blue-700'
//                   }`}
//                 >
//                   Project
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/resume"
//                   className={`block py-2 px-3 rounded md:p-0 ${
//                     isDarkMode
//                       ? 'hover:text-white'
//                       : 'hover:bg-gray-100 hover:text-blue-700'
//                   }`}
//                 >
//                   Resume
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className={`block py-2 px-3 rounded md:p-0 ${
//                     isDarkMode
//                       ? 'hover:text-white'
//                       : 'hover:bg-gray-100 hover:text-blue-700'
//                   }`}
//                 >
//                   Contact
//                 </Link>
//               </li>
              
//               <li>
//                 <div
//                   onClick={toggleDarkMode}
//                   className={`md:px-2 md:py-2 px-3 py-3 rounded-full text-xl md:text-sm float-end focus:outline-none ${
//                     isDarkMode
//                       ? 'bg-yellow-300 text-white hover:bg-yellow-400 cursor-pointer'
//                       : 'bg-yellow-300 text-white hover:bg-yellow-600'
//                   }`}
//                 >
//                   {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

 import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
 import { MdLightMode, MdDarkMode } from 'react-icons/md';
 import { useDarkMode } from '../../DarkModeContext';

const Navbar = () => {
     const { isDarkMode, toggleDarkMode } = useDarkMode();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const handleToggleDropdown = () => {
     setIsDropdownOpen((prev) => !prev);
   };

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b bg-gray-900/80 shadow">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mt-1 mx-auto px-4 py-1">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center animate-bounce font-bold md:text-md text-md whitespace-nowrap">
        {"<"}AYO<span className="text-orange-500">MIDE{"/>"}</span>
      </span>
    </Link>

    <button
      onClick={handleToggleDropdown}
      type="button"
      className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden ${
        isDarkMode
          ? 'text-white hover:bg-white/10'
          : 'text-black hover:bg-black/10'
      }`}
      aria-controls="navbar-default"
      aria-expanded={isDropdownOpen}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 17 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    <div
      className={`w-full md:block md:w-auto ${isDropdownOpen ? 'block' : 'hidden'}`}
      id="navbar-default"
    >
      <ul
        className={`font-medium flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${
          isDarkMode
            ? 'bg-black/60 border-gray-700 md:bg-transparent text-white'
            : 'bg-white/70 border-gray-100 md:bg-transparent text-black'
        }`}
      >
        {['Home', 'Project', 'Resume', 'Contact'].map((item) => (
          <li key={item}>
            <Link
              to={`/${item.toLowerCase()}`}
              className={`block py-2 px-3 rounded md:p-0 ${
                isDarkMode
                  ? 'hover:text-white'
                  : 'hover:bg-gray-100 hover:text-blue-700'
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <div
            onClick={toggleDarkMode}
            className={`md:px-2 md:py-2 px-3 py-3 rounded-full text-xl md:text-sm cursor-pointer ${
              isDarkMode
                ? 'bg-orange-500 text-white hover:bg-orange-400'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </>
  );
};

export default Navbar;
