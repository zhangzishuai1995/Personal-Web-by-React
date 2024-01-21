import '../styles/Portfolio.css';
import data from "../data/info.json";
import {fadeIn, staggerChildren} from "../data/motion";
import { motion } from 'framer-motion';
const Portfolio = () => {
    return (
            <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='portfolio--section' id='Portfolio'>

                <h1>My Portfolio</h1>
                <div className='portfolio--section--container'>
                {data?.Project?.map((item, index) => (
                    <motion.div
                      variants={fadeIn("up", "tween", .6, .6)}
                     key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder"/>
                        </div>
                        <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">{item.title}</h3>
                            <p className="text-md">{item.detail}</p>
                    </div>
                        <div className="text-sm portfolio--link">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
              </div>
                    </div>
                    </motion.div>
                ))}
                </div>
            </motion.section>
    );
};



export default Portfolio;