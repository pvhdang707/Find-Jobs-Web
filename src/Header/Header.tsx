import React from "react";
import {
  IconBell,
  IconSettings,
  IconUserCircle,
  IconZoomMoney,
} from "@tabler/icons-react";
import { Avatar } from "@mantine/core";

const Header = () => {
  return (
    <div className="w-full bg-black h-28 text-white flex justify-between items-center px-4">
      <div className="flex items-center gap-2">
        <IconZoomMoney className="h-10 w-10" />
        <div className="text-2xl font-semibold">TGD Jobs</div>
      </div>
      <div className="flex items-center gap-4">
        <a href="">Find Job</a>
        <a href="">Find Talent</a>
        <a href="">Upload Job</a>
        <a href="">About</a>
      </div>
      <div className="flex items-center gap-4">
        <IconBell className="cursor-pointer" />
        <div className="flex items-center gap-2">
          {/* <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
            <IconUserCircle className="h-6 w-6" />
          </div> */}
                <Avatar src="avatar.png" alt="it's me" />
            
          <span className="text-sm">phDngW</span>
        </div>
        <IconSettings className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
