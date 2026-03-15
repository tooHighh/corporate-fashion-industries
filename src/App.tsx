import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutus/AboutUs";
import StayUp from "./components/stayupdated/StayUp";
import Projects from "./components/projects/Projects";
import Sustain from "./components/sustainability/Sustain";
import InTouch from "./components/getInTouch/Touch"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import { useEffect, useRef, useLayoutEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

function App() {

    const lenisRef = useRef<Lenis | null>(null);
    const loadingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        raf(0);

        return () => {
            lenis.destroy();
        };
    }, []);

    useLayoutEffect(() => {
        if (!loadingRef.current) return;

        const tl = gsap.timeline();
        tl.fromTo(
            loadingRef.current,
            { xPercent: 0 },
            { xPercent: 100, duration: 0.5, delay: 2 }
        );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div>
            <div className="loading" ref={loadingRef}>
                <p>Loading Homepage...</p>
            </div>
            <Hero />
            <AboutUs />
            <StayUp />
            <Projects />
            <Sustain />
            <InTouch />
        </div>
    );
}

export default App;