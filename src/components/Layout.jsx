import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div stye={{position :'relative'}}>
            <Header />
            {children}
            <div style={{position :'absolute' , bottom:'0' , width:'100%'}}>
            <Footer />
            </div>
        </div>
    )
}

export default Layout
