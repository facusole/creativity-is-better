"use client"
import Lenis from "lenis";
import { motion } from "framer-motion"
import Paragraph from "./components/Paragraph";
import Footer from "./components/Footer"


export default function Home() {

  const lenis = new Lenis()

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

    const svgAnimation = {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      }
    }

    const pathAnimation = {
      initial: {
        opacity: 0,
        pathLength: 0,
      },
      animate: {
        opacity: 1,
        pathLegth: 1,
        transition: {
          duration: 2,
          ease: "easeInOut"
        }
      }
    }

  return (
    <main className="[&>section]:p-24 [&>section]:grid [&>section]:place-items-center [&>*:nth-child(even)]:bg-[#191919] relative">
      <section className="h-screen w-screen relative overflow-hidden">
        <motion.p
          className="text-7xl"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 2}}
        >
          Embrace <span className="text-[#5238f4]">creativity</span>
        </motion.p>
        <svg className="absolute top-0 right-16 -rotate-12" width="1550" height="128" viewBox="0 0 1510 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M3 124.16C96.984 124.16 96.984 3.84009 190.968 3.84009C284.952 3.84009 284.952 124.16 378.936 124.16C472.92 124.16 472.904 3.84009 566.856 3.84009C660.808 3.84009 660.84 124.16 754.808 124.16C848.776 124.16 848.824 3.84009 942.84 3.84009C1036.86 3.84009 1036.82 124.16 1130.81 124.16C1224.79 124.16 1224.86 3.84009 1318.9 3.84009C1412.95 3.84009 1412.95 124.16 1507 124.16" stroke="#5238F4" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" initial={{pathLength: 0, rotate: 180}} animate={{pathLength: 1, transition: {
            duration: 2,
            delay: 1,
            ease: "easeInOut"
          }}}/>
        </svg>
        <svg className="absolute left-10 bottom-12 -rotate-12" width="1550" height="128" viewBox="0 0 1510 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M3 124.16C96.984 124.16 96.984 3.84009 190.968 3.84009C284.952 3.84009 284.952 124.16 378.936 124.16C472.92 124.16 472.904 3.84009 566.856 3.84009C660.808 3.84009 660.84 124.16 754.808 124.16C848.776 124.16 848.824 3.84009 942.84 3.84009C1036.86 3.84009 1036.82 124.16 1130.81 124.16C1224.79 124.16 1224.86 3.84009 1318.9 3.84009C1412.95 3.84009 1412.95 124.16 1507 124.16" stroke="#5238F4" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" initial={{pathLength: 0}} animate={{pathLength: 1, transition: {
            duration: 2,
            delay: 2.2,
            ease: "easeInOut"
          }}}/>
        </svg>     
      </section>
      <section className="h-screen w-screen bg-[#191919]">
        <Paragraph value="Creative websites that really catch users' eyes are what work best. Shine among others!" />
      </section>
      <Footer />
    </main>
  );
}
