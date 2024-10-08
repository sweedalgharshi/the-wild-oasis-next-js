function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <img src="/logo.png" alt="The Wild Oasis logo" height="60" width="60" />
      <span className="text-xl font-semibold text-primary-100">The Wild Oasis</span>
    </a>
  );
}

export default Logo;
