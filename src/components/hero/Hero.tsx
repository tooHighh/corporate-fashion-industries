import Nav from "./Nav";
import './style.css';
import video from "../../assets/fashion-shop.mp4";
import img1 from "../../assets/hero-right1.avif";
import img2 from "../../assets/hero-right2.avif";
import { useRef, useLayoutEffect, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const Hero = forwardRef<HTMLDivElement>((_props, heroRef) => {

    const localHeroRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!heroRef) return;

        if (typeof heroRef === "function") {
            heroRef(localHeroRef.current);
        } else {
            heroRef.current = localHeroRef.current;
        }
    }, [heroRef]);

    const videoRef = useRef<HTMLVideoElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const heroTitleOneRef = useRef<HTMLParagraphElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.to(videoRef.current, { width: "61%", duration: 1 }, "<2.5")
                .from(rightRef.current, { xPercent: 100, duration: 1 }, "<")
                .from(navRef.current, { yPercent: -100, opacity: 0, duration: 1 }, "<0.5")
                .from(heroTitleOneRef.current, { yPercent: 50, opacity: 0, duration: 0.5 }, "<0.25")
                .to(".line span", {
                    y: 0,
                    duration: 1,
                    ease: "power4.out",
                    stagger: 0.1
                }, "<0.25")
                .to(".hero-right1", {
                    y: 0,
                    duration: 1,
                    ease: "power4.out",
                }, "<")
                .to(".hero-right2", {
                    y: 0,
                    duration: 1,
                    ease: "power4.out",
                }, "<0.1")
                .call(() => ScrollTrigger.refresh());

        }, localHeroRef);


        return () => ctx.revert();

    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            gsap.to(localHeroRef.current, {
                scrollTrigger: {
                    trigger: localHeroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                yPercent: 20,
                ease: "none"
            });

        }, localHeroRef);

        return () => ctx.revert();
    }, []);



    return (
        <div className="hero" ref={localHeroRef}>
            <Nav ref={navRef} />

            <div className="hero-title">
                <p ref={heroTitleOneRef}>Boost your</p>
                <h1>
                    <div className="line">
                        <span>CORPORATE</span>
                    </div>
                    <div className="line">
                        <span>IDENTITY</span>
                    </div>
                </h1>
            </div>
            <div className="hero-right" ref={rightRef}>
                <p>
                    <div className="line">
                        <span>From idea to iconic item. Corporate Fashion Industries</span>
                    </div>
                    <div className="line">
                        <span>designs and produces stylish corporate clothing from</span>
                    </div>
                    <div className="line">
                        <span>premium, sustainable fabrics — always unique, always</span>
                    </div>
                    <div className="line">
                        <span>with an eye for detail.</span>
                    </div>
                </p>
                <div className="hero-right-images">
                    <motion.div className="hero-right1" whileHover="hover">
                        <motion.div
                            transition={{ duration: 0.5, ease: "linear" }}
                            variants={{
                                hover: { rotate: 360 }
                            }}
                        />

                        <motion.img
                            src={img1}
                            alt=""
                            transition={{ duration: 0.5, delay: 0.25 }}
                            variants={{
                                hover: { scale: 1.1 }
                            }}
                        />
                    </motion.div>

                    <motion.div className="hero-right2" whileHover="hover">
                        <motion.div
                            transition={{ duration: 0.5, ease: "linear" }}
                            variants={{
                                hover: { rotate: 360 }
                            }}
                        />

                        <motion.img
                            src={img2}
                            alt=""
                            transition={{ duration: 0.5, delay: 0.25 }}
                            variants={{
                                hover: { scale: 1.1 }
                            }}
                        />
                    </motion.div>

                </div>
            </div>
            <video autoPlay muted loop playsInline ref={videoRef}>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
});

export default Hero;
