import Motion from './components/Motion';
import { styled } from 'styled-components';
import Variants from './components/Variants';
import Gestures from './components/Gestures';
import MotionValue from './components/MotionValue';
import { motion, AnimatePresence } from 'framer-motion';
import Svg from './components/Svg';
import { useState } from 'react';
import Slider from './components/Slider';
import Layout from './components/Layout';
import Project from './components/Project';
import HookForm from './hook-form/HookForm';

const Container = styled(motion.div)`
  color: black;
  background: linear-gradient(135deg, #e09, #d0e);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: red;
`;

const boxVars = {
  initial: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 50,
    scale: 0,
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggle = () => setShowing((prev) => !prev);
  return (
    <Container>
      {/* <Motion /> */}
      {/* <Variants /> */}
      {/* <Gestures/> */}
      {/* <MotionValue /> */}
      {/* <Svg /> */}
      {/* <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVars}
            initial='initial'
            animate='visible'
            exit='leaving'
          />
        ) : null}
      </AnimatePresence> */}
      {/* <button onClick={toggle}>Click</button> */}
      {/* <Slider /> */}
      {/* <Layout /> */}
      {/* <Project /> */}
      <HookForm />
    </Container>
  );
}

export default App;
