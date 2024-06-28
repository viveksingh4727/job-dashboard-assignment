

export const JobSkills = () => {

    return (
    <div className="border-b-2">
        <div className="grid grid-cols-4 gap-4 mt-4 top-[199px] ml-[100px]  ">
        <div className="col-span-4 mb-3">
          <div className="flex items-start w-[872px] h-[123px]   gap-[64px]">
            <div className="w-[170px] h-[123px] gap-[8px]">
              <div className="font-size mb-2 w-[120px] text-[#6E6D6D] text-sm font-normal font-poppins">
                Skills Required
              </div>
              <div className="flex flex-col space-y-1 w-[131.41px] h-[94px] gap-[8px]">
                <div className="w-[70px] h-[26px] p-[4px 6px 4px 6px] gap-[3px] rounded-lg border border-solid border-primary border-[#D0D5DD] flex items-center shadow-inner ">
                  <img
                    className="h-4 w-4"
                    src="src\assets\figma-logo-512.webp"
                  />
                  <span className=" w-[38px] h-[18px] font-poppins font-normal text-xs text-[#344054]">
                    Figma
                  </span>
                </div>
                <div className="w-[131.41px] h-[26px] p-[4px 6px 4px 6px] gap-[3px] rounded-lg border border-solid border-primary border-[#D0D5DD] flex items-center shadow-inner ">
                  <img className="h-4 w-4" src="src\assets\adobelogo.webp" />
                  <span className=" w-[99px] h-[18px] font-poppins font-normal text-xs text-[#344054]">
                    Adobe Illustrator
                  </span>
                </div>

                <div className="w-[91.41px] h-[26px] p-[4px 6px 4px 6px] gap-[3px] rounded-lg border border-solid border-primary border-[#D0D5DD] flex items-center shadow-inner ">
                  <img
                    className="h-4 w-4"
                    src="src\assets\Adobe-Xd-Icon-PNG.jpg"
                  />
                  <span className=" w-[59px] h-[18px] font-poppins font-normal text-xs text-[#344054]">
                    Adobe XD
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="w-[170px] h-[51px]">
                <span className="w-[139px] h-[21px] font-poppins text-sm font-normal text-[#6E6D6D]">
                  Preferred Language
                </span>
                <p className="w-[477px] h-[22px] font-poppins text-sm font-normal leading-6 text-left mt-2">
                  English
                </p>
              </div>
              <div className="w-[170px] h-[51px]">
                <span className="w-[34px] h-[21px] font-poppins text-sm font-normal text-[#6E6D6D]">
                  Type
                </span>
                <p className="w-[477px] h-[22px] font-poppins text-sm font-normal leading-6 text-left mt-2">
                  Full time
                </p>
              </div>
              <div className="w-[170px] h-[51px]">
                <span className="w-[136px] h-[21px] font-poppins text-sm font-normal text-[#6E6D6D]">
                  Years of Experience
                </span>
                <p className="w-[477px] h-[22px] font-poppins text-sm font-normal leading-6 text-left mt-2">
                  3+ Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}