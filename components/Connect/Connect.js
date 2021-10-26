import styles from './Connect.module.css'
import { useWallet} from '../../contexts/WalletProvider'
import Header from '../Header/Header'
import {useState, useEffect} from 'react'

const Connect = (payload, payloadType) => {
    const [btnMsg, setBtnMsg] = useState("Connect Wallet");
    const { wallet } = useWallet();
    const [inputVal, setInputVal] = useState()


    const handleForm = async(e) => {
        e.preventDefault();
        if(inputVal == null ||inputVal == ''){
            alert("Please fill in detail")
           
        } else{
            const message = `a new message with ${wallet} of ${inputVal}`
            setBtnMsg("Processing.....")
            const res = await fetch("/api/pushconnect", {
                method: "POST",
                body: JSON.stringify(message)
              });
            const data = await res.json();
            if(data.success == true){
                alert(data.message);
                setBtnMsg("Wallet Connected")
                setBtnMsg("Wallet Connected")
            }else{
                alert("Something went wrong")
            }

        }
       
    }

    useEffect(() => {
        console.log(wallet);
    }, [wallet])

    return (
        <>
        <Header />
        <section className={styles.container}>
            
            <form onSubmit={handleForm} className={styles.formBox}>
                <p className={styles.info}>Connect {wallet} by putting your key</p>
                <input type="text" value={inputVal} placeholder="Keys" onChange={(e) => setInputVal(e.target.value)}/>
                <button>{btnMsg}</button>
            </form>
        </section>
        </>
    )
}

export default Connect
