export const JobCompanyDetails = () => {
  return (
    <>
      <div className="w-[697px] h-[277px] top-[851.47px]  space-x-[16px] mt-10 ml-[100px] ">
        <div className="flex items-center">
          <div className="flex items-center w-[144px] h-[60px] p-[10px_10px_10px_0px]  ">
            <div className="flex items-center w-[144px] h-[40px]  ">
              <img
                src="src\assets\companysquarelogo.png"
                className="w-[40px] h-[40px] "
              />

              <div className="w-[92px] h-[30px] ml-1">
                <p className="font-poppins text-[20px] font-normal leading-[30px] text-[#4F4F4F]">
                  Atlassian
                </p>
              </div>
            </div>
          </div>
          <div className="w-[67px] h-[26px] bg-[#E0EBF9] top-[869.47px] left-[257px] pl-3 space-x-[8px] rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <button className="w-[37px] h-[17px] font-poppins text-[11px] font-bold leading-[16.5px] text-left text-[#003788]">
              Follow
            </button>
          </div>
        </div>

        <div className="w-[736px] h-[201px] gap-[48px] mt-[16px] ml-[100px]">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="w-[344px] h-[auto] gap-[8px]">
                <span className="w-[100px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#6E6D6D]">
                  Company size:
                </span>
                <div className="w-[477px] h-[22px] font-poppins text-[16px] font-normal leading-[24px] text-left text-[#3D3D3D]">
                  1k-2k Employees
                </div>
              </div>

              <div className="w-[344px] h-[auto] gap-[8px] mt-4">
                <span className="w-[100px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#6E6D6D] ">
                  Sector:
                </span>
                <div className="w-[477px] h-[22px] font-poppins text-[16px] font-normal leading-[24px] text-left text-[#3D3D3D]">
                  Information Technology, Infrastructure
                </div>
              </div>

              <div className="w-[344px] h-[auto] gap-[8px] mt-4">
                <span className="w-[100px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#6E6D6D]">
                  Founded in:
                </span>
                <div className="w-[477px] h-[22px] font-poppins text-[16px] font-normal leading-[24px] text-left text-[#3D3D3D]">
                  2010
                </div>
              </div>
            </div>
            <div>
              <div className="w-[344px] h-[auto] gap-[8px] mt-4">
                <span className="w-[100px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#6E6D6D]">
                  Type
                </span>
                <div className="w-[477px] h-[22px] font-poppins text-[16px] font-normal leading-[24px] text-left text-[#3D3D3D]">
                  Private
                </div>
              </div>

              <div className="w-[344px] h-[auto] gap-[8px] mt-4">
                <span className="w-[100px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#6E6D6D]">
                  Funding
                </span>
                <div className="w-[477px] h-[22px] font-poppins text-[16px] font-normal leading-[24px] text-left text-[#3D3D3D]">
                  Bootstrapped
                </div>
              </div>

              <div className="w-[344px] h-[auto] gap-[8px] mt-4">
                <span className="w-[100px] h-[21px] font-poppins text-[14px] font-normal leading-[21px] text-left text-[#6E6D6D]">
                  Founded By
                </span>
                <div className="w-[477px] h-[22px] font-poppins text-[16px] font-normal leading-[24px] text-left text-[#3D3D3D]">
                  Scott Farquhar, Mike Cannon-Brookes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[159px] h-[18px] mt-[23px] ml-[101px]  font-poppins text-[#B0B0B0] underline">
        Report this listing
      </div>
    </>
  );
};
