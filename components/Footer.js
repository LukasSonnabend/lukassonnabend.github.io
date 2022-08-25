const Footer = () => {
  return (
    <footer className="text-center flex justify-evenly">
      <p>&copy; {new Date().getFullYear()} - Lukas Sonnabend</p>
      <p>All trademarks are the property of their respective owners</p>
    </footer>
  );
};

export default Footer;
