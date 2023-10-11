export default function Login(){
    return (
        <div className="account-h">
            <title>Raumdoran - Login</title>
            <div className="account-app">
                <div className="account-title">RaumDoran</div>
                <form>
                    <input className="acc-email" type="email" placeholder="이메일을 입력해주세요!"></input>
                    <input className="acc-password" type="password" placeholder="비밀번호를 입력해주세요"></input>
                    <button type="submit">로그인</button>
                </form>
            </div>
        </div>
    )
}