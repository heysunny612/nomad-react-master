import Motion from './components/Motion';
import { styled } from 'styled-components';
import Variants from './components/Variants';
import Gestures from './components/Gestures';
import MotionValue from './components/MotionValue';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  color: black;
  background: linear-gradient(135deg, #e09, #d0e);
  width: 100vw;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      {/* <Motion /> */}
      {/* <Variants /> */}
      {/* <Gestures/> */}
      <MotionValue />
    </Container>
  );
}

export default App;
