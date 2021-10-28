import Header from '../Header/Header';
import styles from './GetFiles.module.css';
import {useState, useEffect} from 'react';
import jwt  from 'jsonwebtoken';
import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router';


const GetFiles = () => {
    const router = useRouter();
    const [userData, setUserData] = useState();

    const privateRoute = async() => {
        const cookie = await cookieCutter.get('auth');
        if(cookie){
            let user_data = jwt.decode(cookie);
            setUserData(user_data);
        } else{
            alert("You are not logged in. Please click ok to login first")
            router.push("/auth");
        }
    }

    // private route implementation
    useEffect(() => {
       privateRoute();
    }, [])






    const [messages, setMessages] = useState([])

    const fetchInitialData = async() => {
        const res = await fetch("/api/getmessage");
        const result = await res.json();
        let message = await result.message.reverse()
        setMessages(message)
    } 
    useEffect(() => {
        if(userData){
            fetchInitialData();
        }
    }, [])

 const displayMsg = messages.map(message => {
     return(
        <section key={message._id} className={styles.msgBox}>
        <div className={styles.msgDiv}>
            <div className={styles.left}>{message.content}</div>
            <div className={styles.right}>{message.wallet}</div>
        </div>
    </section>
     )
 })




    return (
        <section className={styles.container}>
            <Header />
            <section className={styles.subContainer}>
            <p className={styles.head}>All data is arranged here.</p>
                {displayMsg}
            </section>
        </section>
    )
}

export default GetFiles
