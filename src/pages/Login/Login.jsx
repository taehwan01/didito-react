import GoogleAuthLogin from "./GoogleAuthLogin";
import KakaoOauthLogin from "./KakaoAuthLogin";

import './Login.scss';

const Login = () => {
    return <div>
        <h1>login</h1>
        <div className="oauth-login">
            <GoogleAuthLogin/>
            <KakaoOauthLogin/>
        </div>
    </div>
};

export default Login;