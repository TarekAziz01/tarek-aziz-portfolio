import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="py-8 lg:py-24 lg:h-screen flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          <div className="flex-1">
            <h2 className="font-primary text-[32px] mb-6 tracking-[10%] uppercase text-accent">
              About me.
            </h2>
            <h3 className="text-white font-primary font-semibold text-[26px] mb-6 leading-[46px]">
              I am a Front-end Developer with one years of experience.
            </h3>
            <p className="text-white mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              magnam voluptate laudantium officia corporis vero aperiam quidem
              natus, similique adipisci.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#42A6E3] mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="text-white font-primary text-sm tracking-[2px] ">
                  Years of <br />
                  Experience{" "}
                </div>
              </div>
              <div>
                <div className="text-[40px] bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#42A6E3] mb-2">
                  {inView ? <CountUp start={0} end={150} duration={3} /> : null}
                  +
                </div>
                <div className="text-white font-primary text-sm tracking-[2px] ">
                  Projects <br />
                  Completed{" "}
                </div>
              </div>
              <div>
                <div className="text-[40px] bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#42A6E3] mb-2">
                  {inView ? <CountUp start={0} end={0.0} duration={3} /> : null}
                  +
                </div>
                <div className="text-white font-primary text-sm tracking-[2px] ">
                  Happy <br />
                  Clients{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center ">
              <button className="btn h-[48px] px-8 text-base rounded-full font-primary text-white">
                Contact me
              </button>
              <a
                href=" #"
                className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#42A6E3]; btn-link "
              >
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
