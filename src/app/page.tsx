"use client";
import Lenis from "lenis";
import { easeIn, motion } from "framer-motion";
import Paragraph from "./components/Paragraph";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const creativityArr = "creativity".split("");

  return (
    <main className="[&>section]:p-12 md:[&>section]:p-24 [&>section]:grid [&>section]:place-items-center [&>*:nth-child(even)]:bg-[#191919] relative">
      <section className="h-screen w-screen relative overflow-hidden">
        <motion.h1
          className="text-5xl md:text-7xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Embrace <br className="lg:hidden" />
          <span className="text-[#5238f4]">
            {creativityArr.map((letter, i) => {
              return (
                <motion.span
                  initial={{
                    y: 0,
                  }}
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      duration: 0.3,
                      ease: [0.61, 1, 0.88, 1],
                      delay: i * 0.2 + 4.4,
                      repeat: Infinity,
                    },
                  }}
                  key={i}
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        </motion.h1>
        <svg
          className="absolute w-full md:w-auto -top-10 -left-12 -rotate-45 lg:top-0 lg:-left-10 lg:-rotate-12"
          width="1550"
          height="128"
          viewBox="0 0 1550 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M3 124.16C96.984 124.16 96.984 3.84009 190.968 3.84009C284.952 3.84009 284.952 124.16 378.936 124.16C472.92 124.16 472.904 3.84009 566.856 3.84009C660.808 3.84009 660.84 124.16 754.808 124.16C848.776 124.16 848.824 3.84009 942.84 3.84009C1036.86 3.84009 1036.82 124.16 1130.81 124.16C1224.79 124.16 1224.86 3.84009 1318.9 3.84009C1412.95 3.84009 1412.95 124.16 1507 124.16"
            stroke="#5238F4"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, rotate: 180 }}
            animate={{
              pathLength: 1,
              transition: {
                duration: 2,
                delay: 1,
                ease: "easeInOut",
              },
            }}
          />
        </svg>
        <svg
          className="absolute -bottom-6 -right-16 w-full md:w-auto lg:-right-16 lg:bottom-10 -rotate-12"
          width="1550"
          height="128"
          viewBox="0 0 1550 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M3 124.16C96.984 124.16 96.984 3.84009 190.968 3.84009C284.952 3.84009 284.952 124.16 378.936 124.16C472.92 124.16 472.904 3.84009 566.856 3.84009C660.808 3.84009 660.84 124.16 754.808 124.16C848.776 124.16 848.824 3.84009 942.84 3.84009C1036.86 3.84009 1036.82 124.16 1130.81 124.16C1224.79 124.16 1224.86 3.84009 1318.9 3.84009C1412.95 3.84009 1412.95 124.16 1507 124.16"
            stroke="#5238F4"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              transition: {
                duration: 2,
                delay: 2.2,
                ease: "easeInOut",
              },
            }}
          />
        </svg>
      </section>
      <section className="h-screen w-screen bg-[#191919]">
        <Paragraph value="Creative websites that really catch users' eyes are what work best. Shine among others!" />
      </section>
      <Footer />
    </main>
  );
}
