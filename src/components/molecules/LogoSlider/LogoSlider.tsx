import { SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";
import { CardSkill } from "../Card";

const LogoSlider = ({ from, to }: { from: string; to: string }) => {
  return (
    <motion.div
      initial={{ x: from }}
      animate={{ x: to }}
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
