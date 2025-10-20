import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";

const Working = () => {
  return (
    <div className=" mt-2 pb-5">
      <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100">
        How it <span className="text-bright-sun-400">Works</span>{" "}
      </div>

      <div className="mx-auto mb-10 text-lg text-mine-shaft-300 text-center w-1/2">
        {" "}
        Effortlessly navigate through the process and land your dream job.
      </div>
      <div className="  flex gap-10  px-16 justify-center items-center">
        <div className="relative">
          <img className="w-[30rem]" src="/working/Girl.png" alt="" />
          <div className=" ">
            <div className="absolute w-36 flex flex-col items-center justify-center right-1 top-[50%] border-bright-sun-400 border-2 rounded-lg p-2 backdrop-blur-md">
              <Avatar className="!h-16 !w-16" src="avatar.png" alt="it's me" />

              <div className="text-mine-shaft-100 mb-1 text-sm text-center">
                Complete your profile to get started
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {work.map((item) => (
            <div className="flex items-center gap-4">
              <div className="p-3 bg-bright-sun-400 rounded-full">
                <img
                  className="w-10 h-10"
                  src="/category/Content Writing.png"
                  alt=""
                />
              </div>
              <div className="">
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {item.name}
                </div>
                <div className="text-mine-shaft-300">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
