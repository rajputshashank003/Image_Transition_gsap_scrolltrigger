import { useEffect } from "react"
import Home from "./components/Home"
import LocomotiveScroll from "locomotive-scroll"

const App = () => {
    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();

        return () => locomotiveScroll.destroy();
    });

    return (
        <div className="h-fit bg-zinc-800 ">
            <div className="h-screen z-[999] flex justify-center items-center text-[3rem] text-white relative bg-cyan-600 shadow-xl shadow-gray-700 rounded-b-[70px]">
                Scroll Now
            </div>
            <Home/>
            <div data-scroll data-speed='2' className="h-screen z-[999] relative bg-cyan-600 shadow-[0px_-5px_14px] shadow-gray-700 rounded-t-[70px]"></div>
        </div>
    )
}

export default App