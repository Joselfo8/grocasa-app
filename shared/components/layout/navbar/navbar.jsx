import Image from "next/image"
import material5 from "../../../../public/icon/WEB_MATERIAL-05.svg"
import slogan from "../../../../public/images/Grocasa.png"

export default function Navbar () {
    
    return (
        <div className="navbar-container">
            <div className="navbar-container-back">
                <Image
                    src={material5}
                    alt="Back"
                    layout="responsive"
                />
            </div>
            <div className="navbar-container-slogan">
                <div className="img">
                    <Image
                        src={slogan}
                        alt="Slogan"
                        layout="responsive"
                    />  
                </div>
            </div>
            
        </div>
    )
}