import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from'jwt-decode';

const GoogleAuthLogin = () => {
    const handleSuccess = (credentialResponse) => {
        console.log("Login succeeded.");
        // 사용자 정보
        const user = jwtDecode(credentialResponse.credential);
        console.log(user.email, user.name);
    }

    const handlFailure = () => {
        console.log("Login failed.");
    }

    return (
        <>
            <GoogleLogin onSuccess={handleSuccess}
            onError={handlFailure}
            width={"100px"}
            useOneTap
            />
        </>
    )
};

export default GoogleAuthLogin;