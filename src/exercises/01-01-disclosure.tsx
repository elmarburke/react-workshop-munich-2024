import clsx from 'clsx'
import { FunctionComponent, ReactNode } from 'react'
import * as ExcersiseLayout from '../components/excercise-layout'

type DisclosureProps = {
    className?: string
    summary: ReactNode
    children: ReactNode
}

const Disclosure: FunctionComponent<DisclosureProps> = ({
    className,
    summary,
    children,
}) => {
    return (
        <details
            className={clsx(className, 'border border-gray-200 rounded-lg')}
        >
            <summary>{summary}</summary>
            <div className="bg-gray-50">{children}</div>
        </details>
    )
}

export default function DisclosurePage() {
    return (
        <ExcersiseLayout.Description title="Disclosure">
            <p>Create a disclosure component with what you just learned.</p>

            <Disclosure
                summary="Simplify React"
                className="bg-pink-500 open:bg-green-500"
            >
                This is the detailed description of how to simplify react
                applications!
            </Disclosure>

            <Disclosure summary="Nicht so eine gute Idee ist">
                Gruende
            </Disclosure>
        </ExcersiseLayout.Description>
    )
}
