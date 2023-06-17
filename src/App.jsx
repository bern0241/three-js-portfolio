import Contact from './components/Contact'
import Hero from './components/Hero'
import Works from './components/Works'
import Who from './components/Who'
import { styled } from 'styled-components'
import Test from './components/Test'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto; 
  scrollbar-width: none; //firefox only
  &::-webkit-scrollbar { //gets rid of scrollbars all
    display: none;
  }
  color: white;
  background: url("./img/bg.jpeg");
`

function App() {
  return (
    <Container>
        <Hero />
        <Who />
        <Works />
        <Contact />
        <Test />
    </Container>
  )
}

export default App

