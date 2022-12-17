import React,{useState} from 'react' 
import styles from '../../my-style.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login=() => { 
	const [username,setUsername]=useState(""); 
	const [passwd,setPasswd]=useState("");
    //var [info,setPosts]=useState(""); 
    const addPosts = async (info) => {
        await fetch('http://localhost:5000/backend/authentication/login', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
             }
        }).then(
            (response) => response.json()
        ).then(
            (data) => {
                console.log(data);
                if(data.success){
                    console.log(data.msg);
                    toast.success(data.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });
                } else {
                    toast.error(data.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            }
         ).catch(
            (error) => {
                console.log(error);
            }
        );
    }
	const submitThis= (e)=>{ 
        e.preventDefault();
        const info = {
            username: username,
            user_password: passwd
        };
		addPosts(info);
	}
	return(
	<div>
		<form action="" onSubmit={submitThis}> 
            <div className={styles.loginbox}>
                <h1>Login</h1>
                <div className={styles.textbox}> 
                    <i className={"fa fa-user"} aria-hidden="true"></i>
                    <input type="text" name="username" id="username" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/> 
                </div> 

                <div className={styles.textbox}> 
                    <i className={"fa fa-lock"} aria-hidden="true"></i>
                    <input type="password" name="passwd" id="passwd" value={passwd} placeholder="Password" onChange={(e)=>setPasswd(e.target.value)}/> 
                </div>  
                <button type="submit" className={styles.btn}>Login</button>
                <ToastContainer />
                <a href='#'>Forgot Password?</a>
            </div>
		</form>
	</div>
)} 

export default Login