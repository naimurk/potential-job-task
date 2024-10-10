const Contact = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1420px] mx-auto  min-w-[320px] xl:px-[50px] px-4 items-center pt-[100px] poppins">
        {/* text */}
        <div className="text-center text-black ">
          <h1 className="text-[65px] font-semibold">Lets Design Together</h1>
          <p className="xl:w-[932px] mx-auto font-normal text-[21px] mt-[15px] ">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
          {/* input field and button */}
          <div className="w-[932px] mx-auto flex justify-center items-center  gap-[25px] mt-[80px]">
            <input
              type="text"
              className="w-[627px] h-[75px] bg-[#F8F8F8] rounded-[14px] border border-[#AFAFAF] px-4 text-[18px] outline-none"
              placeholder="Enter your email"
            />
            <button className="w-[222px] h-[75px] bg-[#FD6F00] rounded-[14px] text-white text-[21px] font-semibold flex justify-center items-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
