
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
    return (
      <section
        className="py-8 lg:py-24 lg:h-auto  flex items-center justify-center"
        id="work"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-10">
            <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
              {/* text */}
              <div>
                <h2 className="font-primary text-3xl lg:text-5xl mb-6 tracking-[10%] uppercase text-accent">
                  My Latest <br />
                  Work.
                </h2>
                <p className="text-white max-w-sm mb-12 text-lg lg:text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                  perspiciatis beatae minima minus sed cumque iusto praesentium.
                </p>
                {/* <button className="btn btn-sm">View all projects</button> */}
              </div>
              {/* image */}
              <div className="">
                <p className="text-white mb-5 text-2xl ">Spice Garden</p>
                <div className="w-auto h-96 overflow-hidden mx-auto mb-5 border-2 border-white/40 rounded-xl">
                  <img
                    className="w-full h-full object-cover object-top transition-all duration-[3000ms] ease-in-out hover:object-bottom "
                    src={img1}
                    alt="Your Image"
                  />
                </div>
                <div className="text-white mb-3 flex gap-12">
                  <a
                    href=" https://chef-recipe-hunter-21755.web.app"
                    target="_blank"
                  >
                    Live{" "}
                  </a>
                  <a
                    href=" https://github.com/TarekAziz01/chef-recipe-client"
                    target="_blank"
                  >
                    Client Side
                  </a>
                  <a
                    href=" https://github.com/TarekAziz01/chef-recipe-server"
                    target="_blank"
                  >
                    Server side
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-10">
              {/* image */}
              <div className="">
                <p className="text-white mb-5 text-2xl ">Sports Learn</p>
                <div className="w-auto h-96 overflow-hidden mx-auto mb-5 border-2 border-white/40 rounded-xl">
                  <img
                    className="w-full h-full object-cover object-top transition-all duration-[3000ms] ease-in-out hover:object-bottom "
                    src={img2}
                    alt="Your Image"
                  />
                </div>
                <div className="text-white mb-3 flex gap-12">
                  <a href=" https://summer-camp-96439.web.app" target="_blank">
                    Live{" "}
                  </a>
                  <a
                    href=" https://github.com/TarekAziz01/summer-camp-server"
                    target="_blank"
                  >
                    Client Side
                  </a>
                  <a
                    href=" https://github.com/TarekAziz01/summer-camp-client"
                    target="_blank"
                  >
                    Server side
                  </a>
                </div>
              </div>

              {/* image */}
              <div className="">
                <p className="text-white mb-5 text-2xl ">Turbo Troop</p>
                <div className="w-auto h-96 overflow-hidden mx-auto mb-5 border-2 border-white/40 rounded-xl">
                  <img
                    className="w-full h-full object-cover object-top transition-all duration-[3000ms] ease-in-out hover:object-bottom "
                    src={img3}
                    alt="Your Image"
                  />
                </div>
                <div className="text-white mb-3 flex gap-12">
                  <a href=" https://turbo-troop.web.app" target="_blank">
                    Live{" "}
                  </a>
                  <a
                    href=" https://github.com/TarekAziz01/turbo-troop-client"
                    target="_blank"
                  >
                    Client Side
                  </a>
                  <a
                    href=" https://github.com/TarekAziz01/turbo-troop-server"
                    target="_blank"
                  >
                    Server side
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Work;