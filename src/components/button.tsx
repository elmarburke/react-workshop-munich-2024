import clsx from 'clsx'
import { ButtonHTMLAttributes, FunctionComponent } from 'react'

const Button: FunctionComponent<
    ButtonHTMLAttributes<HTMLButtonElement> & {
        /**
         * variant of the button
         * @default "primary"
         */
        variant?: 'primary' | 'secondary'
    }
> = ({ className, children, variant = 'primary', ...props }) => {
    return (
        <button
            className={clsx(
                {
                    'rounded-lg border border-indigo-700 bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-indigo-500 hover:bg-indigo-500 focus:ring focus:ring-indigo-200 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-300':
                        variant === 'primary',
                    'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-100':
                        variant === 'secondary',
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
