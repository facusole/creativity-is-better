'use client';
import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Footer() {
    const container = useRef();
    const paths = useRef([])
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect(() => {
        scrollYProgress.on('change', e => {
            paths.current.forEach( (text, i) => {
                text.setAttribute('startOffset', -40 + (i * 40) + (e * 40) + '%')
            })
        })
    }, [])

    return (
        <footer ref={container}>
            <svg className="w-full mb-40" viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <text className="text-[6px] uppercase" style={{fill: "#5238f4"}}>
                    {
                        [...Array(3)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">Be creative, have fun creating</textPath>
                        })
                    }
                </text>
            </svg>
            <Logos scrollProgress={scrollYProgress}/>
        </footer>
    )
}

const links = ["https://github.com/facusole", "https://www.facundosole.com.ar/", "https://www.linkedin.com/in/facundo-sole/"]

const Logos = ({scrollProgress}) => {
    const y = useTransform(scrollProgress, [0, 1], [-225, 0])
    return (
        <div className="h-[250px] bg-black overflow-hidden">
            <motion.div style={{y}} className="h-full bg-black flex justify-center gap-10 items-center p-10">
                {
                    [...Array(3)].map((_, i) => {
                        return <a href={links[i]} target="_blank" rel="noopener noreferrer"><img key={`img_${i}`} className={`w-[80px] h-[80px] ${ i % 2 == 0 ? 'invert' : ''} scale-105 transition-all`} src={`/${i+1}.svg`} /></a>
                    })
                }
            </motion.div>
        </div>
    )
}