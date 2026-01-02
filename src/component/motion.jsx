export const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

export const textVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 1,
    },
  },
};
