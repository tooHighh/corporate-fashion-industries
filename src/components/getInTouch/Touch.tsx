import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import img1 from "../../assets/about1.avif";
import img2 from "../../assets/about2.avif";
import img3 from "../../assets/about3.avif";
import img4 from "../../assets/about4.avif";
import img5 from "../../assets/about5.avif";
import img6 from "../../assets/about6.avif";
import img7 from "../../assets/hero-right1.avif";
import img8 from "../../assets/hero-right2.avif";
import img9 from "../../assets/projects1.avif";
import img10 from "../../assets/projects2.avif";
import img11 from "../../assets/projects3.avif";
import img12 from "../../assets/projects4.avif";

gsap.registerPlugin(ScrollTrigger);

function InTouch() {

    const imgArray: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

    const h1SpanRef = useRef<HTMLSpanElement>(null);
    const h2SpanRef = useRef<HTMLSpanElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    const sliderDiv = useRef<HTMLDivElement>(null);

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

            gsap.fromTo(
                h2SpanRef.current,
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

            let direction = -1; 
            let x = 0;

            const slider = sliderDiv.current!;
            const width = slider.scrollWidth / 2;

            gsap.ticker.add(() => {
                x += 0.5 * direction;

                if (direction === -1 && x <= -width) x = 0;
                if (direction === 1 && x >= 0) x = -width;

                gsap.set(slider, { x });
            });

            ScrollTrigger.create({
                trigger: ref.current,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (self) => {
                    direction = self.direction === 1 ? -1 : 1;
                }
            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="touch" ref={ref}>
                <nav className="about-nav touch-nav">
                    <p>CORPORATE FASHION WITHOUT COMPROMIS.</p>
                    <p>GET IN TOUCH.</p>
                </nav>
                <div className="about-main touch-main">
                    <h1>
                        <div className="lineH1">
                            <span ref={h1SpanRef}>Ready to get</span>
                        </div>
                        <div className="lineH1">
                            <span ref={h2SpanRef}>started?</span>
                        </div>
                    </h1>
                    <div className="contacts">
                        <div className="contact-div">
                            <h2>Sitemap</h2>
                            <p>Home</p>
                            <p>Projects</p>
                            <p>About us</p>
                            <p>Sustainability</p>
                            <p>Contact</p>
                        </div>
                        <div className="contact-div">
                            <h2>Contact</h2>
                            <p>Koningslinde 31
                                7131 MP Lichtenvoorde
                                Netherlands</p>
                            <p>+31 (0) 544 760 120</p>
                            <p>info@corporatefashionindustries.com</p>
                            <p>Privacy statement</p>
                            <p>Cookies</p>
                        </div>
                        <div className="contact-div">
                            <h2>Socials</h2>
                            <p>Instagram</p>
                            <p>TikTok</p>
                            <p>LinkedIn</p>
                        </div>
                        <div className="contact-div">
                            <h2>Copyright © CFI 2026</h2>
                        </div>
                    </div>

                </div>

            </div>
            <div className="contact-slider" ref={sliderDiv}>
                {[...imgArray, ...imgArray].map((img, index) => (
                    <div className="slider-img-div" key={index}>
                        <img src={img} />
                    </div>
                ))}
            </div></>);

} export default InTouch;