import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

// SVGs
import material5 from "../../../../public/icon/WEB_MATERIAL-05.svg"

// Images
import slogan from "../../../../public/images/Grocasa.png"

export default function Navbar () {
    const router = useRouter()
    console.log(router.pathname);
    return (
        <div className="navbar-container">
            <div className="navbar-container-back">
                {
                    router.pathname === '/'
                    ?   <div></div>
                    :   <Link href={`/`} >
                            <Image
                                src={material5}
                                alt="Back"
                                layout="responsive"
                            />
                        </Link>
                }
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