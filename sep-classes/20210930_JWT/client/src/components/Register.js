import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useStae("");

  const register = () => {
    const data = new FormData();
    // console.log(typeof(FormData)); it is keys, values, delete, FormData- I want to send data between the frontend and backend you will you it all the time
    // append will grub object dataForm and keep it...
    data.append("username", username);
    data.append("password", password);
    data.append("confPassword", confPassword);
    data.append("avatar", avatar);
    // later
    // 
    // 
    axios.post("http://localhost:5000/register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res)=>console.log(res));
    };
  
    // set the type for content tyoe always when ypu are handling files

  };

  const uploadHandle = (e) => {
    setAvatar(e.target.files[0]);
  };

  return <div className="App">
    <div className="reg">
    <h4>Register</h4>
    <input type="text" value="" name="username" onChange={} placeholder=""/>
    <input type="password" value="" name="password" onChange={} placeholder=""/>
    <input type="password" value={confPassword} name="ConfPassword" onChange={} placeholder=""/>
    <input type="file" value="" name="avatar" onChange={} placeholder=""/>
    <button onClick={register}>Register</button>
    </div>
  </div>;
};

export default Register;
// state is a normal variable, whetever is getting new value it will notify to render that value. And will restart react lifecycle- will update a place/ render wherever that value was mentioned.You don;t declare a value in react- tabu, you declare it within the state.
// mounting- will start to draw from webpage and draw that input box and html jsx into html component
// updation
// component will receive props or PaymentRequestUpdateEvent, than go to component update
// article about the lifecycle
// hint: always check what you are having in the return- that will tell you where and what will be returned

// form
