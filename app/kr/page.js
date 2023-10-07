import Image from "next/image"
import banners from '../../public/test/banner.png'
import { NAV } from './nav.js'

export default function kr(){
    return (
        <div>
            <title>RaunDoran - KR</title>
            <NAV></NAV>
            <div className="banner">
                <Image className="mbanner" src={ banners } alt="test banner">
                </Image>
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
                <div className="footer">

                </div>
                <div className="notice">
                    <p className="notice-text">주의! 본 사이트에 등록된 콘텐츠는 사이트 및 원 저작권자에게 권리가 있는 컨텐츠이며, 무단 복제, 전송, 수정, 배포는 법적 처벌을 받을 수 있습니다.</p>
                </div>
            </footer>
        </div>
    )
}