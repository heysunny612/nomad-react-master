import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useEffect } from 'react';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function MotionValue() {
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useEffect(() => {
    scrollY.on('change', () =>
      console.log(scrollY.get(), scrollYProgress.get())
    );
  }, [scrollY, scrollYProgress]);
  return (
    <>
      <Box drag='x' dragSnapToOrigin style={{ scale }} />
    </>
  );
}
