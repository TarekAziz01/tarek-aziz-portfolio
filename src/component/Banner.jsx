import Image from "../assets/about.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Resume from "../assets/TarekAziz-Resume.pdf";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center   py-8 lg:py-24 lg:h-screen"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <h1 className="text-white text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              TAREK <span>AZIZ</span>
            </h1>
            <div className="mb-6 text-4xl lg:text-6xl font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-3">I am a </span>
              <TypeAnimation
                sequence={[
                  "Front End developer",
                  2000,
                  "React developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="text-white mb-8 max-w-lg mx-auto lg:mx-0">
              I create web page with UI / UX user interface,I have years of
              experience and many client are happy with the projects carried
              out.
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              {/* <button className="btn btn-lg">
                Resume <FiDownload></FiDownload>
              </button> */}
              <a
                download=""
                href={Resume}
                className="btn h-[48px] px-6 text-sm rounded-full font-primary text-white font-semibold flex items-center gap-2"
              >
                Resume<FiDownload></FiDownload>
              </a>
              {/* <a href=" #" className="text-gradient btn-link">
                My Portfolio
              </a> */}
            </div>
            <div className="text-white flex text-xl gap-x-6 max-w-max mx-auto lg:mx-0">
              <a
                href=" https://www.linkedin.com/in/tarek-aziz-a18452201"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href=" https://github.com/TarekAziz01" target="_blank">
                <FaGithub />
              </a>
              <a
                href=" https://web.facebook.com/mdtarek.aziz.790"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/tarek.aziz01">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img className=" banner_img " src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
