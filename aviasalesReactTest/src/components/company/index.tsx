import styles from './style.module.scss';
import logo from './logo.png';
import { TProps } from "../../types/type-props";
import cn from 'classnames';


const MyCompany = ({className}: TProps) => {

    return (
        <>  
            <div className={cn(styles.root, className)}>
                <div>
                    <div className={styles.logo}>
                        <img src={logo} alt="S7"/>
                    </div> 
                    <div className={styles.nameCompany}>
                        S7 Airlines
                    </div> 
                </div>
            </div>
        </>
        
    )
};

export default MyCompany;