import React from "react";
import {
  IconBell,
  IconSettings,
  IconUserCircle,
  IconZoomMoney,
} from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 h-20 text-white flex justify-between items-center px-4">
      <div className="flex items-center gap-2">
        <IconZoomMoney className="h-10 w-10" />
        <div className="text-2xl font-semibold">TGD Jobs</div>
      </div>

      {NavLinks()}
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {/* <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
            <IconUserCircle className="h-6 w-6" />
            </div> */}
          <Avatar src="avatar.png" alt="it's me" />

          <span className="text-sm">phDngW</span>
        </div>
        <div className="cursor-pointer p-1.5 bg-mine-shaft-900 rounded-full">
          <IconSettings />
        </div>
        <div className="cursor-pointer p-1.5 bg-mine-shaft-900 rounded-full">
          <Indicator withBorder processing color="brightSun.4">
            <IconBell />
          </Indicator>  
        </div>
      </div>
    </div>
  );
};

export default Header;
