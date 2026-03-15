import { forwardRef } from 'react';
import logo from '../../assets/corporate-fashion-industries.svg';
import './style.css';
import { motion } from 'framer-motion';

const Nav = forwardRef<HTMLDivElement>((_props, ref) => {

    return (
        <nav ref={ref} className="hero-nav">
            <img src={logo} alt="Corporate Fashion Industries" className="logo" />
            <div className="list">
                {["Projects.", "About us.", "Sustainability.", "Contact."].map((text) => (
                    <motion.button
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
                            transition={{ duration: 0.3, ease: "easeIn" }}
                        />
                    </motion.button>
                ))}
            </div>
            <motion.button className="language" whileHover="hover">
                Nederlands
                <motion.div
                    initial={{ scaleX: 0 }}
                    variants={{
                        hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                />
            </motion.button>
        </nav>
    );
});

export default Nav;
