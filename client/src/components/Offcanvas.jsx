function Offcanvas({ offCanvas, setOffCanvas }) {
  return (
    <div
      className={`overlay w-screen h-screen flex justify-end absolute top-0 left-0 bg-slate-800 text-white overflow-hidden ${
        !offCanvas && "opacity-0 invisible"
      } transition-all duration-1000 ease-in-out bg-opacity-50 backdrop-blur-sm`}
    >
      <div
        className={`group bg-white text-gray-900 w-80 p-4 flex flex-col justify-start transition-all duration-1000 ease-in-out  ${
          !offCanvas && "translate-x-full"
        }`}
      >
        <div
          onClick={() => setOffCanvas((prev) => !prev)}
          className="close-icon grid place-items-center cursor-pointer w-8 h-8 transition hover:bg-slate-100 rounded-full self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="content overflow-y-scroll">
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Model S
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Model 3
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Model X
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Model Y
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Solar Roof
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Solar Panels
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Existing Inventory
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Used Inventory
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Trade-In
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Demo Drive
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Insurance
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Powerwall
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Commercial Energy
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Utilities
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Charging
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Find Us
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Support
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Investor Relations
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Shop
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            Account
          </div>
          <div className="menu-item cursor-pointer mb-4 px-6 py-2 transition hover:bg-slate-100 rounded-md">
            More
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offcanvas;
