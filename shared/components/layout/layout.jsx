import Head from "next/head"

// Components
import Navbar from "./navbar/navbar.jsx"

export default function Layout (props) {

    return (
        <div className="layout">
            <Head>
                <title>Grocasa</title>
                <meta name="description" content="Contenido para Grocasa"/>
            </Head>
            
            <div className="layout-container">
                <div className="layout-container__navbar">
                    <Navbar/>
                </div>

                <div className="layout-container__body">
                    {props.children}
                </div>                
            </div>     

        </div>
    )
}