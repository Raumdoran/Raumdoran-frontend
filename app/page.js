import { WARP } from './warp'
import { DEV } from './dev'
import Link from 'next/link'

export default function Home(){
  let server_region = ['Daejin University', 'Duitan University']
  let server_status = ['OK', 'OK']
  return (
    <div style={{"marginLeft":"15px"}}>
      <title>RaumDoran Warp Page</title>
      <h1>This Page is Route Page</h1>
      <p>Please Wait routing your language</p>
      <p>if Automatic Routing does not working click this button</p>
      <WARP></WARP>
      <p>Connected Server Region</p>
      <div>{server_region[0]} - {server_status[0]}</div>
      <div>{server_region[1]} - {server_status[1]}</div>
      <h3>Dev Teams</h3>
      <DEV></DEV>
      <h3>Manual Warp</h3>
      <p>Click to warp</p>
      <Link href={"/kr"}>
        <p style={{"color":"red"}}>KR Server</p>
      </Link>
      <Link href={"/vt"}>
        <p style={{"color":"blue"}}>VT Server</p>
      </Link>
    </div>
  )
}