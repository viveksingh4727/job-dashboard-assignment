export const JobAbout = () => {
  return (
    <div className="border-b-2">
      <div className="w-[526px] h-[403px] top-[379px] ml-[100px] gap-[8px] items-start mt-2 ">
        <div className="w-[100px] h-[21px] gap-2 ">
          <span className=" font-poppins font-[#6E6D6D] text-sm">
            About the job
          </span>
        </div>
        <div className="w-[526px] h-[403px]  font-poppins text-base font-normal mt-2 font-[#3D3D3D] ">
          <ol className="list-none">
            <li>1. Handle the UI/UX research design</li>
            <li>
              2. Work on researching on latest web applications designs & trends
            </li>
            <li>3. Work on conceptualizing and visualizing</li>
            <li>
              4. Work on creating graphics content and other graphic related
              works
            </li>
          </ol>

          <span>Benefits:</span>
          <ul className="list-disc list-inside space-y-1">
            <li>Health Insurance</li>
            <li>Provident Fund</li>
          </ul>

          <span>Schedule:</span>
          <ul className="list-disc list-inside space-y-1">
            <li>Day shift</li>
          </ul>

          <span>Supplemental pay types:</span>
          <ul className="list-disc list-inside space-y-1">
            <li>Performance bonus...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
