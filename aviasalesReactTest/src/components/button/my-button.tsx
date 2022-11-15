import React, { ReactNode } from "react";
import styles from './style.module.scss';

type TMyButton = {
    children?: ReactNode;
};

const MyButton = ({children}: TMyButton) => {
    return (
        <div>
            <button className={styles.myButton}
            >{children}</button>
        </div>
    )
};

export default MyButton;