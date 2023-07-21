import type { Meta, StoryObj } from '@storybook/react';
import DropZone from './index';

const meta: Meta<typeof DropZone> = {
    component: DropZone,
    title:"DropZone"
  };

  export default meta;
type Story = StoryObj<typeof DropZone>;

export const Base: Story ={
    args: {
        
    }
}
