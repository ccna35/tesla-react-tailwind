export default function Home() {
  return (
    <>
      <section className="w-screen h-screen bg-model3-bg bg-center bg-cover flex flex-col justify-between items-center snap-start">
        <div className="upper-part text-center mt-24">
          <h1 className="text-6xl ">Model 3</h1>
          <p className="text-lg">Leasing starting at $349/mo</p>
        </div>
        <div className="bottom-part flex gap-4 flex-col sm:flex-row mb-24">
          <button className="px-16 py-2 rounded-sm bg-slate-800 text-white">
            Custom Order
          </button>
          <button className="px-16 py-2 rounded-sm bg-white text-gray-600">
            Demo Drive
          </button>
        </div>
      </section>
      <section className="w-screen h-screen bg-modelY-bg bg-center bg-cover flex flex-col justify-between items-center snap-start">
        <div className="upper-part text-center mt-24">
          <h1 className="text-6xl ">Model Y</h1>
          <p className="text-lg">Leasing starting at $349/mo</p>
        </div>
        <div className="bottom-part flex gap-4 flex-col sm:flex-row mb-24">
          <button className="px-16 py-2 rounded-sm bg-slate-800 text-white">
            Custom Order
          </button>
          <button className="px-16 py-2 rounded-sm bg-white text-gray-600">
            Demo Drive
          </button>
        </div>
      </section>
      <section className="w-screen h-screen bg-modelS-bg bg-center bg-cover flex flex-col justify-between items-center snap-start">
        <div className="upper-part text-center mt-24">
          <h1 className="text-6xl ">Model S</h1>
          <p className="text-lg">Leasing starting at $349/mo</p>
        </div>
        <div className="bottom-part flex gap-4 flex-col sm:flex-row mb-24">
          <button className="px-16 py-2 rounded-sm bg-slate-800 text-white">
            Custom Order
          </button>
          <button className="px-16 py-2 rounded-sm bg-white text-gray-600">
            Demo Drive
          </button>
        </div>
      </section>
      <section className="w-screen h-screen bg-modelX-bg bg-center bg-cover flex flex-col justify-between items-center snap-start">
        <div className="upper-part text-center mt-24">
          <h1 className="text-6xl ">Model X</h1>
          <p className="text-lg">Leasing starting at $349/mo</p>
        </div>
        <div className="bottom-part flex gap-4 flex-col sm:flex-row mb-24">
          <button className="px-16 py-2 rounded-sm bg-slate-800 text-white">
            Custom Order
          </button>
          <button className="px-16 py-2 rounded-sm bg-white text-gray-600">
            Demo Drive
          </button>
        </div>
      </section>
    </>
  );
}
