import "./style.css";
import img1 from "../../assets/about1.avif";
import img2 from "../../assets/about2.avif";
import img3 from "../../assets/about3.avif";
import img4 from "../../assets/about4.avif";
import img5 from "../../assets/about5.avif";
import img6 from "../../assets/about6.avif";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const aboutPinnedRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    const aboutNavRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const h1Span1Ref = useRef<HTMLSpanElement>(null);
    const h1Span2Ref = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: aboutRef.current,
                start: "top top",
                end: "bottom top",
                pin: aboutPinnedRef.current,
                pinSpacing: false,
                invalidateOnRefresh: true,

            });
        }, aboutRef);

        gsap.fromTo(imagesRef.current, {
            yPercent: 20,
        }, {
            yPercent: 0,
            ease: "power4.out",
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
            }
        });

        gsap.fromTo(
            h1Span1Ref.current,
            { yPercent: 100 },
            {
                yPercent: 0,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top top+=30%",
                }
            }
        );

        gsap.fromTo(
            h1Span2Ref.current,
            { yPercent: 100 },
            {
                yPercent: 0,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top top+=30%",
                }
            }
        );


        ScrollTrigger.refresh();

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div className="aboutus" ref={ref}>
            <nav className="about-nav" ref={aboutNavRef}>
                <p>SINCE 2008</p>
                <p>ABOUT US.</p>
            </nav>
            <div className="about-main">
                <h1>
                    <div className="lineH1">
                        <span ref={h1Span1Ref}>Our story from the </span>
                    </div>
                    <div className="lineH1">
                        <span ref={h1Span2Ref}>start</span>
                    </div>
                </h1>
                <div className="about-wrapper" ref={aboutRef}>
                    <div className="about-image-about" ref={imagesRef}>
                        <div className="column">
                            <div><img src={img1} alt="about1" /></div>
                            <div><img src={img3} alt="about3" /></div>
                            <div> <img src={img5} alt="about5" /></div>
                        </div>
                        <div className="column" >
                            <div> <img src={img2} alt="about2" /></div>
                            <div><img src={img4} alt="about4" /></div>
                            <div><img src={img6} alt="about6" /></div>
                        </div>
                    </div>
                    <div className="about-pinned" ref={aboutPinnedRef}>
                        <p>Since 2008, we have been combining fashion knowledge with a contemporary approach. Our team of stylists designs from scratch and visualises with Ai. The result: unique corporate clothing that exudes style and quality.</p>
                        <motion.h2
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                            <p>About us</p>
                            <motion.div
                                variants={{
                                    rest: {
                                        scaleX: 0,
                                        transformOrigin: "right"
                                    },
                                    hover: {
                                        scaleX: 1,
                                        transformOrigin: "left"
                                    }
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            />
                        </motion.h2>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AboutUs;
