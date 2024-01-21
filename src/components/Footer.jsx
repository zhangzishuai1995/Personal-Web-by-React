import { Link } from "react-scroll";
import '../styles/Footer.css';
import {  footerVariants, staggerChildren } from "../data/motion";
import {motion} from 'framer-motion';
export default function Footer() {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="footer--section" id="Footer">
            <motion.div
                variants={footerVariants}
                className="footer--section--container">
                <div className="footer--section--left">
                    <span>If there is anything<br/> I can assist you with,<br/> </span>
                    <a href="mailto:zzseeqdez@outlook.com">Let me know.</a>
                </div>
                <div className="footer--section--right">
                <ul>
                    <li>
                        <Link
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Hero"
                        className="navbar--content">
                            Home</Link>
                    </li>
                    <li>
                        <Link
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Skill"
                        className="navbar--content">
                            Skill</Link>
                    </li>
                    <li>
                        <Link
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Experience"
                        className="navbar--content">
                            Experience</Link>
                    </li>
                    <li>
                        <Link
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Portfolio"
                        className="navbar--content">
                            Portfolio</Link>
                    </li>
                </ul>
                </div>
            </motion.div>
        </motion.section>
    )
}