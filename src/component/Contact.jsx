/* eslint-disable react/no-unescaped-entities */

const Contact = () => {
    return (
      <section
        className="py-8 lg:py-24 lg:h-screen flex items-center "
        id="contact"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row ">
            {/* text */}
            <div className="flex-1 flex justify-start items-center">
              <div>
                <h4 className="font-primary text-3xl lg:text-5xl mb-6 tracking-[10%] uppercase text-accent ">
                  Get in touch
                </h4>
                <h2 className="text-white font-primary text-3xl lg:text-4xl leading-none mb-12">
                  Let's work together!
                </h2>
              </div>
            </div>
            {/* form */}
            <form className="text-white flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                placeholder="Your name"
                type="text"
              />

              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                placeholder="Your email"
                type="text"
              />

              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                placeholder="Your message"
              ></textarea>
              <button className="btn h-[48px] px-6 text-lg rounded-full font-primary text-white">
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Contact;