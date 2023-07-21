import type { Meta, StoryObj } from '@storybook/react';
import MultiSelectDropdown from './index';

const meta: Meta<typeof MultiSelectDropdown> = {
    component: MultiSelectDropdown,
    title:"MultiSelectDropdown"
  };

  export default meta;
type Story = StoryObj<typeof MultiSelectDropdown>;

export const Base: Story ={
    args: {
        defaultValues:[1,2,3,4],
        selectedValues:[],
        onRemove:()=>{},
        onSelect:()=>{},
        label:'dropdown'
    }
}
