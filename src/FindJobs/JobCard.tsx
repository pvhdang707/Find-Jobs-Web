import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";
const JobCard = (props:any) => {
  return (
    <div className="bg-mine-shaft-900 rounded-xl p-4 w-72 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-mine-shaft-800 rounded-lg">
            <img className="h-10 " src="/Icons/microsoft.png" alt="microsoft" />
            {/* <img className="h-10 " src={`/Icons/${props.company}.png`} alt="microsoft" /> */}
          </div>
          <div>
            <div className="text-sm font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="h-5 w-5 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-lg [&>div]:p-2 [&>div]:text-bright-sun-400 text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text className="!text-xs !text-mine-shaft-300 text-justify" lineClamp={3}>
        {props.description}
      </Text>
      <Divider size="xs" color="mineShaft.7"/>
      <div className="flex justify-between items-center">
        <div className="text-mine-shaft-300  font-semibold">
            ${props.package}
        </div>
        <div className="flex items-center text-mine-shaft-300 gap-2 text-xs">
           <IconClockHour3 className="h-4 w-4"/> {props.postedDaysAgo} days ago
        </div>
      </div>
    </div>
  );
};

export default JobCard;
