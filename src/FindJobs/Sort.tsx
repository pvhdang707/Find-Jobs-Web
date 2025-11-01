import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
const opt = ['Relevance', 'Most Recent', 'Salary (low to high)', 'Salary (high to low)'];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
   

      <Combobox
        store={combobox}
        width={200}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          {/* <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button> */}
        
        <div onClick={() => combobox.toggleDropdown()} className="cursor-pointer flex gap-2 text-sm border border-bright-sun-400 rounded-lg p-2 flex">
        {selectedItem} <IconAdjustments className='h-5 w-5 text-bright-sun-400'/>
        </div>
        
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
  );
}

export default Sort;