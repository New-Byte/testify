import React from "react";
import styles from '../../../my-style.module.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const changeLanguage = (lang) => {
    let language;
    let d = document.getElementById(lang).innerHTML;
    language = d;
    /*document.getElementById(lang).innerHTML = document.getElementById('selected1').innerHTML;
    document.getElementById(lang).id = document.getElementById('selected1').name*/
    document.getElementById('selected1').innerHTML = language;
    document.getElementById('selected1').name = lang;
  }

  const logout = async () => {
  axios.get(`${process.env.REACT_APP_node_server}/backend/authentication/logout`, { withCredentials: true })
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    if(response.status){
      toast.success(response.data.msg, {
        position: toast.POSITION.TOP_CENTER
      });
      navigate("/");
    }
  }).catch(
    (error) => {
      console.log(error);
      toast.error(error.error, {
        position: toast.POSITION.TOP_CENTER
    });
  }
  );
  }
  const Tab = (props) => {
    return <li id={props.tab} className={styles.opt} onClick={() => changeTabs(props.tab)}><a>{props.tab}</a></li>
  }
  const changeTabs = (tab) => {
    console.log('Navigatting to ' + tab);
    let tabs = ['Home', 'Users', 'Settings', 'Students', 'Exams', 'Classes'];
    for(let i = 0; i < 6; i++){
      if(tabs[i]!=tab){
        console.log(tabs[i]);
        try{
          document.getElementById(tabs[i]).className = `${styles.opt}`;

        } catch(error){
          console.log('IgnoredError: ' + error);
        }
      }
    }
    document.getElementById(tab).className = `${styles.active}`;
    //active.name = 'inactive';
    //active.className = 'opt';

  }
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.header_dev}>
                <a href="https://instagram.com/_prasad_joshi_/"><i className={"fa fa-instagram"} aria-hidden="true" title='Instagram'></i></a>
                <a href="https://wa.me/919730667159?text=I'm%20interested%20in%20your%20portfolio%20and%20would%20like%20to%20offer%20you%20a%20job."><i className={"fa fa-whatsapp"} aria-hidden="true" title='WhatsApp'></i></a>
                <a href="https://www.linkedin.com/in/prasad-joshi-9b1a821a5"><i className={"fa fa-linkedin"} aria-hidden="true" title='LikedIn'></i></a>
                <a href="https://telegram.me/CSE_OO7"><i className={"fa fa-telegram"} aria-hidden="true" title='Telegram'></i></a>
                <a href="https://facebook.com/#"><i className={"fa fa-facebook"} aria-hidden="true" title='Facebook'></i></a>
                <a href=""></a><a className={styles.linkicon}><i className={"fa fa-phone"} aria-hidden="true" title='Contact Developer'></i></a>

                <a href="https://new-byte.github.io" className={styles.link}>Contact Developer </a>
                <div className={styles.dropdown}>
                  <div className={styles.dropbtn} id='selected1' name='english'>English</div>
                  <div className={styles.dropdowncontent}>
                  <b id='english' onClick={() => {changeLanguage('english')}}>English</b>
                    <b id='hindi' onClick={() => {changeLanguage('hindi')}}>हिंदी</b>
                    <b id='marathi' onClick={() => {changeLanguage('marathi')}}>मराठी</b>
                    <b id='tamil' onClick={() => {changeLanguage('tamil')}}>தமிழ்</b>
                  </div>
                </div>
                <b className={styles.language}><i className={"fa fa-language"} aria-hidden="true" title='Choose Language'></i></b>
                <p>Blog</p>
                <p>FAQs</p>
            </div>

            <div className={styles.header_intro}>
              <div>
                <img src="/logo231.png" width='300px'/>
                <p className={styles.logout} onClick={logout}><i className={"fa fa-power-off"} aria-hidden="true" title='Logout'></i>Logout</p>
              </div>
              <div className={styles.header_tabs}>
                <ul>
                  <li id='Home' className={styles.active} onClick={() => changeTabs('Home')}><a>Home</a></li>
                  {props.access.tabs.map((tab) => <Tab tab={tab} />)}
                </ul>
              </div>
            </div>
        </div>
    </div>
  );
};
  
export default Header;