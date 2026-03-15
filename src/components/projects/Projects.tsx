import "./style.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import img1 from "../../assets/projects1.avif";
import img2 from "../../assets/projects2.avif";
import img3 from "../../assets/projects3.avif";
import img4 from "../../assets/projects4.avif";
import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

gsap.registerPlugin(ScrollTrigger);

function Projects() {

    const h1Span1Ref = useRef<HTMLSpanElement>(null);
    const h1Span2Ref = useRef<HTMLSpanElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    const projectMainRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".projects-image-box", {
                yPercent: 40,
                opacity: 0.5,
                stagger: 0.05,
                duration: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: projectMainRef.current,
                    start: "top top",
                    scrub: true,
                }
            });

            const boxes = gsap.utils.toArray<HTMLDivElement>(".projects-image-box");

            boxes.forEach((box) => {
                const image = box.querySelector<HTMLImageElement>("img");
                const follower = box.querySelector<HTMLDivElement>(".hover-follow");

                if (!image || !follower) return;

                const xTo = gsap.quickTo(follower, "x", { duration: 0.2, ease: "power3.out" });
                const yTo = gsap.quickTo(follower, "y", { duration: 0.2, ease: "power3.out" });

                image.addEventListener("mouseenter", () => {
                    gsap.to(follower, { opacity: 1, scale: 1, duration: 0.2 });
                });

                image.addEventListener("mouseleave", () => {
                    gsap.to(follower, { opacity: 0, duration: 0.2 });
                });

                image.addEventListener("mousemove", (e: MouseEvent) => {
                    const bounds = box.getBoundingClientRect();

                    xTo(e.clientX - bounds.left);
                    yTo(e.clientY - bounds.top);
                });
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


        }, projectMainRef);


        return () => ctx.revert();
    }, []);


    return (
        <div className="projects" ref={ref}>
            <div className="about-nav projects-nav">
                <p>WHERE DETAILS MAKE A DIFFERENCE </p>
                <p>PROJECTS.</p>
            </div>
            <div className="projects-main" ref={projectMainRef}>
                <h1>
                    <div className="lineH1">
                        <span ref={h1Span1Ref}>“Almost too good to</span>
                    </div>
                    <div className="lineH1">
                        <span ref={h1Span2Ref}>work in.”
                        </span>
                    </div>
                </h1>
                <div className="projects-images">
                    <div className="projects-image-box">
                        <img src={img1} alt="" />
                        <p>Bavaria</p>
                        <div className="hover-follow">
                            View Case
                        </div>
                    </div>
                    <div className="projects-image-box">
                        <img src={img2} alt="" />
                        <p>Shimano</p>
                        <div className="hover-follow">
                            View Case
                        </div>
                    </div>
                    <div className="projects-image-box">
                        <img src={img3} alt="" />
                        <p>Habesha</p>
                        <div className="hover-follow">
                            View Case
                        </div>
                    </div>
                    <div className="projects-image-box">
                        <img src={img4} alt="" />
                        <p>Valvoline</p>
                        <div className="hover-follow">
                            View Case
                        </div>
                    </div>
                </div>
                <div className="seeProjects">
                    <motion.h2
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                        <p>See all projects</p>
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
                    <div />
                </div>
            </div>
        </div>
    );
}

export default Projects;