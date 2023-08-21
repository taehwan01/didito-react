import config from '../../config';

const KakaoOauthLogin = () => {
    const REST_API_KEY = config.kakaoRestApiKey;
    const REDIRECT_URI = 'http://localhost:3000/auth';
    const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    const handleLogin =  () => {
        window.location.href = KAKAO_URL;
    }
    
    return (
        <>
            <button onClick={handleLogin}>KAKAO LOGIN</button>
        </>
    )
}

export default KakaoOauthLogin;