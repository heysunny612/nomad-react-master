import Motion from './components/Motion';
import { styled } from 'styled-components';
import Variants from './components/Variants';
import Gestures from './components/Gestures';

const Container = styled.div`
  color: black;
  background: linear-gradient(135deg, #e09, #d0e);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      {/* <Motion /> */}
      {/* <Variants /> */}
      <Gestures/>
    </Container>
  );
}

export default App;
