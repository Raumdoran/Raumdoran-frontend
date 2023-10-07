import { dev_name, dev_github } from "./dev_data"
export default function DEV(){
    return (
        <div>
            {dev_name} - {dev_github}
        </div>
    )
}

export { DEV }