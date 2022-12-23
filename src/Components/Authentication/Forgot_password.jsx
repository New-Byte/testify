import React,{useState} from 'react' 
import styles from '../../my-style.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
	const [username,setUsername]=useState("");
    const addPosts = async (info) => {
        await fetch(`${process.env.REACT_APP_node_server}/backend/forgot_password`, {
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
                    navigate("/Forgot_Passwd_Success");
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
            resetpasslink: `${process.env.REACT_APP_react_server}/Reset_password`
        };
		addPosts(info);
	}
    return(
        <div className={styles.bgnd}>
            <form action="" onSubmit={submitThis}> 
                <div className={styles.loginbox}>
                    <div className={styles.textbox}> 
                        <i className={"fa fa-user"} aria-hidden="true"></i>
                        <input type="text" name="username" id="username" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/> 
                    </div> 
      
                    <button type="submit" className={styles.btn}>Reset Password</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword