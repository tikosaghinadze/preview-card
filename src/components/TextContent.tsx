import data from "../data/data";

interface TextContentProps {
  purple: string;
  paragraph: string;
}

const TextContent = ({ purple, paragraph }: TextContentProps) => {
  return (
    <div className=" bg-[#1B1937] flex flex-col gap-10 p-8 rounded-b-lg lg:p-[72px]  lg:rounded-br-none lg:rounded-tl-lg">
      <div className=" flex text-center flex-col justify-center items-center gap-4 lg:text-uppercase lg:text-left ">
        <h1 className=" text-white font-bold font-['Inter'] leading-loose text-[28px] lg:text-4xl">
          Get{" "}
          <span className=" text-[#AB5CDB] font-['Inter'] text-[28px]  lg:text-4xl">
            {purple}
          </span>{" "}
          that help your business grow.
        </h1>
        <p className="text-white font-['Inter'] text-[15px] leading-[25px] opacity-75">
          {paragraph}
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-[63.5px]">
        {data.map((item) => {
          return (
            <div className="text-center">
              <h4 className="text-2xl font-['Inter'] font-bold text-white">
                {item.amount}
              </h4>
              <span className=" text-white opacity-60 font-['Lexend Deca'] uppercase">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextContent;
