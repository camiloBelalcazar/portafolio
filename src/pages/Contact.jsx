const Contact = () => {
  return (
    <div className="md:grid">
      <section className="md:grid md:justify-center md:p-6 h-screen">
        <div className="p-4 gap-4">
          <h2 className="text-2xl font-bold">Other technoligy</h2>
          <p className="text-[#8491A0]">
            Each dribbble shot is made with love and care. Do check out my work
            on Github. Likes and comments are appreciated.
          </p>
          <img className="pt-8 md:h-[390px] " src="/images/contact.jpg" alt="" />
        </div>
        
        <div className="grid text-[#8491A0] p-4 gap-4">
          <div>
            <h2>Let’s talk business</h2>
            <p>
              Now that you know a lot about me, let me know if you are
              interested to work with me.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
