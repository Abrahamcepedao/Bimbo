//next
import Image from "next/image"

const Header = () => {
    return (
        <div className="bg-white_primary flex_b_center p-4">
            <div>
                <Image src="/img/uniapac.png" width={200} height={200} alt="Uniapac" />
            </div>
            <div>
                <Image src="/img/coparmex.png" width={200} height={200} alt="Uniapac" />
            </div>
        </div>
    )
}

export default Header