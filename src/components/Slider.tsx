import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 20%;
  width: 200px;
  height: 200px;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVarients: Variants = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: { duration: 0.3 },
  }),
};
export default function Slider() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const next = () => {
    if (visible >= 9) return;
    setVisible((prev) => prev + 1);
    setBack(false);
  };
  const prev = () => {
    if (visible <= 1) return;
    setVisible((prev) => prev - 1);
    setBack(true);
  };

  return (
    <Section>
      <button onClick={prev}>prev</button>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          key={visible}
          variants={boxVarients}
          initial='entry'
          animate='center'
          exit='exit'
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={next}>next</button>
    </Section>
  );
}
