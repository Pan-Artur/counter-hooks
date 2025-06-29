import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const LoginForm = () => {
    const { handleSubmit } = useContext(AuthContext);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="login" placeholder="username" required/>
            <input type="text" name="password" placeholder="password" required/>
            <button type="submit">Login</button>
        </form>
    );
}