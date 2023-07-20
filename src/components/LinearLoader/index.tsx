import styles from './styles.module.css';

interface Props {
    isActive: boolean;
}

const LinearLoader = (props: Props) => {
    const { isActive } = props;
    
    if (isActive)
        return (
            <div className={styles['loading-container']}>
                <div className={styles['loading-line']}></div>
            </div>
        );

    return <div className={styles['blank']}></div>;
};

export default LinearLoader;
