import { FunctionComponent, ReactNode } from 'react'

export const Description: FunctionComponent<{
    title: ReactNode
    children: ReactNode
}> = ({ title, children }) => (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-gray-700">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
        </h3>

        {children}
    </div>
)
