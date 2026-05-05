function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <p>© {currentYear} Denislav Yordanov. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;