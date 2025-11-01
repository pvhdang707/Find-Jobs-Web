import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Jobs from "../FindJobs/Jobs";

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" mr="md"/>
      <SearchBar/>
      <Divider size="xs" mr="md"/>
      <Jobs/>
    </div>
  );
};

export default FindJobs;