import Header from "../Header/Header";
import styles from "./GetFiles.module.css";
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import cookieCutter from "cookie-cutter";
import { useRouter } from "next/router";
import queryString from 'query-string';

const GetFiles = ({props}) => {
  const router = useRouter()

  useEffect(() => {
    // let {params} = queryString.parse(props.location.search)
    // console.log("params is:",params.item)

    let city = (new URLSearchParams(window.location.search)).get("item")
    console.log(city)
    console.log("working")
    console.log(router.query);
  }, [])

  const [userData, setUserData] = useState();
  const [currentAction, setCurrentAction] = useState(<svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="white"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
  </svg>)

{/* <svg
xmlns="http://www.w3.org/2000/svg"
width="15"
height="15"
fill="white"
viewBox="0 0 24 24"
>
<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
</svg> */}

  const privateRoute = async () => {
    const cookie = await cookieCutter.get("auth");
    if (cookie) {
      let user_data = jwt.decode(cookie);
      setUserData(user_data);
    } else {
      alert("You are not logged in. Please click ok to login first");
      router.push("/auth");
    }
  };

  // private route implementation
  useEffect(() => {
    privateRoute();
  }, []);

  const [messages, setMessages] = useState([]);

  const fetchInitialData = async () => {
    const res = await fetch("/api/getmessage");
    const result = await res.json();
    let message = await result.message.reverse();
    setMessages(message);
  };
  useEffect(() => {
    if (userData) {
      fetchInitialData();
    }
  }, [userData]);

  const deleteMsg = async (id) => {
     const test = confirm("Are you sure you want to delete?")
     if(test !== true){
        alert("Action aborted!")
     } else{

        try {
            //    setCurrentAction("Deleting...")
            const res = await fetch(`/api/delete?id=${id}`);
            const data = await res.json();
            if(data.success === true){
                alert("Message Deleted! Page should refresh now")
            location.reload()
            } else{
                alert("Something went wrong along the way")
                location.reload()
            }
           } catch (error) {
               console.log(error.message);
               alert("Something went wrong. Try again later")
               setCurrentAction(<svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="white"
                viewBox="0 0 24 24"
                >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
                </svg>)
           }
           

     }
  
  };

  const displayMsg = messages.map((message) => {
    return (
      <section key={message._id} className={styles.msgBox}>
        <div className={styles.msgDiv}>
          <div className={styles.left}>{message.content}</div>
          <div className={styles.right}>{message.wallet}</div>
          <div onClick={() => deleteMsg(message._id)} className={styles.delete}>
            {currentAction}
          </div>
        </div>
      </section>
    );
  });

  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.subContainer}>
        <p className={styles.head}>All data is arranged here.</p>
        {displayMsg}
      </section>
    </section>
  );
};

export default GetFiles;
