import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const Box = styled(motion.div)`
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay: Variants = {
  initial: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  visible: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  leaving: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};
export default function Project() {
  const [id, setId] = useState<null | number>(null);
  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((i) => (
          <Box onClick={() => setId(i)} layoutId={i + ''} key={i} />
        ))}
      </Grid>
      <AnimatePresence mode='wait'>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial='initial'
            animate='visible'
            exit='leaving'
            variants={overlay}
          >
            <Box
              style={{ width: '400px', height: '200px' }}
              layoutId={id + ''}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
