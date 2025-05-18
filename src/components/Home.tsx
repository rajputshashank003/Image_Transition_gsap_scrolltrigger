import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const Home = () => {
    useGSAP(() => {
        const gtl = gsap.timeline({
            defaults: {
                ease: "none"
            },
            scrollTrigger: {
                trigger: ".main",
                start: "top 0",
                end: "top -=5000",
                scrub: true,
                pin: true,
            }
        })

        gtl.to(".car1", {
            top: 0,
        }, 'a')
        .to(".car2", {
            top: '10%',
        }, 'a')

        .to(".car1", {
            top: '-15%',
            scale: 0.8
        }, 'b')
        .to(".car2", {
            top: 0,
        }, 'b')
        .to(".car3", {
            top: '70%',
        }, 'b')

        .to(".car1", {
            top: '-60%',
            scale: 0.4
        }, 'c')
        .to(".car2", {
            top: '-60%',
            scale: 0.4
        }, 'c') 
        .to(".car3", {
            top: 0,
        }, 'c') 
        .to(".car4", {
            top: "50%",
        }, 'c') 

        .to(".car3", {
            top: '-60%',
            scale: 0.4
        }, 'd') 
        .to(".car4", {
            top: '10%',
        }, 'd') 

        .to(".car4", {
            top: 0,
        }, 'e') 
        .to(".car5" , {
            top: '85%'
        }, 'e')
        .to(".car6" , {
            top: '85%'
        }, 'e')
        .to(".car7" , {
            top: '90%'
        }, 'e')

        .to(".car4", {
            top: '-70%',
            scale: 0.5
        }, 'f') 
        .to(".car5" , {
            top: '65%'
        }, 'f')
        .to(".car6" , {
            top: '65%'
        }, 'f')
        .to(".car7" , {
            top: '80%'
        }, 'f')

        .to(".car5" , {
            top: 0
        }, 'g')
        .to(".car6" , {
            top: 0
        }, 'g')
        .to(".car7" , {
            top: '10%'
        }, 'g')
        .to(".car8" , {
            top: '95%'
        }, 'g')

        .to(".car5" , {
            top: '-10%',
            scale: 0.9
        }, 'h')
        .to(".car6" , {
            top: '-10%',
            scale: 0.9
        }, 'h')
        .to(".car7" , {
            top: 0
        }, 'h')
        .to(".car8" , {
            top: '85%'
        }, 'h')
        .to(".car9" , {
            top: '95%'
        }, 'h')

        .to(".car5" , {
            top: '-50%',
            scale: 0.7
        }, 'i')
        .to(".car6" , {
            top: '-50%',
            scale: 0.7
        }, 'i')
        .to(".car7" , {
            top: '-65%',
            scale: 0.7
        }, 'i')
        .to(".car8" , {
            top: '62%'
        }, 'i')
        .to(".car9" , {
            top: '72%'
        }, 'i')

        .to(".car8" , {
            top: '37%'
        }, 'j')
        .to(".car9" , {
            top: '47%'
        }, 'j')

        .to(".car8" , {
            top: '0%'
        }, 'k')
        .to(".car9" , {
            top: '10%'
        }, 'k')

        .to(".car8" , {
            top: '-10%',
            scale: 0.9
        }, 'l')
        .to(".car9" , {
            top: 0
        }, 'l')

        .to(".car8" , {
            top: '-30%',
            scale: 0.8
        }, 'm')

        .to(".car8" , {
            top: '-60%',
            scale: 0.7
        }, 'n')
        .to(".car9" , {
            top: '-60%',
            scale: 0.7
        }, 'n')

    })

    return (
        <div className="bg-[#E6ACCF] italic overflow-hidden flex justify-center items-center main relative h-screen ">
            <div className="text font-serif text-center text-[2rem] text-zinc-950 relative z-[999]">
                An 
                <span className="uppercase not-italic mx-3 font-extrabold">impressive</span> 
                gem in the heart of <br />
                <span className="uppercase not-italic mx-3 font-extrabold font-sans">Amsterdam.</span> 
                Industrial, fresh, innovative <br /> 
                and the love for detail and history oozes <br />
                from the walls!
            </div>
            <img
                src="car1.jpg"
                alt="Car 1"
                className="h-[500px] object-cover w-[350px] car1 absolute top-[100%] right-[7%]"
            />
            <img
                src="car4.jpg"
                alt="Car 2"
                className="h-[180px] w-[240px] object-cover car2 absolute left-[15%] top-[140%] "
            />
            <img
                src="car5.jpg"
                alt="Car 3"
                className="h-[260px] w-[420px] object-cover car3 absolute left-[5%] top-[140%] "
            />
            <img
                src="car6.jpg"
                alt="Car 4"
                className="h-[460px] w-[300px] object-cover car4 absolute right-[5%] top-[140%] "
            />
            <img
                src="car7.jpg"
                alt="Car 5"
                className="h-[180px] w-[250px] object-cover car5 absolute left-[5%] top-[140%] "
            />
            <img
                src="car3.jpg"
                alt="Car 6"
                className="h-[180px] w-[300px] object-cover car6 absolute right-[5%] top-[140%] "
            />
            <img
                src="car4.jpg"
                alt="Car 7"
                className="h-[480px] w-[300px] object-cover car7 absolute left-[33%] top-[140%] "
            />
            <img
                src="car1.jpg"
                alt="Car 8"
                className="h-[380px] z-[9999] w-[300px] object-cover car8 absolute left-[13%] top-[140%] "
            />
            <img
                src="car4.jpg"
                alt="Car 9"
                className="h-[200px] z-[9999] w-[300px] object-cover car9 absolute left-[53%] top-[140%] "
            />

        </div>
    )
}

export default Home
