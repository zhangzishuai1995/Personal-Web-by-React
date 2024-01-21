import '../styles/Experience.css';
import data from "../data/info.json";
import {motion} from 'framer-motion'
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../data/motion";
export default function Experience() {
    return (
        <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1}} className='experience--section' id='Experience'>
            <h1 className='experience--section--title'>My Experience</h1>
            <div className="experience--section--box">
                {data?.Experience?.map((item, index) => {
                    return (
                    <motion.div variants={textVariant2} key={index} className="experience--section--container">
                    <div className="experience--section--left">
                        <h3>{item.title}</h3>
                        <p>{item.time}</p>
                    </div>



                    <div className="experience--section--right">
                        <h3>{item.role}</h3>
                        <p>{item.detail}</p>
                    </div>
                    </motion.div>
            );
          })}
          </div>
        </motion.section>
    )
}