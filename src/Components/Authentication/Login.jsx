import React,{useState} from 'react' 
import styles from '../../my-style.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login=() => { 
    const navigate = useNavigate();
	const [username,setUsername]=useState(""); 
	const [passwd,setPasswd]=useState("");
    //var [info,setPosts]=useState(""); 
    const addPosts = async (info) => {
        await fetch(`${process.env.REACT_APP_node_server}/backend/authentication/login`, {
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
                    console.log(data.data);
                    toast.success(data.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });
                    navigate("/Home", {state: data.data});
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
    const Redirect = () => {
        navigate('/Forgot_password');
    }
    const showPassword = () => {
        var x = document.getElementById('lock');
        var y = document.getElementById('passwd');
        if(y.type === "password"){
            x.className = "fa fa-unlock";
            y.type = "text";
        } else{
            y.type = "password";
            x.className = "fa fa-lock";
        }
    }
	return(
	<div>
		<form action="" onSubmit={submitThis}> 
            <div className={styles.loginbox}>
                <h1>Login</h1>
                <div className={styles.textbox}> 
                    <i className={"fa fa-user"} aria-hidden="true" title='Enter Username'></i>
                    <input type="text" name="username" id="username" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/> 
                </div> 

                <div className={styles.textbox}>
                    <i className={"fa fa-lock"} aria-hidden="true" onClick={showPassword} title='View Password' id='lock'></i>
                    <input type="password" name="passwd" id="passwd" value={passwd} placeholder="Password" onChange={(e)=>setPasswd(e.target.value)}/> 
                </div>  
                <button type="submit" className={styles.btn} title='Click here to login'>Login</button>
                <ToastContainer />
                <a href='#' onClick={Redirect}>Forgot Password?</a>
            </div>
		</form>
	</div>
)} 

export default Login