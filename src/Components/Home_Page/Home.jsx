import React from "react";
import {useLocation} from 'react-router-dom';
import Header from '../Common/Header/Header';
  
const Home = () => {
  const location = useLocation();
  if(location.state.user_role === 'admin' || location.state.user_role === 'teacher' || location.state.user_role === 'student'){
    return (
      <div>
        <Header user_full_name={location.state.user_full_name} access={location.state.access}/>
      </div>
    );

  }
  return (
    <div>
      <h1>Welcome, {location.state.user_full_name}</h1>
      <img src="/bg.jpg" height="600px" alt="Web Under Construction" />
    </div>
  );
};
  
export default Home;