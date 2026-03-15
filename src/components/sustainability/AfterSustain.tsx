import "./style.css";
import img3 from "../../assets/sustain2.png";
import img4 from "../../assets/sustain3.svg";
import img5 from "../../assets/sustain4.svg";
import img6 from "../../assets/sustain5.svg";
import img7 from "../../assets/sustain6.png";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
    delay?: number;
    childrenNum?: number
}

export default function AfterSustain({ delay = 1000, childrenNum }: Props) {

    const sliderRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        const items = slider.children as HTMLCollectionOf<HTMLDivElement>;

        const itemHeight = items[0].offsetHeight;
        let current = 0;

        const animate = () => {
            current++;

            gsap.to(slider, {
                y: -current * itemHeight,
                duration: 0.6,
                ease: "power1.inOut",
                onComplete: () => {
                    setTimeout(() => {
                        if (current >= items.length - 1) {
                            current = 0;
                            gsap.set(slider, { y: 0 });
                        }
                        animate();
                    }, 8000);
                }
            });
        };

        setTimeout(() => {
            animate();
        }, delay);

    }, [delay]);

    return (
        <div className="afterSusBox">
            <div className="susImgWrapper">
                <div className="susSlider" ref={sliderRef}>
                    {childrenNum === 1 && (
                        <>
                            <div className="susItem"><img src={img3} /></div>
                            <div className="susItem"><img src={img4} /></div>
                            <div className="susItem"><img src={img5} /></div>
                            <div className="susItem"><img src={img6} /></div>
                            <div className="susItem"><img src={img7} /></div>
                            <div className="susItem"><img src={img3} /></div>
                        </>
                    )}
                    {childrenNum === 2 && (
                        <>
                            <div className="susItem"><img src={img4} /></div>
                            <div className="susItem"><img src={img5} /></div>
                            <div className="susItem"><img src={img6} /></div>
                            <div className="susItem"><img src={img7} /></div>
                            <div className="susItem"><img src={img3} /></div>
                            <div className="susItem"><img src={img4} /></div>
                        </>
                    )}
                    {childrenNum === 3 && (
                        <>
                            <div className="susItem"><img src={img5} /></div>
                            <div className="susItem"><img src={img6} /></div>
                            <div className="susItem"><img src={img7} /></div>
                            <div className="susItem"><img src={img3} /></div>
                            <div className="susItem"><img src={img4} /></div>
                            <div className="susItem"><img src={img5} /></div>
                        </>
                    )}
                    {childrenNum === 4 && (
                        <>
                            <div className="susItem"><img src={img6} /></div>
                            <div className="susItem"><img src={img7} /></div>
                            <div className="susItem"><img src={img3} /></div>
                            <div className="susItem"><img src={img4} /></div>
                            <div className="susItem"><img src={img5} /></div>
                            <div className="susItem"><img src={img6} /></div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}