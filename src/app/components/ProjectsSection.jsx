"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Automating Crypto Website API for Data Analysis",
    description: "Developed a Python script to automate data retrieval from the CoinMarketCap API. Fetched real-time metrics like price, market cap, and volume for analysis. Handled API errors and processed data using Pandas for future visualization and ML. ",
    image: "/images/projects/1.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/gagan2113/Automating-Crypto-Website-API.git",
    previewUrl: "https://github.com/gagan2113/Automating-Crypto-Website-API/blob/master/Video.mp4",
  },
  {
    id: 2,
    title: "Airbnb Market Analysis Dashboard",
    description: "Built interactive Tableau dashboards to explore Airbnb data trends. Analyzed pricing, availability, and regional performance metrics. Enabled data-driven insights for hosts and market researchers.",
    image: "/images/projects/2.png",
    tag: ["All", "Tableau"],
    gitUrl: "https://github.com/gagan2113/Airbnb_Dashboard.git",
    previewUrl: "https://github.com/gagan2113/Airbnb_Dashboard/blob/master/Dashboard.png",
  },
  {
    id: 3,
    title: "Customer Churn Analysis",
    description: "Performed churn analysis to identify key factors affecting customer retention. Used statistical techniques and visualizations to reveal trends. Helped build predictive strategies to minimize churn rates.",
    image: "/images/projects/3.jpeg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/gagan2113/Churn-Analysis.git",
    previewUrl: "https://github.com/gagan2113/Churn-Analysis/blob/main/Demo_Churn%20analysis.webm",
  },
  {
    id: 4,
    title: "Ecommerce Sales Dashboard",
    description: "Created a Power BI dashboard for comprehensive ecommerce sales analysis. Visualized metrics like top cities, payment methods, and profit trends. Derived actionable insights to support sales and marketing decisions.",
    image: "/images/projects/7.png",
    tag: ["All", "Power BI"],
    gitUrl: "https://github.com/gagan2113/Ecommerce_Sale_Dashboard.git",
    previewUrl: "https://github.com/gagan2113/Ecommerce_Sale_Dashboard/blob/master/Dashboard.png",
  },
  {
    id: 5,
    title: "HR Analytics Dashboard",
    description: "Developed an interactive HR dashboard to track employee metrics and trends. Analyzed data on attrition, job satisfaction, and departmental performance. Empowered HR teams with insights to improve workforce planning.",
    image: "/images/projects/5.jpeg",
    tag: ["All", "Tableau"],
    gitUrl: "https://github.com/gagan2113/HR-Analytics-Dashboard.git",
    previewUrl: "https://github.com/gagan2113/HR-Analytics-Dashboard/blob/master/Image.png",
  },
  {
    id: 6,
    title: "Web Scraping in Python",
    description: "Scraped structured data from Wikipedia using BeautifulSoup and Requests. Extracted and cleaned data on India's largest companies into a CSV. Demonstrated web automation and data preparation techniques.",
    image: "/images/projects/6.jpeg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/gagan2113/Web-Scraping.git",
    previewUrl: "https://github.com/gagan2113/Web-Scraping/blob/master/Explanation.pdf",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Tableau"
          isSelected={tag === "Tableau"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Power BI"
          isSelected={tag === "Power BI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
