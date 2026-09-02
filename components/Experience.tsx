import React, { forwardRef } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { ExperienceItem } from "@/types";

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    period: "Nov 2025 - Present",
    location: "Remote",
    type: "Freelance",
    description:
      "Building and deploying custom web applications for businesses, including CRM systems, automation tools, and customer engagement platforms. I work across development, deployment, and business workflow optimization to help clients improve efficiency, manage leads, and grow operations.",
    responsibilities: [
      "Build and deploy web applications for businesses, handling requirements, feature development, API integration, debugging, and production deployment.",
      "Built Review Booster, a review management platform with automated workflows and WhatsApp integration, increasing reviews from 40 to 140+ in 6 months.",
      "Developed a Real Estate CRM for managing leads, clients, properties, and follow-ups, reducing manual tracking and improving lead management.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    role: "Trainee Associate",
    company: "Tech Mahindra",
    period: "Jan 2024 - Apr 2024",
    location: "Noida, Uttar Pradesh, India",
    type: "Full-Time",
    description:
      "Provided customer support while consistently meeting productivity, quality, and customer satisfaction targets in a performance-driven environment.",
    responsibilities: [
      "Delivered customer support while consistently meeting assigned productivity, quality, and customer satisfaction KPIs.",
      "Maintained an average CSAT score of 4.4/5 throughout the tenure.",
      "Recognized as a Best Performer based on overall performance metrics and received the Bravo Award for outstanding performance.",
    ],
    skills: [
      "Customer Support",
      "Customer Satisfaction",
      "Communication",
      "Problem Solving",
      "KPI Management",
    ],
  },
];

const Experience = forwardRef<HTMLDivElement, {}>((props, expRef) => {
  return (
    <div
      ref={expRef}
      className="px-4 sm:px-6 lg:px-40 py-16 lg:py-20 space-y-8 text-white"
    >
      {/* Header */}
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
          Career Journey
        </p>
        <h1 className="font-bold text-3xl sm:text-4xl">Experience</h1>
        <p className="max-w-2xl text-sm sm:text-base text-gray-300">
          A timeline of my professional roles, internships, and technical contributions.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="w-full space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className="group w-full rounded-2xl border border-purple-900/70 bg-white/5 p-6 sm:p-8 backdrop-blur-sm shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-purple-500/70"
          >
            <div className="flex flex-col gap-4">
              {/* Top row: Role, Company, Type, Period, Location */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                      {exp.role}
                    </h2>
                    <span className="rounded-full border border-purple-400/40 bg-purple-500/15 px-3 py-0.5 text-xs text-purple-300 font-medium">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-purple-400 mt-1 font-medium flex items-center gap-2">
                    <FaBriefcase className="text-xs text-purple-400" />
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-400">
                  <span className="inline-flex items-center gap-1.5">
                    <FaCalendarAlt className="text-purple-400 text-xs" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-purple-400 text-xs" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities / Key Points */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Key Highlights & Responsibilities:
                  </h3>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-300 flex items-start gap-2.5"
                      >
                        <span className="text-purple-400 mt-1.5 text-xs select-none">
                          ◆
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills Tags */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Experience.displayName = "Experience";

export default Experience;
