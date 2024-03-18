import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import AppLayout from '../components/app-layout'

const Root: FunctionComponent = () => {
    return (
        <AppLayout>
            <Outlet />
        </AppLayout>
    )
}

export default Root
