import Link from "next/link"
import Image from "next/image"

export default function kr(){
    return (
        <div>
            <title>RaunDoran - KR</title>
            <div className="home">
                <div className="logo"></div>
                <div className="unit"></div>
            </div>
            <div className="menu">
                <Link href={"/event"}>
                <p 
                className="space">공모전</p>
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
                <Link href={"/library"}>
                    <p className="space as">내 도서관</p>
                </Link>
            </div>
            <div className="banner">
                {/* image here */}
            </div>
            <p className="fonts ra">오직, 라움도란에서만</p>
            <div className="bookshelf">
                <div className="book">
                    <div className="cover">이미지임</div>
                    <div className="title">
                        라움도란 장편소설
                    </div>
                    <div className="author">
                        라움도란
                    </div>
                </div>
            </div>
            <div className="bookshelf top">
                <div className="book">
                    <div className="cover">이미지임</div>
                    <div className="title">
                        라움도란 장편소설
                    </div>
                    <div className="author">
                        라움도란
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer"></div>
                <div className="notice">
                    <p className="notice-text">주의! 본 사이트에 등록된 콘텐츠는 사이트 및 원 저작권자에게 권리가 있는 컨텐츠이며, 무단 복제, 전송, 수정, 배포는 법적 처벌을 받을 수 있습니다.</p>
                </div>
            </footer>
        </div>
    )
}