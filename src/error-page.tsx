import { FunctionComponent } from 'react'
import { useRouteError } from 'react-router-dom'
import AppLayout from './components/app-layout'

const ErrorPage: FunctionComponent = () => {
    const error = useRouteError()

    console.error(error)

    return (
        <AppLayout>
            <ErrorMessages error={error} />
        </AppLayout>
    )
}

export default ErrorPage

const ErrorMessages: FunctionComponent<{ error: unknown }> = ({ error }) => {
    if (
        error &&
        typeof error === 'object' &&
        'status' in error &&
        error.status === 404
    )
        return <h2>Not Found</h2>
    if (error instanceof Error) return <h2>{error.message}</h2>

    return <h2>Something went wrong unexpectedly</h2>
}
