import React,{useState} from 'react' 
import styles from '../../my-style.module.css';
import { useNavigate } from "react-router-dom";
  
const SuccessScreen = () => {
  const navigate = useNavigate();
  const handleChange = (event) => {
    navigate('/');
  }
  return (
    <div className={styles.bgnd}>
      <div className={styles.loginbox}>
        <div className={styles.textbox}> 
           <p>Reset password link has been sent to your email registered with your username. Please click on the link and reset your password. Link is set to expire within few minutes.</p>
        </div> 
        <button type="submit" className={styles.btn} onClick={handleChange}>Go back to the Login Page</button>
      </div>
    </div>
  );
};
  
export default SuccessScreen;