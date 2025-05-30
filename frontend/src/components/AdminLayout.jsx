import { Outlet } from 'react-router'

import NavAdmin from './NavAdmin'


export default function AdminLayout() {
    return (
        <div>
            {/* NavbarCliente, FooterCliente, etc */}
            <NavAdmin />
            <main className="min-h-screen lg:ml-64">
                <Outlet />
            </main>
        </div>
    )
}
