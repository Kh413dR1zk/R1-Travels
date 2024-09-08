export const SlideUP = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

export const SlideBottom = (delay) => {
    return {
      hidden: {
        opacity: 0,
        y: -100,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay,
        },
      },
    };
  };