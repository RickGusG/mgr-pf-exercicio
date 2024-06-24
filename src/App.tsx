import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Rodape from "./components/Rodape";
import NossaStack from "../src/components/Nossas-Stacks/Stacks"


function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Rodape></Rodape>
      <NossaStack />
    </>
  );
}

export default App;
