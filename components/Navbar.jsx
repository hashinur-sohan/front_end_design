// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset > 0) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full top-0 transition-all duration-500 ${
//         isSticky ? "bg-[#ffffff]" : "bg-[#2042B6]"
//       }`}
//     >
//       <div className="flex justify-between px-10 py-4">
//         <div className="logo ">
//           {isSticky ? (
//             <Image
//               src="/logo2.png"
//               width={201.01}
//               height={34.63}
//               alt="Logo 2"
//               className="w-[201.01px] h-[34.63px] ml-[19px] my-[17px]"
//             />
//           ) : (
//             <Image
//               src="/logo.png"
//               width={200.52}
//               height={34.63}
//               alt="Logo"
//               className="w-[200.52px] h-[34.63px] ml-[19px] my-[17px]"
//             />
//           )}
//         </div>
//         <div></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset > 0) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 transition-all duration-500 ${
//         isSticky ? "bg-[#ffffff]" : "bg-[#2042B6]"
//       }`}
//     >
//       <div className="flex justify-between px-10 py-4 items-center">
//         <div className="logo">
//           {isSticky ? (
//             <Image
//               src="/logo2.png"
//               width={201.01}
//               height={34.63}
//               alt="Logo 2"
//               className="w-[201.01px] h-[34.63px] ml-[19px] my-[17px]"
//             />
//           ) : (
//             <Image
//               src="/logo.png"
//               width={200.52}
//               height={34.63}
//               alt="Logo"
//               className="w-[200.52px] h-[34.63px] ml-[19px] my-[17px]"
//             />
//           )}
//         </div>
//         <button
//           data-collapse-toggle="navbar-hamburger"
//           type="button"
//           className="inline-flex items-center justify-center p-2 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-hamburger"
//           aria-expanded={isMenuOpen ? "true" : "false"}
//           onClick={toggleMenu}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } w-full mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}
//           id="navbar-hamburger"
//         >
//           <ul className="flex flex-col font-medium">
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset > 0) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 transition-all duration-500 ${
//         isSticky ? "bg-[#ffffff]" : "bg-[#2042B6]"
//       }`}
//     >
//       <div className="flex justify-between px-10 py-4 items-center">
//         <div className="logo">
//           {isSticky ? (
//             <Image
//               src="/logo2.png"
//               width={201.01}
//               height={34.63}
//               alt="Logo 2"
//               className="w-[201.01px] h-[34.63px] ml-[19px] my-[17px]"
//             />
//           ) : (
//             <Image
//               src="/logo.png"
//               width={200.52}
//               height={34.63}
//               alt="Logo"
//               className="w-[200.52px] h-[34.63px] ml-[19px] my-[17px]"
//             />
//           )}
//         </div>
//         <button
//           data-collapse-toggle="navbar-hamburger"
//           type="button"
//           className="inline-flex items-center justify-center p-2  text-sm text-gray-500 rounded-lg hover:bg-gray-100
//           focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-hamburger"
//           aria-expanded={isMenuOpen ? "true" : "false"}
//           onClick={toggleMenu}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           }  w-[340px] mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}
//           id="navbar-hamburger"
//         >
//           <ul className="flex flex-col font-medium">
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 transition-all duration-500 ${
        isSticky ? "bg-[#ffffff]" : "bg-[#2042B6]"
      }`}
    >
      <div className="flex justify-between px-10 py-4 items-center">
        <div className="logo">
          {isSticky ? (
            <Image
              src="/logo2.png"
              width={201.01}
              height={34.63}
              alt="Logo 2"
              className="w-[201.01px] h-[34.63px] ml-[19px] my-[17px]"
            />
          ) : (
            <Image
              src="/logo.png"
              width={200.52}
              height={34.63}
              alt="Logo"
              className="w-[200.52px] h-[34.63px] ml-[19px] my-[17px]"
            />
          )}
        </div>
        <div className=" flex  justify-items-end">
          <div className="flex gap-[15px] mr-[20px] ">
            <div className= {` w-[42px] h-[42px] rounded-[124px]  border-[1px]  flex items-center justify-center ${isSticky ? "border-[#AFCD80]" : "border-[#ffffff] " } ${ isSticky ? "bg-[#ffffff]":" bg-[#2042B6]"}`}>
              {isSticky ? (
                <Image
                src="/share2.png"
                width={14}
                height={14}
                alt="share"
                className="w-[14px] h-[14px]"
              />
              ) : (
                <Image
                src="/share.png"
                width={14}
                height={14}
                alt="share"
                className="w-[14px] h-[14px]"
              />
              ) }
              
            </div>
            <div className={`w-[250px] h-[42px] rounded-[124px]  border-[1px]   flex items-center justify-center ${isSticky ? "text-[#191618]":"text-[#ffffff]" }  ${isSticky ? "bg-[#ffffff]" : " bg-[#2042B6] " } ${isSticky ? "border-[#2042B6] " : "border-[#ffffff]" }`}>
              <p>Download the 2024 Report</p>
            </div>
          </div>
        
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className=" inline-flex items-center justify-center p-2 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-[300px] mt-4 rounded-[18px]  bg-gray-50 dark:bg-gray-800 dark:border-gray-700 absolute right-0 top-14`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium">
            <li>
              <a
                href="#"
                className="font-messina block py-2 px-3 text-[18px] text-[#191618] bg-[#ffffff]  hover:bg-gray-100 rounded dark:bg-blue-600"
                aria-current="page"
              >
                The WPPOOL Index
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" font-messina block py-2 px-3 text-[18px] text-[#191618] bg-[#ffffff] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                All Companies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-messina block py-2 px-3 text-[18px] text-[#191618] bg-[#ffffff] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Potential Future Listings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-messina block py-2 px-3 text-[18px] text-[#191618] bg-[#ffffff] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                State of USA
              </a>
              <a
                href="#"
                className="font-messina block py-2 px-3 text-[18px] text-[#191618] bg-[#ffffff] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Stories & Ideas
              </a>
              <a
                href="#"
                className="font-messina block py-2 px-3 text-[18px] text-[#191618] bg-[#ffffff] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About WPPOOL
              </a>
              <a
                href="#"
                className="font-messina block py-2 px-3 text-[18px] text-[#191618] bg-[#ffffff] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                WPPOOL Portfolio Companies
              </a>
              <a
                href="#"
                className="font-messina block py-2 px-3 text-[18px] text-[#2042B6] bg-[#ffffff] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Visit WPPOOL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
