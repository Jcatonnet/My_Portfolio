/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:scale-105">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-fit: contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="textx-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Personal Projects</h2>
      </motion.div>
      <div>
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the projects I worked on, showcasing my skills and
          experience. Each project is briefly described with link to the code
          repo. It reflects my ability to solve complex issues, build a great
          product and build amazing UI/UX experiences while having a robust
          product.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
