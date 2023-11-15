import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GiSchoolBag } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";
import tomatoes from "@/public/tomatoes.jpg";
import textile from "@/public/textile.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated School",
    location: "Thiruvananthapuram, Kerala",
    description:
      "Graduated high school with 95% marks in the science stream.",
    icon: React.createElement(GiSchoolBag),
    date: "2019",
  },
  {
    title: "Research Intern",
    location: "Thiruvananthapuram, Kerala",
    description:
      "I worked as a research intern at the Digital University of Kerala.I worked on a webapp to detect the maturity of tomatoes using computer vision.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "CS student at VIT Chennai",
    location: "Chennai, Tamil Nadu",
    description:
      "Majoring in Computer Science and Engineering with specialization in Artifical Intelligence and Machine Learning at VIT Chennai.",
    icon: React.createElement(FaGraduationCap),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Textile Defect Detection",
    description:
      "Worked on a Research and Development project to detect defects in textile images",
    tags: ["pandas", "numpy", "tensorflow" ],
    imageUrl: textile,
  },
  {
    title: "Tomato Maturity Detection",
    description:
      "Worked on a webapp during my ineternship to detect the maturity of tomatoes",
    tags: ["pandas", "numpy", "tensorflow", "computer-vision" ],
    imageUrl: tomatoes,
  },
] as const;

export const skillsData = [
    "Deep Learning",
    "Neural Networks",
    "Python",
    "Data Preprocessing",
    "Model Evaluation",
    "Feature Engineering",
    "Algorithm Tuning",
    "TensorFlow",
    "PyTorch",
    "Computer Vision"
    ] as const;