//loader spinner
import { ThreeDots } from 'react-loader-spinner'

export default function Loader() {

    return (
        <div className='m-auto p-4 flex justify-center items-center'>
            <ThreeDots color="#4fd078" height={100} width={100} />
        </div>
    )
}