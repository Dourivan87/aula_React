import "./style.css"
import HeaderLinks from "./componentes/headerlinks/healderlinks"

function AppHeader() {

    return (
        <>
        <div className="app-header">
            <img src="logo.png"></img> 
            <div className="app-header-menu">
                <HeaderLinks href="#" textLink="Home" />
                <HeaderLinks href="#" textLink="About me" />
                <HeaderLinks href="#" textLink="Services" />
                <HeaderLinks href="#" textLink="Skills" />
                <HeaderLinks href="#" textLink="Portifólio" />
                <HeaderLinks href="#" textLink="Contact" />
            </div>
            <button>Hire me</button>
        </div>
          
        </>
    )
}

export default AppHeader 