import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "./api/users";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);

    const navigate = useNavigate();

    console.log(`token: ${token}`);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);

        try {
            const response = await loginUser(username, password);

            localStorage.setItem("authToken", response.token);
      setToken(response.token);
      console.log(response.token);
    
    setUsername("");
    setPassword("");

        } catch (error) {
            console.error(error);
        }
  navigate("/Homepage");

    };
}

export default Login;