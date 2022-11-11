import Image from "next/image"
import material5 from "../../../../assets/icon/WEB_MATERIAL-05.svg"
import slogan from "../../../../assets/images/Grocasa.png"

export default function Navbar () {
    
    return (
        <div className="navbar-container">
            <Image
                src={material5}
                alt="Back"
                height={26}
            />
            <Image
                src={slogan}
                alt="Slogan"
                height={45}
            />  
            
        </div>
    )
}