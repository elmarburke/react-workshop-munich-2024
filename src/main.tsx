import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ErrorPage from './error-page'
import Root from './routes/root'

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: lazy(() => import('./routes/home')),
            },
            {
                path: '/quiz',
                Component: lazy(() => import('./routes/quiz')),
            },
            {
                path: '/order',
                Component: lazy(() => import('./routes/order-form')),
            },
            {
                path: '/your-best-match/:matchId',
                Component: lazy(() => import('./routes/your-best-match')),
            },
            {
                path: '/exercises/disclosure',
                Component: lazy(() => import('./exercises/01-01-disclosure')),
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools
                initialIsOpen={false}
                buttonPosition="bottom-left"
            />
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
)
