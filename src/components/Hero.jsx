import React from "react";
import '../styles/Hero.css';
import { slideIn, staggerContainer } from "../data/motion";
import { motion } from 'framer-motion';
export default function Hero() {
    return (
        <section id="Hero" className="hero--section">
            <motion.div
                className="hero--section--container"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
      >         <div className="hero--section--image">
                    <motion.img variants={slideIn("left", "tween", 0.1, 1.3,"-150%")} src={"./images/avatar.png"}></motion.img>
                </div>
                <motion.div variants={slideIn("right", "tween", 0.1, 1.3,"150%")} className="hero--section--text">
                    <h2>Hi, I'm Zishuai</h2>
                    <br></br>
                    <h2 className="first--title">Product Manager</h2>
                    <h2 className="second--title">& Web Developer</h2>
                    <div className="tags">
                        <p>Math Major</p>
                        <p>CS Minor</p>
                        <p>Introversion</p>
                        <p>Detail-Oriented</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
