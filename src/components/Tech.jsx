import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <p className={styles.sectionSubText}>My technical expertise</p>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            variants={zoomIn(0.5 * index, 0.75)}
            className="flex flex-col items-center"
            key={technology.name}
          >
            <img src={technology.icon} className="w-20 h-20 object-contain" />
            <p className="text-white-100">{technology.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
