import { dropdownData } from "../Data/JobsData";
import { MultiInput } from "./MultiInput";
import { Divider, RangeSlider } from "@mantine/core";
import { useState } from "react";
const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex px-5 py-8">
      {dropdownData.map((item) => (
        <>
          <div key={item.title} className="w-1/5">
            <div className="text-mine-shaft-300 mb-2 ">{item.title}</div>
            <MultiInput {...item} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex justify-between items-center text-sm">
          <div>Salary</div>
          <div>
            $ {value[0]} - $ {value[1]}
          </div>
        </div>
        <RangeSlider
          color="brightSun.4"
          size="xs"
          value={value}
          onChange={setValue}
          labelTransitionProps={{ transition: "skew-down", duration: 100, timingFunction: "linear" }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
