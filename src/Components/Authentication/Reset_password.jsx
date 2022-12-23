import React,{useState} from 'react' 
import styles from '../../my-style.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
	const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [password2,setPassword2]=useState("");
    const location = window.location.href;
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userId");
    const token = queryParams.get("token");
    const viewPasswd = () => {
        var x = document.getElementById("password");
        var y = document.getElementById("password2");
        if (x.type === "password" && y.type === "password") {
            x.type = "text";
            y.type = "text";
        } else {
            x.type = "password";
            y.type = "password";
        }
    }
    const addPosts = async (info) => {
        await fetch(`${process.env.REACT_APP_node_server}/backend/password_reset/${userId}/${token}`, {
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
        var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var upper = 0;
        var nums = '0123456789';
        var num = 0;
        var symbols = '!@#$%^&*,=:;?<>_./-+~`(){}[]|';
        var sym = 0;
        if(password.length == 0 || password2.length == 0){
            toast.error("Password should not be empty", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if(password != password2){
            toast.error("Password do no match", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if(password.length < 8){
            toast.error("Password must be at least 8 characters long", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else{
            for(let i = 0; i < password.length; i++){
                if(uppers.includes(password[i])){
                    upper++;
                } else if (nums.includes(password[i])){
                    num++;
                }else if (symbols.includes(password[i])) {
                    sym++
                }
            }
            if(!(upper && num && sym)){
                toast.error("Password must cantain at least one Upper case letter, at least one number and at least one symbole", {
                    position: toast.POSITION.TOP_CENTER
                });
            } else {
                const info = {
                    username: username,
                    new_password: password
                };
                addPosts(info);
            }
        }
	}
    return(
        <div className={styles.bgnd}>
            <form action="" onSubmit={submitThis}> 
                <div className={styles.loginbox}>
                    <div className={styles.textbox}> 
                        <i className={"fa fa-user"} aria-hidden="true"></i>
                        <input type="text" name="username" id="username" value={username} placeholder="Username" required="true" onChange={(e)=>setUsername(e.target.value)}/> 
                    </div> 
                    <div className={styles.textbox}> 
                        <i className={"fa fa-lock"} aria-hidden="true"></i>
                        <input type="password" name="password" id="password" value={password} placeholder="Password" required="true" onChange={(e)=>setPassword(e.target.value)}/> 
                    </div> 
                    
                    <p><input type="checkbox" onClick={viewPasswd} />Show Password</p>
                    <div className={styles.textbox}> 
                        <i className={"fa fa-lock"} aria-hidden="true"></i>
                        <input type="password" name="password2" id="password2" value={password2} placeholder="Confirm Password" required="true" onChange={(e)=>setPassword2(e.target.value)}/> 
                    </div> 
      
                    <button type="submit" className={styles.btn}>Reset Password</button>
                    <br/>
                    <div className={styles.policy}>
                        <h4>Password Policy:</h4>
                        <br/>
                        <ul>
                            <li>Password must be <b>8 characters</b> long.</li>
                            <li>Password must cantain at least one <b>Upper Case Letter</b>, at least one <b>Number</b> and at least one <b>Spacial Character</b>.</li>
                            <li>Both the passwords must match.</li>
                        </ul>
                    </div>
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
}

export default ResetPassword