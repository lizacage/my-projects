import MyButton from "../../components/button/my-button";
import MyInput from "../../components/my-input";
import styles from './style.module.scss';

const Avia = () => {

    return (
        <>  
            <div className={styles.wrapper}>
                <div className={styles.navigation}>
                    <MyInput children='Откуда' placeholder='Город вылета'
                    />
                    <MyInput children='Куда' placeholder='Город прилета'/>
                    <MyInput children='Туда' placeholder='дд.мм.гг' type="date" />
                    <div className={styles.line}></div>
                    <MyInput children='Обратно' placeholder='дд.мм.гг' type="date"/>
                </div>
                <div className={styles.buttonBlock}>
                    <MyButton>Найти билеты</MyButton>
                </div>
            </div>
        </>
        
    )
};

export default Avia;