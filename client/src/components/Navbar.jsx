import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Offcanvas from "./Offcanvas";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  const handleOffCanvas = () => {
    setOffCanvas((prev) => !prev);
  };

  return (
    <>
      <nav className="py-4 px-8 flex justify-between items-center fixed w-full">
        <NavLink to="/">
          <div className="brand w-32">
            <svg
              className=""
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </NavLink>
        <div className="products-menu hidden xl:flex gap-8">
          <div>Model S</div>
          <div>Model 3</div>
          <div>Model X</div>
          <div>Model Y</div>
          <div>Solar Roof</div>
          <div>Solar Panels</div>
        </div>
        <div className="right-menu hidden xl:flex gap-8">
          <NavLink to="/shop">
            <div>Shop</div>
          </NavLink>
          <div>Account</div>
          <div>Menu</div>
        </div>
        <div
          onClick={handleOffCanvas}
          className="py-1 px-4 bg-slate-300 rounded-md transition hover:bg-slate-400 xl:hidden cursor-pointer"
        >
          Menu
        </div>
        <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      </nav>

      <main className="overflow-x-hidden overflow-y-scroll w-screen h-screen snap-y snap-mandatory">
        <Outlet />
      </main>
    </>

    //     <nav
    //       className="
    //   relative
    //   w-full
    //   flex flex-wrap
    //   items-center
    //   justify-between
    //   py-4
    //   bg-gray-100
    //   text-gray-500
    //   hover:text-gray-700
    //   focus:text-gray-700
    //   shadow-lg
    //   navbar navbar-expand-lg navbar-light
    //   "
    //     >
    //       <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    //         <button
    //           className="
    //       navbar-toggler
    //       text-gray-500
    //       border-0
    //       hover:shadow-none hover:no-underline
    //       py-2
    //       px-2.5
    //       bg-transparent
    //       focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    //     "
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarSupportedContent"
    //           aria-controls="navbarSupportedContent"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <svg
    //             aria-hidden="true"
    //             focusable="false"
    //             data-prefix="fas"
    //             data-icon="bars"
    //             className="w-6"
    //             role="img"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 448 512"
    //           >
    //             <path
    //               fill="currentColor"
    //               d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    //             ></path>
    //           </svg>
    //         </button>
    //         <div
    //           className="collapse navbar-collapse flex-grow items-center"
    //           id="navbarSupportedContent"
    //         >
    //           <a
    //             className="
    //         flex
    //         items-center
    //         text-gray-900
    //         hover:text-gray-900
    //         focus:text-gray-900
    //         mt-2
    //         lg:mt-0
    //         mr-1
    //       "
    //             href="#"
    //           >
    //             <img
    //               src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
    //               alt=""
    //               loading="lazy"
    //             />
    //           </a>
    //           {/* <!-- Left links --> */}
    //           <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
    //             <li className="nav-item p-2">
    //               <a
    //                 className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
    //                 href="#"
    //               >
    //                 Dashboard
    //               </a>
    //             </li>
    //             <li className="nav-item p-2">
    //               <a
    //                 className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
    //                 href="#"
    //               >
    //                 Team
    //               </a>
    //             </li>
    //             <li className="nav-item p-2">
    //               <a
    //                 className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
    //                 href="#"
    //               >
    //                 Projects
    //               </a>
    //             </li>
    //           </ul>
    //           {/* <!-- Left links --> */}
    //         </div>
    //         {/* <!-- Collapsible wrapper --> */}

    //         {/* <!-- Right elements --> */}
    //         <div className="flex items-center relative">
    //           {/* <!-- Icon --> */}
    //           <a
    //             className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4"
    //             href="#"
    //           >
    //             <svg
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fas"
    //               data-icon="shopping-cart"
    //               className="w-4"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 576 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
    //               ></path>
    //             </svg>
    //           </a>
    //           <div className="dropdown relative">
    //             <a
    //               className="
    //           text-gray-500
    //           hover:text-gray-700
    //           focus:text-gray-700
    //           mr-4
    //           dropdown-toggle
    //           hidden-arrow
    //           flex items-center
    //         "
    //               href="#"
    //               id="dropdownMenuButton1"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               <svg
    //                 aria-hidden="true"
    //                 focusable="false"
    //                 data-prefix="fas"
    //                 data-icon="bell"
    //                 className="w-4"
    //                 role="img"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 448 512"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
    //                 ></path>
    //               </svg>
    //               <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
    //                 1
    //               </span>
    //             </a>
    //             <ul
    //               className="
    //       dropdown-menu
    //       min-w-max
    //       absolute
    //       hidden
    //       bg-white
    //       text-base
    //       z-50
    //       float-left
    //       py-2
    //       list-none
    //       text-left
    //       rounded-lg
    //       shadow-lg
    //       mt-1
    //       hidden
    //       m-0
    //       bg-clip-padding
    //       border-none
    //       left-auto
    //       right-0
    //     "
    //               aria-labelledby="dropdownMenuButton1"
    //             >
    //               <li>
    //                 <a
    //                   className="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-gray-700
    //           hover:bg-gray-100
    //         "
    //                   href="#"
    //                 >
    //                   Action
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   className="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-gray-700
    //           hover:bg-gray-100
    //         "
    //                   href="#"
    //                 >
    //                   Another action
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   className="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-gray-700
    //           hover:bg-gray-100
    //         "
    //                   href="#"
    //                 >
    //                   Something else here
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="dropdown relative">
    //             <a
    //               className="dropdown-toggle flex items-center hidden-arrow"
    //               href="#"
    //               id="dropdownMenuButton2"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               <img
    //                 src="https://mdbootstrap.com/img/new/avatars/2.jpg"
    //                 className="rounded-full"
    //                 alt=""
    //                 loading="lazy"
    //               />
    //             </a>
    //             <ul
    //               className="
    //     dropdown-menu
    //     min-w-max
    //     absolute
    //     hidden
    //     bg-white
    //     text-base
    //     z-50
    //     float-left
    //     py-2
    //     list-none
    //     text-left
    //     rounded-lg
    //     shadow-lg
    //     mt-1
    //     hidden
    //     m-0
    //     bg-clip-padding
    //     border-none
    //     left-auto
    //     right-0
    //   "
    //               aria-labelledby="dropdownMenuButton2"
    //             >
    //               <li>
    //                 <a
    //                   className="
    //         dropdown-item
    //         text-sm
    //         py-2
    //         px-4
    //         font-normal
    //         block
    //         w-full
    //         whitespace-nowrap
    //         bg-transparent
    //         text-gray-700
    //         hover:bg-gray-100
    //       "
    //                   href="#"
    //                 >
    //                   Action
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   className="
    //         dropdown-item
    //         text-sm
    //         py-2
    //         px-4
    //         font-normal
    //         block
    //         w-full
    //         whitespace-nowrap
    //         bg-transparent
    //         text-gray-700
    //         hover:bg-gray-100
    //       "
    //                   href="#"
    //                 >
    //                   Another action
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   className="
    //         dropdown-item
    //         text-sm
    //         py-2
    //         px-4
    //         font-normal
    //         block
    //         w-full
    //         whitespace-nowrap
    //         bg-transparent
    //         text-gray-700
    //         hover:bg-gray-100
    //       "
    //                   href="#"
    //                 >
    //                   Something else here
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         {/* <!-- Right elements --> */}
    //       </div>
    //     </nav>
  );
}
