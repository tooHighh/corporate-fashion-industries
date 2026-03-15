import "./style.css";
import img1 from "../../assets/sustain1.avif";
import img2 from "../../assets/about5.avif";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import AfterSustain from "./AfterSustain";



gsap.registerPlugin(ScrollTrigger);

function Sustain() {

    const ref = useRef<HTMLDivElement>(null);
    const sustainMainRef = useRef<HTMLDivElement>(null);
    const h1Span1Ref = useRef<HTMLDivElement>(null);
    const h1Span2Ref = useRef<HTMLDivElement>(null);
    const h1Span3Ref = useRef<HTMLDivElement>(null);
    const backImgRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

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

            gsap.fromTo(
                h1Span3Ref.current,
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

            gsap.from(backImgRef.current, {
                yPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top-=40% top",
                    end: "bottom top",
                    scrub: true,
                }
            });

        }, sustainMainRef);


        return () => ctx.revert();
    }, []);

    return (
        <div className="sus">
            <div className="sustain" ref={ref}>
                <img src={img2} alt="" ref={backImgRef} />
                <div className="sustain-main" ref={sustainMainRef}>
                    <h1>
                        <div className="lineH1">
                            <span ref={h1Span1Ref}>“With Corporate Fashion Industries, we are continuously
                            </span>
                        </div>
                        <div className="lineH1">
                            <span ref={h1Span2Ref}>working on initiatives around sustainability and responsible
                            </span>
                        </div>
                        <div className="lineH1">
                            <span ref={h1Span3Ref}>business.”
                            </span>
                        </div>
                    </h1>
                    <div className="sustain-main-bottom">
                        <div className="sustain-img">
                            <img src={img1} alt="" />
                            <p>
                                <FontAwesomeIcon icon={faLeaf} style={{ color: "lightgreen" }} />
                                Sustainability</p>
                        </div>
                        <div className="sustain-right">
                            <div>
                                <p>We only work with premium suppliers and sustainable</p>
                                <p>fabrics.</p>
                            </div>
                            <p>Guus Reinerink</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="underSustain">
                <AfterSustain delay={8000} childrenNum={1} />
                <AfterSustain delay={2000} childrenNum={2} />
                <AfterSustain delay={4000} childrenNum={3} />
                <AfterSustain delay={6000} childrenNum={4} />
            </div>
        </div>
    )
}

export default Sustain;