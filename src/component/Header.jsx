
const Header = () => {
    return (
      <header className=" py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* <a href=" # "><img src={Logo} alt="" /></a> */}
            <h2 className="">
              <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-secondary hover:from-[#FF56F6] hover:to-[#42A6E3]; text-5xl">
                Tarek
              </span>
              <br />
              <span className="text-5xl text-white tracking-widest font-secondary font-semibold">
                Aziz
              </span>
            </h2>
            <button className="btn h-[48px] px-6 text-sm rounded-full font-primary text-white font-semibold">
              Contact with me
            </button>
          </div>
        </div>
      </header>
    );
};

export default Header;