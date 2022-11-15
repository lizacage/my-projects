import MyCompany from "../../components/company";
import MyPrice from "../../components/price";
import MySticker from "../../components/sticker";
import TicketInfo from "../../components/ticket-info";
import styles from './style.module.scss';
import cn from 'classnames';

const InfoAvia = () => {

    const oneTicket = true;
    return (
        <>  
            {!oneTicket ? ( 
                <div className={cn(styles.root, styles.rootForOne)}>
                    <MySticker children='Невозвратный' className={styles.sticker}/>
                    <MyCompany className={cn(styles.ticketEdge, styles.oneMyCompany)}/>
                    <TicketInfo className={styles.ticketMid}/>
                    <MyPrice className={styles.ticketEdge}/>
                </div>
            ):(
                <div className={cn(styles.root,styles.rootForDouble)}>
                    <div className={styles.doubleTicket}>
                        <div className={styles.partOfTicket}>
                            <MySticker children='Невозвратный' className={styles.sticker}/>
                            <MyCompany className={cn(styles.ticketEdge, styles.doubleMyCompany)}/>
                            <TicketInfo className={cn(styles.ticketMid, styles.doubleTickedMid)}/>
                        </div>
                        <div className={styles.partOfTicket}>
                            <MySticker children='Невозвратный' className={styles.sticker}/>
                            <MyCompany className={cn(styles.ticketEdge, styles.doubleMyCompany)}/>
                            <TicketInfo className={cn(styles.ticketMid, styles.doubleTickedMid)}/>
                        </div>
                    </div>
                    <MyPrice className={styles.ticketEdge}/>
                </div>
            )}
           
        </>
        
    )
};

export default InfoAvia;