const Footer = () => {
  return (
    <div className="bg-gradient-to-l from-slate-500 text-2xl">
      <section className="p-4 ">
        <div>
          <h4 className="py-1 font-bold">Camilo B.</h4>
        </div>
        <section className="flex gap-1 ">
          <a href="https://github.com/camiloBelalcazar">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/camilo-belalcazar-63a626275/">
            <i className="bx bxl-linkedin-square "></i>
          </a>
          <a href="https://wa.me/qr/3NVPPRVHWB2PD1">
            <i className="bx bxl-whatsapp"></i>
          </a>
        </section>
      </section>
    </div>
  );
};

export default Footer;
