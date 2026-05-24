import Brand from "../Brand";
import Nav from "../Nav";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Brand className="grew" img="/logo.png" />
      <Nav />
    </header>
  );
};

export default Header;
