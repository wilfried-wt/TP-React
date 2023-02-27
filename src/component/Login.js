import React from "react";
import '../style/log.css'
import produit from "../asset/prd.png";



export default function Login() {

    return(
        <div>
            <form  action="action_page.php" method="post">
                <div class="imgcontainer">
                    <img src={produit} alt="logo" class="avatar"/>
                </div>
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter username" name="uname" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter password" name="psw" required/>

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label>
                    <div class="container">
                        <button type="button" class="cancelbtn">Cancel</button>
                        <a href="#" class="psw">Forgot password?</a>
                    </div>
                </div>
            </form>
        </div>
    )
}