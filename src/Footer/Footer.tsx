import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconZoomMoney,
} from "@tabler/icons-react";
import { footer } from "../Data/Data";
const Footer = () => {
  return (
    <div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['Poppins']">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <IconZoomMoney className="h-7 w-7" />
          <div className="text-2xl font-semibold">TGD Jobs</div>
        </div>

        <div className="text-sm text-mine-shaft-300">
          Job portal for job seekers and employers
        </div>

        <div className="flex gap-3 text-bright-sun-400 [&>div]:cursor-pointer [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full hover:[&>div]:bg-mine-shaft-700 ">
          <div>
            <IconBrandFacebook />
          </div>
          <div>
            <IconBrandInstagram />
          </div>
        </div>
      </div>
      {footer.map((item, index) => (
        <div key={index}>
          <div className="text-lg font-semibold text-bright-sun-400 mb-3">{item.title}</div>
          {item.links.map((link, index) => (
            <div key={index} className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300">{link}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;

