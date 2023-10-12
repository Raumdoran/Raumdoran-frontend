import Image from "next/image"
import banners from '../../public/test/banner.png'
import { NAV } from './nav.js'

import imoze1 from '@/public/test/books/da1.png'
import imoze2 from '@/public/test/books/da2.png'
import imoze3 from '@/public/test/books/da3.png'
import imoze4 from '@/public/test/books/da4.png'
import imoze5 from '@/public/test/books/da5.png'
import imoze6 from '@/public/test/books/da6.png'
import imoze7 from '@/public/test/books/da7.png'
import imoze8 from '@/public/test/books/da8.png'
import imoze9 from '@/public/test/books/da9.png'
import imoze10 from '@/public/test/books/da10.png'
import imoze11 from '@/public/test/books/da11.png'

export default function kr(){
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    let data = ['raumdoran', 'ramum', 'rraid', 'riad', 'raum', 'raum', 'raum', 'raum', 'raum', 'raum', 'raum']
    let title = ['라움도란 장편소설', '라움도란 단편소설', '라움도란 라이트', '라움도란 웹소설', '라움도란 웹툰', '라움도란 만화', '라움도란 시나리오', '라움도란 시나리오', '라움도란 시나리오', '라움도란 시나리오', '라움도란 시나리오']
    let image = [imoze1, imoze2, imoze3, imoze4, imoze5, imoze6, imoze7, imoze8, imoze9, imoze10, imoze11]
    let shuffle_data = shuffle(image)
    console.log(shuffle_data)
    return (
        <div>
            <title>RaunDoran - KR</title>
            <div className="content" id="wrapper">
                <NAV></NAV>
                <div className="banner">
                    <Image className="mbanner" src={ banners } alt="test banner">
                    </Image>
                </div>
                <p className="fonts ra">오직, 라움도란에서만</p>
                <div className="bookshelf">
                {
                    data.map((v, i) => {
                        return (
                            <div>
                                <div className="book">
                                    <Image src={image[i]} className="cover"></Image>
                                    <div className="metadata">
                                        <div className="title">
                                                {title[i]}
                                        </div>
                                        <div className="author">
                                                라움도란
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )})
                }
                </div>
                <p className="fonts ra" style={{marginTop:"60px"}}>현재 진행중인 세션</p>
                <div className="bookshelf">
                {
                    data.map((v, i) => {
                        return (
                            <div>
                                <div className="book">
                                    <Image src={image[i]} className="cover"></Image>
                                    <div className="metadata">
                                        <div className="title">
                                                {title[i]}
                                        </div>
                                        <div className="author">
                                                {data[i]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )})
                }
                </div>
                <p className="fonts ra" style={{marginTop:"60px"}}>취향에 맞는 이야기</p>
                <div className="bookshelf">
                {
                    data.map((v, i) => {
                        return (
                            <div>
                                <div className="book">
                                    <Image src={image[i]} className="cover"></Image>
                                    <div className="metadata">
                                        <div className="title">
                                                {title[i]}
                                        </div>
                                        <div className="author">
                                                {data[i]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )})
                }
                </div>
            </div>
            <footer>
                <div className="notice">
                    <p className="notice-text">주의! 본 사이트에 등록된 콘텐츠는 사이트 및 원 저작권자에게 권리가 있는 컨텐츠이며, 무단 복제, 전송, 수정, 배포는 법적 처벌을 받을 수 있습니다.</p>
                </div>
            </footer>
        </div>
    )
}