import { IoSearchOutline } from "react-icons/io5";

const HeaderTop = () => {
  return (
    <div className="xs:block text-sonic-silver border-cultured hidden border-b-[1px] py-3 text-xs uppercase">
      <span className="font-bold">Free Shipping</span> This week Order Over -
      $55
    </div>
  );
};

const HeaderLogo = () => {
  return (
    <a href="#" className="mb-5 block">
      <img
        src="https://i.postimg.cc/XYYNC3X8/logo.png"
        alt="logo"
        className="mx-auto block"
      />
    </a>
  );
};
const HeaderSearchBox = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter your product name"
        className="border-cultured text-onyx w-full rounded-md border-[1px] px-4 py-3 text-sm font-medium"
      />
      <button className="text-onyx absolute top-[50%] right-0 -translate-y-1/2 p-3 text-lg sm:text-green-500">
        <IoSearchOutline />
      </button>
    </div>
  );
};
const Header = () => {
  return (
    <header className="border-cultured border-b-[1px] px-4 py-6">
      <HeaderTop />
      <HeaderLogo />
      <HeaderSearchBox />
    </header>
  );
};

const Main = () => {
  return <main></main>;
};

const Footer = () => {
  return <footer></footer>;
};

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
