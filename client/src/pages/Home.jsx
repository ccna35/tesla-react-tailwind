import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Footer from "../components/Footer";

export default function Home() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Fired!");
    console.log("Page scroll: ", latest);
  });

  return (
    <>
      <section className="w-screen h-screen bg-model3-bg bg-center bg-cover flex flex-col justify-between items-center snap-start">
        <motion.div className="upper-part text-center mt-24">
          <motion.h1
            className="text-6xl"
            initial={{ opacity: 0, y: 20, visibility: "invisible" }}
            animate={{ y: -20, opacity: 1, visibility: "visible" }}
            transition={{ duration: 0.5 }}
          >
            Model 3
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20, visibility: "invisible" }}
            animate={{ y: -20, opacity: 1, visibility: "visible" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Leasing starting at $349/mo
          </motion.p>
        </motion.div>
        <div className="bottom-part flex gap-4 flex-col sm:flex-row mb-24">
          <motion.button
            className="px-16 py-2 rounded-sm bg-slate-800 text-white"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Custom Order
          </motion.button>
          <motion.button
            className="px-16 py-2 rounded-sm bg-white text-gray-600"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Demo Drive
          </motion.button>
        </div>
      </section>
      <section className="w-screen h-screen bg-modelY-bg bg-center bg-cover flex flex-col justify-between items-center snap-start">
        <motion.div className="upper-part text-center mt-24">
          <h1 className="text-6xl ">Model Y</h1>
          <p className="text-lg">Leasing starting at $349/mo</p>
        </motion.div>
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
      <section className="w-screen h-screen bg-solarPanels-bg bg-center bg-cover flex flex-col justify-between items-center snap-start">
        <div className="upper-part text-center mt-24">
          <h1 className="text-6xl ">Solar Panels</h1>
          <p className="text-lg">Lowest Cost Solar Panels in America</p>
        </div>
        <div className="bottom-part flex gap-4 flex-col sm:flex-row mb-24">
          <button className="px-16 py-2 rounded-sm bg-slate-800 text-white">
            Order Now
          </button>
          <button className="px-16 py-2 rounded-sm bg-white text-gray-600">
            Learn More
          </button>
        </div>
      </section>
      <section className="w-screen h-screen bg-solarRoof-bg bg-center bg-cover flex flex-col justify-between items-center snap-start">
        <div className="upper-part text-center mt-24">
          <h1 className="text-6xl ">Solar Roof</h1>
          <p className="text-lg">Produce Clean Energy From Your Roof</p>
        </div>
        <div className="bottom-part flex gap-4 flex-col sm:flex-row mb-24">
          <button className="px-16 py-2 rounded-sm bg-slate-800 text-white">
            Order Now
          </button>
          <button className="px-16 py-2 rounded-sm bg-white text-gray-600">
            Learn More
          </button>
        </div>
      </section>
      <section className="w-screen h-screen bg-accessories-bg bg-center bg-cover flex flex-col justify-between items-center snap-start">
        <div className="upper-part text-center mt-24">
          <h1 className="text-6xl ">Accessories</h1>
        </div>
        <div className="bottom-part -mb-64">
          <button className="px-24 py-2 rounded-sm bg-slate-800 text-white">
            Shop Now
          </button>
        </div>
        <Footer />
      </section>
    </>
  );
}
