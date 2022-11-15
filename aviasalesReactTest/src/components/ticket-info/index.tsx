import styles from './style.module.scss';
import bag from './bag.svg';
import { TProps } from "../../types/type-props";
import cn from 'classnames';

const TicketInfo = ({className}: TProps) => {
    const oneTicket = true;

    return (
        <>  
            <div className={className}>
                <div className={styles.mainInfo}>
                    <div className={styles.ticketInfo}>
                        <div className={styles.ticketTime}>
                            09:20
                        </div>
                        <div className={styles.ticketDate}>
                            <div>
                                Москва 
                            </div>
                            <div>
                                19.05.2022   
                            </div>
                        </div>
                    </div>
                    <div className={styles.wayInfo}>
                        <div className={cn(styles.circle, styles.circleLeft)}>
                            <div className={cn(styles.airport, styles.airportLeft)}>
                                SVO
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.timeWay}>
                                В пути 1 ч 55 мин
                            </div>
                        </div>
                        <div className={cn(styles.circle, styles.circleRight)}>
                            <div className={cn(styles.airport, styles.airportRight)}>
                                ROV
                            </div>
                        </div>
                    </div>
                    <div className={styles.ticketInfo}>
                        <div className={styles.ticketTime}>
                            11:05
                        </div>
                        <div className={styles.ticketDate}>
                            <div>
                                Ростов-на-Дону 
                            </div>
                            <div>
                                19.05.2022   
                            </div>
                        </div>
                    </div>
                    <div className={styles.ticketBag}>
                        <img src={bag}/>
                    </div>
                </div>
                {!oneTicket && <div className={styles.chooseTime}>
                    <button className={cn(styles.chooseTimeButton, styles.chooseTimeButton_active)}><span>09:20</span> - 11:05</button>
                    <button className={styles.chooseTimeButton}><span>10:20</span> - 12:05</button>
                    <button className={styles.chooseTimeButton}><span>11:20</span> - 13:05</button>
                </div>}
            </div>
            
        </>
        
    )
};

export default TicketInfo;