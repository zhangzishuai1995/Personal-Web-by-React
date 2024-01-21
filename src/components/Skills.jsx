import '../styles/Skill.css';
import data from "../data/info.json";
import { fadeIn, staggerChildren, textVariant } from "../data/motion";
import { motion } from 'framer-motion';
export default function Skill() {
    return (
        <section className="skill--section" id="Skill">
            <h1>My Skills</h1>
            <motion.div
                className='skill--section--container'
                variants={fadeIn("up", "tween", .5, .6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}>
                    <img src={ "./images/Hexagonal.png"} alt = 'Hexagonal'style={{ width: '65%' }}></img>
            </motion.div>
        </section>
    )
}