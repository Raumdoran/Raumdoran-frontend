import Link from "next/link"
import {VscAccount, VscSearch, VscWand, VscRadioTower} from "react-icons/vsc";
import logo from '@/public/logo.png'
import Image from "next/image"

export default function NAV(){
    let login = 0
    let islogin
    let login_icons = ['FaBeer', 'MdLogin']
    if(login == 0){
        console.log('로그인이 필요함')
        islogin = 0
    }else {
        console.log('아님')
        islogin = 1
    }
    return (
        <div>
            <div className="home">
                <div className="logo">
                    <Image src={logo} alt="logo" className="logo-img"/>
                </div>
                <div className="unit">
                    <Link href={"/alert"}>
                        <VscRadioTower size={'23px'} className="unit-icons"/>
                    </Link>
                    <Link href={"/write"}>
                        <VscWand size={'23px'} className="unit-icons"/>
                    </Link>
                    <Link href={"/search"}>
                        <VscSearch size={'23px'} className="unit-icons"/>
                    </Link>
                    <Link href={"/kr/account"}>
                        <VscAccount size={'23px'} className="unit-icons"/>
                    </Link>
                </div>
            </div>
            <div className="menu">
                <Link href={"/session"}>
                <p 
                className="space">세션 찾기</p>
                </Link>
                <Link href={"/openlib"}>
                    <p className="space">자유</p>
                </Link>
                <Link href={"/ranking"}>
                    <p className="space">랭킹</p>
                </Link>
                <Link href={"/webtoon"}>
                    <p className="space">웹 만화</p>
                </Link>
                <Link href={"/kr/library"}>
                    <p className="space as">내 도서관</p>
                </Link>
            </div>
        </div>
    )
}

export { NAV }