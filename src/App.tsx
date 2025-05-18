import { useEffect } from "react"
import Home from "./components/Home"
import LocomotiveScroll from "locomotive-scroll"

const App = () => {
    
    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {
                wrapper: window,
                content: document.documentElement,
                lerp: 10,
                duration: 20,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
            },
        });

        return () => locomotiveScroll.destroy();
    },[]);

    return (
        <div className="h-fit bg-zinc-800 ">
            <div data-scroll data-scroll-speed='-0.2' className="h-screen  flex justify-center items-center text-[3rem] text-white relative bg-cyan-600 shadow-xl shadow-gray-700 rounded-b-[70px]">
                Scroll Now
            </div>
            <Home/>
            <div data-scroll data-scroll-speed='2' className="h-screen z-[999] relative bg-cyan-600 shadow-[0px_-5px_14px] shadow-gray-700 rounded-t-[70px]"></div>
        </div>
    )
}

export default App