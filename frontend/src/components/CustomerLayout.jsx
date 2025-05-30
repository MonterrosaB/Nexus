import { Outlet } from 'react-router'

import Nav from './Nav'
import Footer from './Footer'

export default function CustomerLayout() {
    return (
        <div>
            {/* NavbarCliente, FooterCliente, etc */}
            <Nav />
            <main className="min-h-dvw">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
