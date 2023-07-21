import type { Meta, StoryObj } from '@storybook/react';
import Table from './index';
import DataItemType from '../../types/DataItemType';

const generateTableRow = (
    number: string,
    mod3: string,
    mod4: string,
    mod5: string,
    mod6: string
) => ({ number, mod3, mod4, mod5, mod6 });

const meta: Meta<typeof Table> = {
    component: Table,
    title: 'Table',
};

export default meta;
type Story = StoryObj<typeof Table>;

// const columns = [
//     {
//         name: 'Number',
//         selector: (row: any) => row['number'],
//     },
//     {
//         name: 'Mod3',
//         selector: (row: any) => row['mod3'],
//     },
//     {
//         name: 'Mod4',
//         selector: (row: any) => row['mod4'],
//     },
//     {
//         name: 'Mod5',
//         selector: (row: any) => row['mod5'],
//     },
//     {
//         name: 'Mod6',
//         selector: (row: any) => row['mod6'],
//     },
// ];

// const columns = React.useMemo(() => {
//     if (
//         !(
//             exportedData &&
//             Array.isArray(exportedData) &&
//             exportedData.length > 0
//         )
//     )
//         return [];

//     return Object.keys(exportedData[0]).map((key) => {
//         return {
//             name: key,
//             selector: (row: DataItemType) => row[key],
//         };
//     });
// }, [exportedData]);




const data = [
    generateTableRow('12', '0', '0', '2', '0'),
    generateTableRow('12', '0', '0', '2', '0'),
    generateTableRow('12', '0', '0', '2', '0'),
    generateTableRow('12', '0', '0', '2', '0'),
    generateTableRow('12', '0', '0', '2', '0'),
    generateTableRow('12', '0', '0', '2', '0'),
    generateTableRow('12', '0', '0', '2', '0'),
    generateTableRow('12', '0', '0', '2', '0'),
    generateTableRow('12', '0', '0', '2', '0'),
    generateTableRow('12', '0', '0', '2', '0'),
    generateTableRow('12', '0', '0', '2', '0'),
];

console.log(data);


const generateColumns = () =>{
    return Object.keys(data[0]).map((key)=>{
       return {
           name: key,
           selector: (row: DataItemType) => row[key],
       };
    })
    
}

const columns = generateColumns()
export const Base: Story = {
    args: {
        columns:columns,
        data: data,
    },
};
