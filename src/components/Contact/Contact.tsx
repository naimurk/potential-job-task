const Contact = () => {
  return (
    <div id="contact" className="bg-white">
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-[50px] px-4 items-center pt-[80px] md:pt-[100px] poppins">
        {/* text */}
        <div className="text-center text-black">
          <h1 className="text-[32px] md:text-[45px] lg:text-[55px] xl:text-[65px] font-semibold">
            Lets Design Together
          </h1>
          <p className="w-full md:w-[85%] lg:w-[932px] mx-auto font-normal text-[16px] md:text-[18px] lg:text-[21px] mt-[10px] md:mt-[15px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
          {/* input field and button */}
          <div className="w-full md:w-[85%] lg:w-[932px] mx-auto flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[25px] mt-[40px] md:mt-[60px] lg:mt-[80px]">
            <input
              type="text"
              className="w-full md:w-[60%] lg:w-[627px] h-[55px] md:h-[65px] lg:h-[75px] bg-[#F8F8F8] rounded-[14px] border border-[#AFAFAF] px-4 text-[16px] md:text-[18px] outline-none"
              placeholder="Enter your email"
            />
            <button className="w-full md:w-[40%] lg:w-[222px] h-[55px] md:h-[65px] lg:h-[75px] bg-[#FD6F00] rounded-[14px] text-white text-[18px] md:text-[20px] lg:text-[21px] font-semibold flex justify-center items-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
