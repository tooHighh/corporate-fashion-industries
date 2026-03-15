import "./style.css";
import img1 from "../../assets/stay1.avif";
import img2 from "../../assets/stay2.avif";
import img3 from "../../assets/stay3.avif";
import img4 from "../../assets/stay4.avif";
import img5 from "../../assets/stay5.avif";
import img6 from "../../assets/stay6.avif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


gsap.registerPlugin(ScrollTrigger, Draggable);

function StayUp() {

    const h1SpanRef = useRef<HTMLSpanElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!sliderRef.current) return;

        const ctx = gsap.context(() => {
            const slider = sliderRef.current!;
            const slides = slider.querySelectorAll(".image-box");

            const totalSlides = slides.length;

            const container = slider.parentElement!;
            const containerWidth = container.clientWidth;

            const slideWidth = slides[0].clientWidth;
            const gap = parseFloat(getComputedStyle(slider).gap) || 0;

            const moveAmount = slideWidth + gap;

            const visibleCount = Math.ceil(containerWidth / moveAmount);
            const maxIndex = totalSlides - visibleCount;

            let currentIndex = 0;

            Draggable.create(slider, {
                type: "x",
                inertia: false,
                dragResistance: 0.7,
                onDragEnd: function () {
                    if (this.getDirection() === "left") {
                        currentIndex++;
                    } else {
                        currentIndex--;
                    }

                    currentIndex = gsap.utils.clamp(0, maxIndex, currentIndex);

                    gsap.to(slider, {
                        x: -currentIndex * moveAmount,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                }
            });

        }, sliderRef);

        return () => ctx.revert();
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                h1SpanRef.current,
                { yPercent: 100 },
                {
                    yPercent: 0,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top top+=40%",
                    }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="stay-up" ref={ref}>
            <nav className="about-nav stay-nav">
                <p>STAY UPDATED</p>
                <p>SOCIALS.</p>
            </nav>
            <div className="about-main stay-main">
                <h1>
                    <div className="lineH1">
                        <span ref={h1SpanRef}>Your stop for social updates.</span>
                    </div>
                </h1>
                <div className="stay-image-slider" ref={sliderRef}>
                    <div className="image-box">
                        <img src={img1} alt="img1" />
                        <div className="stay-image-stats">
                            <p>At Corporate Fashion Industries, we are always 'on the move', but sometimes we just sit down. Preferably on this cool bar stool that we supplied to Valvoline.</p>
                            <div className="stay-stats">
                                <div className="likes">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <p>24</p>
                                </div>
                                <div className="views">
                                    <FontAwesomeIcon icon={faEye} />
                                    <p>1390 VIEWS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-box">
                        <img src={img2} alt="img2" />
                        <div className="stay-image-stats">
                            <p>Meet the Corporate Fashion Industries team: Saskia, williem & Guus. Workforce up 50%, average age 25% down 😜 Good man!</p>
                            <div className="stay-stats">
                                <div className="likes">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <p>322</p>
                                </div>
                                <div className="views">
                                    <FontAwesomeIcon icon={faEye} />
                                    <p>23,129 VIEWS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-box">
                        <img src={img3} alt="img3" />
                        <div className="stay-image-stats">
                            <p>For 8.6, we designed this bold jacket, fully in line with the brand's character: strong, distinctive, and with an identity of its own. Looks great!</p>
                            <div className="stay-stats">
                                <div className="likes">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <p>38</p>
                                </div>
                                <div className="views">
                                    <FontAwesomeIcon icon={faEye} />
                                    <p>2329 VIEWS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-box">
                        <img src={img4} alt="img4" />
                        <div className="stay-image-stats">
                            <p>As mentioned in an earlier LinkedIn post: football shirts are increasingly becoming a fashion item.</p>
                            <div className="stay-stats">
                                <div className="likes">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <p>80</p>
                                </div>
                                <div className="views">
                                    <FontAwesomeIcon icon={faEye} />
                                    <p>23,029 VIEWS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-box">
                        <img src={img5} alt="img5" />
                        <div className="stay-image-stats">
                            <p>Proud of our collaboration with the Japanese beer brand Sapporo ⭐</p>
                            <p>How great to see out T-shirts in action during the Japan Festival. Designed, developed, and produced by Corporate Fashion.</p>
                            <div className="stay-stats">
                                <div className="likes">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <p>83</p>
                                </div>
                                <div className="views">
                                    <FontAwesomeIcon icon={faEye} />
                                    <p>5893 VIEWS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-box">
                        <img src={img6} alt="img6" />
                        <div className="stay-image-stats">
                            <p>Cool! Let summer last a little longer.</p>
                            <p>The new high-fiber soda drink Zawana tastes even better with these awesome caps, reversible bucket hats and trendy scarves.</p>
                            <div className="stay-stats">
                                <div className="likes">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <p>77</p>
                                </div>
                                <div className="views">
                                    <FontAwesomeIcon icon={faEye} />
                                    <p>2409 VIEWS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stay-footer">
                <div className="stay-footer-div">
                    <p className="stay-footer-p">Trends are everywhere, online, on the go, and in the workplace. We show how an idea grows into a portable collection. Nice man!</p>
                    <div className="socials">
                        {["Instagram", "TikTok", "LinkedIn"].map((text) => (
                            <motion.p
                                key={text}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                            >
                                {text}
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
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            </motion.p>))}
                    </div>
                </div>
            </div>
        </div>);
} export default StayUp;