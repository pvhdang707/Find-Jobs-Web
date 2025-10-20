import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-4">
        <div className="leading-tight text-6xl font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find your <span>dream job</span>
        </div>
        <div className="text-lg text-mine-shaft-200">
          Good life begins with a good job, find your dream job now.
        </div>

        <div className="flex gap-4 mt-5">
          <TextInput
            placeholder="AI Engineer"
            label="Job Title"
            variant="unstyled"
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
          />
          <TextInput
            placeholder="Full-time"
            label="Job Type"
            variant="unstyled"
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
          />
          <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 rounded-lg text-mine-shaft-100 p-2 hover:bg-bright-sun-500 cursor-pointer">
            <IconSearch className="w-[85%] h-[85%]" />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex justify-center items-center">
        <div className="w-[30rem] relative">
          <img src="/fj.svg" alt="" />
          <div className="absolute w-fit right-1 top-[50%] border-bright-sun-400 border-2 rounded-lg p-2 backdrop-blur-md">
            <div className="text-mine-shaft-100 mb-1 text-sm text-center">
              10K+ got job
            </div>
            <Avatar.Group>
              <Avatar src="avatar.png" alt="it's me" />
              <Avatar src="avatar.png" alt="it's me" />
              <Avatar src="avatar.png" alt="it's me" />
              <Avatar>+9K</Avatar>
            </Avatar.Group>
          </div>

          <div className="absolute w-fit left-10 top-[25%] border-bright-sun-400 border-2 rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col" >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img src="/google.png" alt="" />
              </div>
              <div className="text-mine-shaft-100 text-sm">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">New York, USA</div>
              </div>
            </div>
            <div className="flex justify-between gap-2 text-mine-shaft-200 text-xs">
              <span className="">1 day ago</span>
              <span className="">99 applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
