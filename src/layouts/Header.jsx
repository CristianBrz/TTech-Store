import Brand from "../components/Brand";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Brand className="grew" img="/logo.png" />
      <Nav />
    </header>
  );
};

export default Header;
