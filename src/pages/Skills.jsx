const Skills = () => {
  return (
    <div className="bg-black gap-2 h-full md:grid  ">
      <div className="md:grid md:grid-cols-2 md:p-6">
        <section className="p-4 ">
          <h2 className="text-2xl font-bold py-4 ">Skillset</h2>
          <p className="text-[#8491A0]">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </section>

        <section className="p-4 md:grid md:grid-cols-2  ">
          <div className=" md:p-4">
            <img src="/images/vector.png" alt="" />
            <h2 className="text-2xl font-bold">Frameworks</h2>
            <ul className="text-[#8491A0]">
              <li>React</li>
              <li>tailwind</li>
            </ul>
          </div>

          <div className=" md:p-4">
            <img src="/images/vector.png" alt="" />
            <h2 className="text-2xl font-bold">Languages</h2>
            <ul className="text-[#8491A0]">
              <li>HTML</li>
              <li>CSS/SASS </li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className=" md:p-4">
            <img src="/images/vector.png" alt="" />
            <h2 className="text-2xl font-bold">Source Control</h2>
            <ul className="text-[#8491A0]">
              <li>Git/Github</li>
            </ul>
          </div>

          <div className=" md:p-4">
            <img src="/images/vector.png" alt="" />
            <h2 className="text-2xl font-bold">Other technoligy</h2>
            <ul className="text-[#8491A0]">
              <li>Axios</li>
              <li>vite</li>
              <li>NodeJS</li>
              <li>redux-toolkit</li>
              <li>react-hooks-forms</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="grid grid-cols-4 gap-2 justify-items-center relative text-4xl p-6  ">
        <a className="bg-gray-900 p-2 rounded-md" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <i className="bx bxl-html5 hover:text-5xl transition-all "></i>
        </a>
        <a className="bg-gray-900 p-2 rounded-md" href="https://developer.mozilla.org/es/docs/Web/CSS">
          <i className="bx bxl-css3 hover:text-5xl transition-all"></i>
        </a>
        <a className="bg-gray-900 p-2 rounded-md" href="https://developer.mozilla.org/es/docs/Web/JavaScript">
          <i className="bx bxl-javascript hover:text-5xl transition-all"></i>
        </a>
        <a className="bg-gray-900 p-2 rounded-md" href="https://react.dev/blog/2023/03/16/introducing-react-dev">
          <i className="bx bxl-react hover:text-5xl transition-all"></i>
        </a>
      </section>

      {/* seccion inferior */}
      <section className="md:grid md:grid-cols-2 md:p-4 gap-4 mt-12 p-8 grid grid-cols-1">
        <section>
          <div className="">
            <h3 className="text-[#8491A0] px-6">MY PROJECTS</h3>
            <p className="text-3xl font-bold m-6 ">
                My projects
            </p>
            <div className="bg-[#181823] p-4">
              <img src="/images/ecommerce.jpg" alt="" />
              <h2 className="text-2xl font-bold">Restaurant Website Design</h2>
              <p className="text-[#8491A0]">
              this shopping app was created to demonstrate the proper use of the tools that compose it.{" "}
              </p>
            </div>
          </div>

          <div className="bg-[#181823] p-4 mt-4">
            <img src="/images/licor.jpg" alt="" />
            <h2 className="text-2xl font-bold">Mobile Dashboard</h2>
            <p className="text-[#8491A0]">
            this shopping app was created to demonstrate the proper use of the tools that compose it.
            </p>
          </div>
        </section>

        <section>
          <div className="bg-[#181823] gap-4 p-4">
            <img src="/images/pokedex.jpg" alt="" />
            <h2 className="text-2xl font-bold">CoinView Mobile App Design</h2>
            <p className="text-[#8491A0]">              
              the pokedex was a project that I really enjoyed doing because it is very complete, it took me back to my childhood.
            </p>
          </div>

          <div className="bg-[#181823] gap-4 p-4 mt-4">
            <img src="/images/rick.jpg" alt="" />
            <h2 className="text-2xl font-bold">T-Box Mobile Design</h2>
            <p className="text-[#8491A0]">
            the rick and morty application allows us to show the use of paging. 
            </p>
          </div>

          
        </section>
      </section>
    </div>
  );
};

export default Skills;
