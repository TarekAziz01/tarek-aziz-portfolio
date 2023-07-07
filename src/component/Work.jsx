
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
    return (
      <section
        className="py-8 lg:py-24 lg:h-screen flex items-center justify-center"
        id="work"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-10">
            <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
              {/* text */}
              <div>
                <h2 className="h2 lg:text-6xl leading-tight text-accent">
                  My Latest <br />
                  Work.
                </h2>
                <p className="text-white max-w-sm mb-12 lg:text-2xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                  perspiciatis beatae minima minus sed cumque iusto praesentium.
                </p>
                {/* <button className="btn btn-sm">View all projects</button> */}
              </div>
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/40 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img1}
                  alt=""
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 duration-500 z-50">
                  <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary">
                    UI/UX Design
                  </span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-10">
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/40 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img2}
                  alt=""
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 duration-500 z-50">
                  <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary">
                    UI/UX Design
                  </span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>

              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/40 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img3}
                  alt=""
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 duration-500 z-50">
                  <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary">
                    UI/UX Design
                  </span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Work;