import Button from "../../../components/atoms/button";
import KakaoImg from '../../../public/assets/images/btn-kakao.png';

const Login = () => {
    const onLogin = () => {
        window?.Kakao?.Auth?.authorize({
            redirectUri: '/oauth'
        });
    }

    return (
        <main>
            <Button img={KakaoImg} onButton={onLogin}/>
        </main>
    )
}
export default Login;
