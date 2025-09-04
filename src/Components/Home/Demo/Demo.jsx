"use client";

import {
  Briefcase,
  Mic,
  BarChart3,
  MessageSquare,
  Upload,
} from "lucide-react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: <Briefcase className="text-white" size={28} />,
    title: "Select Job",
    description:
      "Start by selecting a job role or uploading a job description — this sets the stage for the interview.",
  },
  {
    icon: <Upload className="text-white" size={28} />,
    title: "Upload Resume",
    description:
      "Next, upload the candidate’s resume so our AI can analyze their skills, projects, and experience.",
  },
  {
    icon: <MessageSquare className="text-white" size={28} />,
    title: "AI Interview",
    description:
      "Now, let the AI step in — it will automatically ask tailored questions based on the job and resume.",
  },
  {
    icon: <Mic className="text-white" size={28} />,
    title: "Candidate Response",
    description:
      "The candidate simply answers live, giving us insights into their problem-solving and communication skills.",
  },
  {
    icon: <BarChart3 className="text-white" size={28} />,
    title: "AI Feedback & Score",
    description:
      "Finally, receive instant feedback with a detailed scorecard, strengths, weaknesses, and next steps.",
  },
];


const Demo = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id="how-it-works"
      className="relative py-16 overflow-visible bg-transparent"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Left: Timeline steps */}
        <div className="relative">
          <div className="flex flex-col gap-20 relative">
            {steps.map((step, index) => (
              <ScrollStep key={index} index={index} {...step} />
            ))}
          </div>
        </div>

        {/* Right: Sticky video */}
        <div className="relative">
          <div className="sticky top-32">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const ScrollStep = ({ icon, title, description }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 60%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  return (
    <motion.div
      ref={ref} 
      style={{ opacity, y, scale }}
      className="relative"
    >
      <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg rounded-3xl p-6 transition-all duration-300 hover:shadow-xl group max-w-xl">
        {/* Header Row */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-teal-700">
            {title}
          </h3>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-gradient-to-r from-teal-300 via-emerald-300 to-green-300 mb-4" />

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};


export default Demo;
