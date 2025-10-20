import Marquee from "react-fast-marquee";
import {companies} from "../Data/Data";

const Companies = () => {
  return (
    <div className=" mt-2 pb-5">
      <div className="text-4xl text-center mb-10 font-semibold text-mine-shaft-100">
        Trusted by <span className="text-bright-sun-400">1000+</span> companies
      </div>
      <Marquee pauseOnHover={true}>
        {
            companies.map((company) => (
                <div key={company} className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer" >
                    <img className=" h-14" src={`/companies/${company}.png`} alt={company} />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};
export default Companies;
