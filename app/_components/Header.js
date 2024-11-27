import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b border-primary-900 py-5 px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
