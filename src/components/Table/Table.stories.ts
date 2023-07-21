import type { Meta, StoryObj } from '@storybook/react';
import Table from './index';

const meta: Meta<typeof Table> = {
    component: Table,
    title: 'Table',
};

export default meta;
type Story = StoryObj<typeof Table>;


const columns = [
    {
        name: "Number",
        selector: (row:any) => row["number"],
    },
    {
        name: "Mod3",
        selector: (row:any) => row["mod3"],
    },
    {
        name: "Mod4",
        selector: (row:any) => row["mod4"],
    },
    {
        name: "Mod5",
        selector: (row:any) => row["mod5"],
    },
    {
        name: "Mod6",
        selector: (row:any) => row["mod6"],
    }
]

const data = [
    {
        number: '12',
        mod3: '0',
        mod4: '0',
        mod5: '2',
        mod6: '0',
    },
    {
        number: '24',
        mod3: '0',
        mod4: '0',
        mod5: '4',
        mod6: '0',
    },
    {
        number: '36',
        mod3: '0',
        mod4: '0',
        mod5: '1',
        mod6: '0',
    },
    {
        number: '48',
        mod3: '0',
        mod4: '0',
        mod5: '3',
        mod6: '0',
    },
    {
        number: '60',
        mod3: '0',
        mod4: '0',
        mod5: '0',
        mod6: '0',
    },
    {
        number: '72',
        mod3: '0',
        mod4: '0',
        mod5: '2',
        mod6: '0',
    },
    {
        number: '84',
        mod3: '0',
        mod4: '0',
        mod5: '4',
        mod6: '0',
    },
    {
        number: '96',
        mod3: '0',
        mod4: '0',
        mod5: '1',
        mod6: '0',
    },
    {
        number: '108',
        mod3: '0',
        mod4: '0',
        mod5: '3',
        mod6: '0',
    },
    {
        number: '120',
        mod3: '0',
        mod4: '0',
        mod5: '0',
        mod6: '0',
    },
    {
        number: '132',
        mod3: '0',
        mod4: '0',
        mod5: '2',
        mod6: '0',
    },
    {
        number: '144',
        mod3: '0',
        mod4: '0',
        mod5: '4',
        mod6: '0',
    },
    {
        number: '156',
        mod3: '0',
        mod4: '0',
        mod5: '1',
        mod6: '0',
    },
    {
        number: '168',
        mod3: '0',
        mod4: '0',
        mod5: '3',
        mod6: '0',
    },
    {
        number: '180',
        mod3: '0',
        mod4: '0',
        mod5: '0',
        mod6: '0',
    },
    {
        number: '192',
        mod3: '0',
        mod4: '0',
        mod5: '2',
        mod6: '0',
    },
    {
        number: '204',
        mod3: '0',
        mod4: '0',
        mod5: '4',
        mod6: '0',
    },
    {
        number: '216',
        mod3: '0',
        mod4: '0',
        mod5: '1',
        mod6: '0',
    },
    {
        number: '228',
        mod3: '0',
        mod4: '0',
        mod5: '3',
        mod6: '0',
    },
    {
        number: '240',
        mod3: '0',
        mod4: '0',
        mod5: '0',
        mod6: '0',
    },
    {
        number: '252',
        mod3: '0',
        mod4: '0',
        mod5: '2',
        mod6: '0',
    },
    {
        number: '264',
        mod3: '0',
        mod4: '0',
        mod5: '4',
        mod6: '0',
    },
]
export const Base: Story = {
    args: {
        columns:columns,
        data: data
    },
};
