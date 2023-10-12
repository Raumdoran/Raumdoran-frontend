import nios from '@/public/test/books/da12.png'
import Link from 'next/link'
import Image from 'next/image'
import { NAV } from '@/app/kr/nav'
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

export default function Lib(){
    let data = ['raumdoran', 'ramum', 'rraid', 'riad', 'raum', 'raum', 'raum', 'raum', 'raum', 'raum', 'raum']
    let unique = ['3395131d-a34f-4281-a233-bf497dc4df3f', '1ad0ea41-7e82-464a-b8a9-cfc736f64fa2', 'ade1da70-6dde-43ea-a2b6-ab92b4e48c26', 'a3f05e5b-2d23-487d-968a-6dcfa0854839', '4e6c2bdb-6639-4d6f-9f3e-fbabaf26e37f', '14ee63ed-0b8c-4873-a08b-11ab1bfcc474', 'ab84318b-4b68-4035-a68d-0c2d11b2b5f3', 'a698a10d-b1a4-4853-a222-b95e936a533d', '778c61f6-0b06-439b-92b6-db0ed0c2c141', '1fba8cf0-464f-494b-a187-3c87adb2aaa8', 'd4373534-0bbb-4637-894e-e8319eb3ef1e', 'bed93d68-d842-4bd1-8f2b-c7dc7993e4e0', '0c1344c3-6083-44ef-b19e-f1dff0657626', 'f54487f6-7dac-4b62-b38a-a33b8541b333', '299f954d-dd46-4c58-91e0-24fc7704cb14', '56e33bcc-a25a-4643-877b-6bd34a0ac743', '37289a7b-c2ad-451d-a039-65176d0ec46f', 'b9bbb13b-a3c1-4d27-93b5-28e4358b7c05', 'f1ef6ce8-6c29-455a-9fbe-15d31f70cdc8', '9dd96756-c046-4bbe-a4ee-41f8570cafce']
    let title = ['라움도란 장편소설', '라움도란 단편소설', '라움도란 라이트', '라움도란 웹소설', '라움도란 웹툰', '라움도란 만화', '라움도란 시나리오', '라움도란 시나리오', '라움도란 시나리오', '라움도란 시나리오', '라움도란 시나리오']
    let desc = ['아름다운 이야기', '사랑스러운 이야기', '행복한 이야기', '슬픈 이야기', '아름다운 이야기', '사랑스러운 이야기', '행복한 이야기', '슬픈 이야기', '아름다운 이야기', '사랑스러운 이야기', '행복한 이야기']
    let image = [imoze1, imoze2, imoze3, imoze4, imoze5, imoze6, imoze7, imoze8, imoze9, imoze10, imoze11]
    return (
        <div>
            {/* mybook & like 사이트 통일 */}
            <NAV></NAV>
            <div className='changer'>

            </div>
            {
                data.map((v, i) => {
                    return (
                        <div>
                            <div className='book-io'>
                                <div className='book-info'>
                                    <div className='bookwarp'>
                                        <Image src={image[i]} className='book-cover'></Image>
                                        <div className='book-info-meta'>
                                            <Link href = {"/kr/library/" + unique[i]}>
                                                <div className='book-title'>
                                                    {title[i]}
                                                </div>
                                            </Link>
                                            <div className='book-desc'>
                                                {desc[i]}
                                            </div>
                                            <div className='book-author'>
                                                {data[i]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}