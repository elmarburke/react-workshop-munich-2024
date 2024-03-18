import clsx from 'clsx'
import {
    AnchorHTMLAttributes,
    FunctionComponent,
    PropsWithChildren,
} from 'react'

export const Root: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <div className="space-y-4 text-center">{children}</div>
)

export const Body: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <div className="space-y-4 textle">{children}</div>
)

export const Headline: FunctionComponent<PropsWithChildren> = ({
    children,
}) => (
    <h2 className="mt-6 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        {children}
    </h2>
)

export const Kicker: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
        {children}
    </p>
)

// all props from a tag
export const Anchor: FunctionComponent<
    PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ className, ...props }) => (
    <a
        className={clsx('text-indigo-600 hover:underline', className)}
        {...props}
    />
)
