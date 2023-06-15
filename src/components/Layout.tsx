import { motion } from 'framer-motion';
import { useState } from 'react';

import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

export default function Layout() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Section onClick={toggleClicked}>
      <Box>{!clicked ? <Circle layoutId='circle' /> : null}</Box>
      <Box>
        {clicked ? (
          <Circle
            layoutId='circle'
            style={{ borderRadius: '50px', scale: 2 }}
          />
        ) : null}
      </Box>
    </Section>
  );
}
