function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-text">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;