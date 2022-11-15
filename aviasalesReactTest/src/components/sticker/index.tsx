import { TProps } from "../../types/type-props";
import styles from './style.module.scss';
import cn from 'classnames';

const MySticker = ({className, children}: TProps) => {

    return (
        <div className={cn(styles.sticker, className)}>
            {children}
        </div>
    )
};

export default MySticker;