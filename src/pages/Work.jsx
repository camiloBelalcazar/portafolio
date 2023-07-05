import { Link } from "react-router-dom"

const Work = () => {
  return (
    <div className="gap-2 bg-black md:relative">

      <section className="p-4">

        <section className="md:grid ">
          <div className="md:w-full ">
          <section className="bg-black w-full p-2  gap-4 grid md:px-4">
            <h5 className="text-[#8491A0]">Work Experience</h5>
            <h2 className="text-2xl font-bold">Projects i have worked for in the past.</h2>
          </section>
          </div>
          

          <div className="md:grid md:grid-cols-3 ">
          <section className="md:px-4">
            <div className="text-[#8491A0] text-6xl p-2">01</div>
            <div>
              <h2 className="text-2xl font-bold md:text-lg md:px-0"> <span className="text-[#737474] hover:text-[#bebdbd]">E-commerce</span> Product Designer</h2>
            </div>
            <p className="text-[#8491A0] md:text-sm">I currently am the lead designer an the interaction design team.</p>
          
          <div>
            <a className="text-[#737474] hover:text-[#bebdbd]" href="https://e-comeerce-app.netlify.app/">https://e-comeerce-app.netlify.app/</a>
          </div>
          </section>

          <section className="md:px-4">
            <div className="text-[#8491A0] text-6xl p-2">02</div>
            <div className="grid justify-start">
              <h2 className="text-2xl font-bold md:text-lg md:px-0 "><span className="text-[#737474] hover:text-[#bebdbd]">Crudd</span> Product Designer</h2>
            </div>
            <p className="text-[#8491A0] md:text-sm">I currently am the lead designer an the interaction design team.</p>
            <div>
            <a className="text-[#737474] hover:text-[#bebdbd]" href="https://poetic-meerkat-5c81a5.netlify.app/">https://poetic-meerkat-5c81a5.netlify.app/</a>
          </div>
          </section>

          <section className="md:px-4">
            <div className="text-[#737474] hover:text-[#bebdbd] text-6xl p-2">03</div>
            <div >
              <h2 className="text-2xl font-bold md:text-lg md:px-0"><span className="text-[#737474] hover:text-[#bebdbd]">Pokedex</span> Product Designer</h2>
            </div>
            <p className="text-[#8491A0] md:text-sm">I currently am the lead designer an the interaction design team. </p >
            
            <div>
            <a className="text-[#737474] hover:text-[#bebdbd] " href="https://app-pokedex-belal.netlify.app/">https://app-pokedex-belal.netlify.app/</a>
          </div>
          </section>
          </div>
        
        </section>

      </section>


      <section className=" bg-gradient-to-l from-slate-500 text-gray-600 p-4 md:grid md:grid-cols-2">
        <div className="">
        <h2 className="md:px-4">Philosophy & values</h2>
        <p className="text-[#8491A0] md:px-4">I think everyone wants the same thing - relationships with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality</p>
        </div>

        <div className="p-2">
        <img src="/images/values.png" alt="" />
        </div>
      </section>

    </div>
  )
}

export default Work
