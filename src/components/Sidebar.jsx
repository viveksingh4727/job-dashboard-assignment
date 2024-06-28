export const SideBar = () => {
  return (
    <div className="border-t-[1px] border-r-[1px]  border-solid border-[#E7E7E7] bg-[#FCFCFC] h-full">
      <div className="w-[360px] h-[371px] mt-[36px] ml-[49px] space-y-[24px] ">
        <div className="w-[360px] h-[48px]  flex justify-between ">
          <button className="w-[172px] h-[48px] py-[12px] px-[24px] rounded-[8px] border-[0.8px] border-solid border-[#DC4A2D] bg-[#FEF4F2] flex items-center">
            <img
              className="w-[15px] h-[15px]  border-[#DC4A2D]"
              src="src/assets/deleteIcon.png"
            ></img>
            <span className="w-[81px] h-[24px] ml-2 font-poppins text-[16px] font-normal leading-[24px] text-[#DC4A2D]">
              Delete job
            </span>
          </button>

          <button className="w-[172px] h-[48px]  rounded-[8px] py-[12px] px-[24px] border-[0.8px] border-solid border-[#DC4A2D] bg-[#DC4A2D]  flex items-center">
            <img
              className="w-[15px] h-[15px]  border-[#DC4A2D]"
              src="src\assets\editicon.png"
            ></img>
            <span className="w-[81px] h-[24px]  font-poppins text-[16px] font-normal leading-[24px] text-[#FFFFFF]">
              Edit Job
            </span>
          </button>
        </div>

        <div className="w-[360px] h-[299px] pt-[12px] space-y-[16px] ">
          <div className="w-[336px] h-[44px] flex justify-between">
            <div className="flex items-center">
              <img src="src\assets\applicantIcon.png" className="h-5 w-5" />
              <span className="w-[86px] h-[24px] text-[#4F4F4F] font-poppins text-[16px] font-normal leading-[24px] ml-2">
                Applicants
              </span>
            </div>
            <div className="w-[58px] h-[42px] p-[6px_10px] space-y-[10px]">
              <span className="w-[38px] h-[30px] font-poppins text-[20px] font-normal leading-[30px] text-left text-[#3D3D3D]">
                400
              </span>
            </div>
          </div>
          <div className="w-[336px] h-[1px]  bg-[#E7E7E7]"></div>

          <div className="w-[336px] h-[44px] flex justify-between">
            <div className="flex items-center">
              <img src="src\assets\matchesIcon.png" className="h-5 w-5" />
              <span className="w-[86px] h-[24px] text-[#4F4F4F] font-poppins text-[16px] font-normal leading-[24px] ml-2">
                Matches
              </span>
            </div>
            <div className="w-[58px] h-[42px] p-[6px_10px] space-y-[10px]">
              <span className="w-[38px] h-[30px] font-poppins text-[20px] font-normal leading-[30px] text-left text-[#3D3D3D]">
                100
              </span>
            </div>
          </div>
          <div className="w-[336px] h-[1px]  bg-[#E7E7E7]"></div>

          <div className="w-[336px] h-[44px] flex justify-between">
            <div className="flex items-center">
              <img src="src\assets\messagesIconDark.png" className="h-5 w-5" />
              <span className="w-[86px] h-[24px] text-[#4F4F4F] font-poppins text-[16px] font-normal leading-[24px] ml-2">
                Messages
              </span>
            </div>
            <div className="w-[58px] h-[42px] p-[6px_10px] space-y-[10px]">
              <span className="w-[38px] h-[30px] font-poppins text-[20px] font-normal leading-[30px] text-left text-[#3D3D3D]">
                147
              </span>
            </div>
          </div>
          <div className="w-[336px] h-[1px]  bg-[#E7E7E7]"></div>

          <div className="w-[336px] h-[44px] flex justify-between">
            <div className="flex items-center">
              <img src="src\assets\eyeIcon.png" className="h-5 w-5" />
              <span className="w-[86px] h-[24px] text-[#4F4F4F] font-poppins text-[16px] font-normal leading-[24px] ml-2">
                Views
              </span>
            </div>
            <div className="w-[58px] h-[42px] p-[6px_10px] space-y-[10px]">
              <span className="w-[38px] h-[30px] font-poppins text-[20px] font-normal leading-[30px] text-left text-[#3D3D3D]">
                800
              </span>
            </div>
          </div>
          <div className="w-[336px] h-[1px]  bg-[#E7E7E7]"></div>
        </div>
      </div>

      <div className="w-[385px] h-[196px] mt-[45px] ml-5 rounded-[12px] border-[1px]  bg-[#FFFFFF] border-[#F7F7F7] drop-shadow-md flex flex-col items-start">
        <span className="w-[321px] h-[30px] font-poppins text-[20px] font-bold leading-[30px] text-left text-[#000000] mt-4 ml-4 py-2">
          <p>“A quote from a Atlassian.”</p>
        </span>

        <div className="w-[153px] h-[50px] gap-[10px] mt-10  ml-5 flex">
          <div className=" ">
            <img
              src="src\assets\Author.png"
              className="w-[45px] h-[45px] rounded-full"
            />
          </div>
          <div className="w-[92px] h-[50px] gap-[2px]">
            <div className="w-[49px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left text-[#000000]">
              Name
            </div>
            <div className="w-[92px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left text-[#828282]">
              Description
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
