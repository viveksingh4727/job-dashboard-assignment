export const Header = () => {
  return (
    <div className="flex bg-white p-4 shadow w-[1728px] h-[109px] ">
      <div className="w-[1664px] h-[65px] flex justify-between top-[25.57px] left-[40px] items-center">
        <div className="bg-[#E7E7E7] w-[100px] h-[61px] p-[9px_28px] gap-[10px] flex items-center">
          <span className=" w-[47px] h-[27px] text-[#DC4A2D] font-bold text-xl">
            Logo
          </span>
        </div>
        <div className="w-[683px] h-[78.85px] mt-[16px]  flex items-center">
          <div className="w-[109px] h-[58px] mt-[2px] ml-[8px] mb-4 mr-4 rounded-[49px] border-2 border-[#FCB4A5] bg-[#DC4A2D] drop-shadow-lg">
            <div className="w-[80px] h-[30px] mt-[12px] ml-[10px]  flex items-center">
              <img src="src\assets\jobsIcon.png" className="h-5 w-5 mr-1"></img>
              <span className="w-[48px] h-[30px] font-poppins text-[20px] font-normal leading-[30px] text-[#FFFFFF]">
                Jobs
              </span>
            </div>
          </div>
          <div className="w-[602px] h-[74px] left-[136px] rounded-[36px] border-[0.5px] mb-4 border-[#D1D1D1] bg-[#FFFFFF] shadow-inner flex justify-between">
            <div className="w-[133px] h-[30px] mt-[24px] ml-[18px] flex items-center">
              <img src="src\assets\messagesIcon.png" className="h-5 2-5"></img>
              <span className="w-[101px] h-[30px] font-poppins text-[20px] font-normal leading-[30px]  text-[#B0B0B0]">
                Messages
              </span>
            </div>
            <div className="w-[133px] h-[30px] mt-[24px] ml-[18px] flex items-center">
              <img src="src\assets\payementIcon.png" className="h-5 2-5"></img>
              <span className="w-[101px] h-[30px] font-poppins text-[20px] font-normal leading-[30px]  text-[#B0B0B0]">
                Payments
              </span>
            </div>
            <div className="w-[133px] h-[30px] mt-[24px] ml-[18px] flex items-center mr-3">
              <img src="src\assets\messagesIcon.png" className="h-5 2-5"></img>
              <span className="w-[101px] h-[30px] font-poppins text-[20px] font-normal leading-[30px]  text-[#B0B0B0]">
                Application
              </span>
            </div>
          </div>
        </div>

        <div className="w-[134px] h-[60px] flex justify-between items-center ">
          <div>
            <img src="src\assets\bellIcon.png" className="h-[32px] w-[32px]" />
          </div>
          <div className="w-[66px] h-[40px] flex items-center">
            <img
              src="src/assets/companysquarelogo.png"
              className="h-10 w-10 rounded-full"
            />
            <img src="src\assets\downIcon.png" className="h-5 w-5 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
