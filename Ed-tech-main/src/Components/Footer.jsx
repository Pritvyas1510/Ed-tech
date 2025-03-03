const Footer = ()=>{
    return(
        <footer className="footer bg-base-200 text-base-content mt-20 p-10">
  <aside>
    
    <p>
        <span className="text-5xl text-orange-500 font-serif font-extrabold">Ed</span> <sub className=" font-serif font-bold text-4xl text-white">Tech</sub>
    </p>
    <p className="mt-1">
    © 2025 Edlogue, Inc
      <br />
      All rights reserved
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Courses</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Connect with Us</h6>
    <a className="link link-hover">Facebook</a>
    <a className="link link-hover">Twitter</a>
    <a className="link link-hover">LinkedIn</a>
    <a className="link link-hover">Instagram</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms</a>
    <a className="link link-hover">Privacy</a>
    <a className="link link-hover">Refund Policy</a>
    <a className="link link-hover">Sitemap</a>

  </nav>
</footer>
    )
}

export default Footer;