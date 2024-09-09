import { SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";
import { CardSkill } from "../Card";

const LogoSlider = () => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      className="flex space-x-16 group-hover:paused"
    >
      {SKILLS.map(({ name, image }) => (
        <CardSkill key={name} name={name} image={image} />
      ))}
    </motion.div>
  );
};

export default LogoSlider;
