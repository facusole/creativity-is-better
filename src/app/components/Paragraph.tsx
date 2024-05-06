"use client"

import { useRef } from "react"
import { useScroll, motion, useTransform } from "framer-motion"

type ParagraphProps = {
    value: string
}

export default function Paragraph( { value }: ParagraphProps  ) {

    const element = useRef(null)

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.8', 'start 0.1']
    })

    const words = value.split(" ")

    return (
        <p className="text-white text-7xl leading-tight flex flex-wrap relat" ref={element}>
            {
                words.map( (word, i) => {
                    const start = i / words.length;
                    const end = start + ( 1 / words.length )
                    const range = [start, end]
                    const progress = scrollYProgress
                    const opacity = useTransform(progress, range, [0,1])

                    return <span key={i} className="relative mr-4">
                        <span className="absolute opacity-20">{word}</span>
                        <motion.span style={{opacity: opacity}}>{word}</motion.span>
                    </span>
                })
            }
        </p>
    )

}
