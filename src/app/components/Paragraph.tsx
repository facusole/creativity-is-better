"use client";

import { ReactNode, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

type ParagraphProps = {
  value: string;
};

export default function Paragraph({ value }: ParagraphProps) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.1"],
  });

  const words = value.split(" ");

  return (
    <p
      className="text-white text-[4dvh] lg:text-[5dvh] leading-tight flex flex-wrap relative lg:max-w-[25ch]"
      ref={element}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <span key={i} className="relative mr-4">
            <span className="absolute opacity-20">{word}</span>
            <Word range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          </span>
        );
      })}
    </p>
  );
}

type WordProps = {
  children: ReactNode;
  range: Array<number>;
  progress: any;
};

const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return <motion.span style={{ opacity: opacity }}>{children}</motion.span>;
};
