import Header from "../components/Header";
import MenuOpenProvider from "../contexts/MenuOpenProvider";
import Overlay from "../components/Overlay";

const Main = () => {
  return <main></main>;
};

const Footer = () => {
  return <footer></footer>;
};

function App() {
  return (
    <MenuOpenProvider>
      <Overlay />
      <Header />
      <Main />
      <Footer />
    </MenuOpenProvider>
  );
}

export default App;
