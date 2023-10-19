import {useState} from "react";
import { AiFillGoogleCircle,  AiFillFacebook } from "react-icons/ai";
import "./loginform.css"

function LoginForm(){
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="app__loginform">
            <div className="login__cover">
                <h1>Login</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <div className="login-btn" onClick={popup}>Login</div>

                <p className="text">Or login using</p>

                <div className="alt-login">
                    <AiFillGoogleCircle size={40}/>
                    <AiFillFacebook size={40}/>
                </div>

                <div className={popupStyle}>
                    <h3>Login Failed</h3>
                    <p>Username or password incorrect</p>
                </div>
            </div>
        </div>
    )
}
export default LoginForm