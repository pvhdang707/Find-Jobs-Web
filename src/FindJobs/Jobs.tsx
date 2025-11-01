import Sort from "./Sort";
import JobCard from "./JobCard";
import {jobList} from "../Data/JobsData";
const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <div>
          <Sort />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-5">

       {
           jobList.map((job) => (
               <JobCard key={job.jobTitle} {...job} />
            ))
        }
        </div>
    </div>
  );
};

export default Jobs;
