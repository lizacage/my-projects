import { TProps } from "../../types/type-props";
import styles from './style.module.scss';

const MyPrice = ({className}: TProps) => {
const oneTicket = true;
    return (
        <>  
            <div className={className}>
                <div className={styles.price}>
                    {!oneTicket ? ('4 150 ₽'):('8300 ₽')}
                </div>
            </div>
        </>
        
    )
};

export default MyPrice;