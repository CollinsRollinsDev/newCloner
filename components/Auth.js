import jwt  from 'jsonwebtoken';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cookieCutter from 'cookie-cutter'
import styles from './Auth.module.css';
import {useState, useEffect} from 'react'

const Auth = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [btnMsg, setBtnMsg] = useState('Sign In');

    let access;
    const router = useRouter();


    const handleClick = async (e) => {
        e.preventDefault();
        if(!username || !password){
            alert("Please provide details");
        } else {
             setBtnMsg("Authenticating...")
             const res = await fetch("/api/signin", {
                 body: JSON.stringify({
                   username: username,
                   password: password
                 }),
                 headers: {
                   "Content-Type": "application/json",
                 },
                 method: "POST",
               }).then(res => res.json()).then(res => {
                 if(res.success === true){
                   const makeAsync = async() => {
                    const cookie = await cookieCutter.get('auth');
                    let user_data = jwt.decode(cookie);
                    access = true;
                    console.log(user_data);
                   }
                   makeAsync();
                 }
               })
           
            if(access === true){
                setBtnMsg("Access Granted. Admin Page...");
                setTimeout(() => {
                    router.push("/getdata");
                }, 2000);
            } else{
           setBtnMsg("Sign In")
           alert("Something Went wrong!")
                location.reload();
            }
            
        }
     
    }
    



    return (
        <section className={styles.container}>
              <form onSubmit={handleClick} method="post">
        <input
          placeholder="username"
          className={styles.inputBox}
          type="text"
          name=""
          id=""
          value={username.toLowerCase()}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          placeholder="security code"
          className={styles.inputBox}
          type="password"
          name=""
          id=""
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
       <button className={styles.btn} type="submit">
          {btnMsg}
        </button>
      </form>
        </section>
    )
}

export default Auth
