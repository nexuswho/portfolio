"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating high schoool I decided to pursue my passion for
        programming. I joined VIT Chennai majoring{" "}
        <span className="font-medium">Computer Science</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I am proficient
        in Data Science and Machine Learning technologies such as{" "}
        <span className="font-medium">TensorFlow, Pandas, Numpy</span>. I am
        currently looking for a <span className="font-medium">internship</span>{" "}
        as an ML engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">PyTorch and Docker</span>.
        I'm also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
