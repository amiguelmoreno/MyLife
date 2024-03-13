import { Outlet, useLocation } from "react-router-dom";
import AppLayout from "./AppLayout";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.4,
};

function AnimationLayout() {
  const { pathname } = useLocation();
  return (
    <AppLayout>
      <motion.div
        key={pathname}
        initial='initial'
        animate='in'
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet></Outlet>
      </motion.div>
    </AppLayout>
  );
}

export default AnimationLayout;
