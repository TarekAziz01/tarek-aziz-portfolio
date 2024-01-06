import { BsArrowUpRight } from "react-icons/bs";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam ab praesentium ad nisi.",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam ab praesentium ad nisi.",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam ab praesentium ad nisi.",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam ab praesentium ad nisi.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section
      className="py-8 lg:py-24 lg:h-screen flex items-center"
      id="services"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text & img */}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 ">
            <h2 className="font-secondary text-[32px] mb-6 tracking-[10%] uppercase text-accent">
              what I do.
            </h2>
            <h3 className="text-white font-secondary font-semibold text-[26px] leading-[46px] max-w-[455px] mb-16">
              I am a Front-end Developer with one years of experience.
            </h3>
            <button className="btn h-[48px] px-6 text-lg rounded-full font-primary text-white">
              See my Work
            </button>
          </div>
          {/* services */}
          <div className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-white text-[24px] tracking-wider font-secondary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="text-white font-secondary leading-tight tracking-wider">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href=" #"
                        className="btn w-9 h-9 rounded-full mb-[42px] flex justify-center items-center "
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href=" #"
                        className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-secondary hover:from-[#FF56F6] hover:to-[#42A6E3] text-lg"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
