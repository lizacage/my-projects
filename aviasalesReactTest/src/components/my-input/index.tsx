import { InputHTMLAttributes, ReactNode } from "react";
import cn from 'classnames';
import styles from './style.module.scss';

type TMyInput = InputHTMLAttributes<HTMLInputElement> & {
    children?: ReactNode;
};

const MyInput = ({children, ...rest}: TMyInput) => {
    return (
        <div>
            <form>
                <label
                    className={styles.myLabel}
                >
                    {children}
                </label>
                <input
                    {...rest}
                    className={cn(styles.myInput, rest.type === 'date' && styles.myInputDate)}
                />
            </form>
        </div>
    )
};

export default MyInput;