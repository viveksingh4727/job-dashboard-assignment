


export const Jobtitle = () => {
    return (<div className="border-[#E7E7E7] border-b-2">
        <div className="flex flex-col w-[662px] h-[107px] mt-[36px] ml-[100px] mb-5">
          <div className="flex">
            <span className="w-[432px] h-[53px] font-poppins text-[35px] font-bold leading-[52.5px] text-left text-[#3D3D3D]">
              Senior Product Designer
            </span>
            <div className="flex items-center">
              <span className=" mr-2 text-[#D1D1D1] ">•</span>
              <span className="w-[131px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#888888]">
                posted 5 days ago
              </span>
              <div className="flex items-center  w-[59px] h-[22px] rounded-full bg-[#ECFDF3] border border-[#ABEFC6] text-xs px-2 ml-2 ">
                <span className="w-2 h-2 pb-4">• </span>
                <span className="text-[#067647] w-[33px] h-[18px] font-poppins text-[12px] font-medium leading-[18px]">
                  {" "}
                  Open
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-1 mb-6  w-[379px] h-[30px] gap-[16px] mt-4">
            <div className="w-[175px] h-[30px] space-x-[8px]">
              <span className="flex items-center">
                <img className="w-5 h-5" src="src\assets\locationIcon.png" />
                <span className="w-[143px] h-[30px] text-[#5D5D5D] font-poppins text-[20px] font-normal leading-[30px] ml-1">
                  Delaware, USA
                </span>
              </span>
            </div>
            <span className="text-[#D1D1D1]">•</span>
            <div className=" w-[168px] h-[30px] space-x-[12px]">
              <span className="flex items-center">
                <img className="w-5 h-5" src="src\assets\moneyIcon.png" />
                <span className="w-[132px] h-[30px] font-poppins text-[20px] font-normal leading-[30px] text-[#5D5D5D] ml-3">
                  $300k-$400k
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>)
}