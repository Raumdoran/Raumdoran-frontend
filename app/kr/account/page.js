import logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Login(){
    return (
        <div>
            <title>RaunDoran Login</title>
            <form action="post">
                <div className="ls-head">
                    <div className="ls-lcb">
                        <Link href={"/kr"}>
                            <Image src={logo} alt="logo" className="ls-logo"/>        
                        </Link>   
                    </div>
                </div>
            </form>
        </div>
    )
}