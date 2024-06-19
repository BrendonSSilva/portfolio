import "./navbar.css";
import React, { useState, useEffect } from 'react';
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="menu"
            >
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Menu
                    <motion.div
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 }
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                    >
                        <svg width="15" height="15" viewBox="0 0 20 20">
                            <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                    </motion.div>
                </motion.button>
                <motion.ul
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7
                            }
                        }
                    }}

                >
                    <motion.li variants={itemVariants}>
                        <a href="https://www.linkedin.com/in/brendon-silva/" target='_blank'><img src='/icons/linkedin.svg' alt='LinkedIn' /></a>
                        <a href="https://github.com/BrendonSSilva" target='_blank'><img src='/icons/github.svg' alt='GitHub' /></a>
                        <a href="mailto:brendon.dasilva03@gmail.com" target='_blank'><img src='/icons/Gmail.svg' alt='Gmail' /></a>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <a href="https://wa.me/5553984070032" target='_blank'><img src='/icons/wpp.svg' alt='WhatsApp' /></a>
                        <a href="https://www.instagram.com/brendonsilva03" target='_blank'><img src='/icons/Instagram.svg' alt='Instagram' /></a>
                    </motion.li>
                </motion.ul>
            </motion.nav>
            <br />
        </>
    );
};
