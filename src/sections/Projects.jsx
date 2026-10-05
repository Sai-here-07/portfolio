// src/sections/Projects.jsx

import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.JPG";
import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.PNG";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener?.("change", handler) || mql.addListener(handler);
    setIsMobile(mql.matches);

    return () =>
      mql.removeEventListener?.("change", handler) || mql.removeListener(handler);
  }, [query]);

  return isMobile;
};

export default function Projects() {
  const isMobile = useIsMobile();
  const MotionArticle = motion.article;

  const projects = React.useMemo(
    () => [
      {
        title: "Job Portal & Recruitment System",
        description:
          "A full-stack recruitment platform built with Java, Spring Boot, React.js, and MySQL to connect job seekers and recruiters through centralized job search, application tracking, and profile management.",
        link: null,
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1,
        tags: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"],
        highlights: [
          "JWT-based authentication for Candidate, Recruiter, and Admin roles",
          "Role-based job posting, application review, and profile management",
          "Responsive React interfaces for job search, dashboards, and applicant tracking",
          "Hibernate/JPA integration and API validation for reliability",
        ],
      },
      {
        title: "Gamily",
        description:
          "A community-focused digital product experience designed to make connection and engagement feel seamless, intuitive, and mobile-first.",
        link: "https://gamilyapp.com/",
        bgColor: "#3884d3",
        image: isMobile ? photo2 : img2,
        tags: ["Product", "Mobile", "Community"],
        highlights: [
          "Built a user-centric experience for engagement and community interaction",
          "Focused on mobile-first usability and smooth digital flow",
          "Crafted a modern product feel with strong visual storytelling",
        ],
      },
    ],
    [isMobile]
  );

  return (
    <section id="projects" className="relative py-20 px-4 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Selected Projects
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">My Work</h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <MotionArticle
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm"
            >
              <div className="relative h-64 overflow-hidden" style={{ backgroundColor: project.bgColor }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </div>

              <div className="space-y-4 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">{project.description}</p>
                </div>

                <ul className="space-y-2 text-sm text-white/75">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2 leading-6">
                      <span className="mt-1 text-cyan-300">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-200"
                    aria-label={`View ${project.title}`}
                  >
                    View Project
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
}
