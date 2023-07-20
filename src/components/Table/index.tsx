import DataTable from 'react-data-table-component';
import styles from './styles.module.css';

interface Props {
    columns: any[];
    data: any[];
}

const Table = (props: Props) => {
    const { columns, data } = props;
    return (
        <div className={styles['container']}>
            <DataTable
                columns={columns}
                data={data}
                pagination
                paginationPerPage={20}
            />
        </div>
    );
};
export default Table;
