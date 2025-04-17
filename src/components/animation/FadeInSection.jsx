// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";

import { useRef } from "react";

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
