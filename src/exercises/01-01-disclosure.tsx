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
    return <>{/* Do your magic here */}</>
}

export default function DisclosurePage() {
    return (
        <ExcersiseLayout.Description title="Disclosure">
            <p>Create a disclosure component with what you just learned.</p>
        </ExcersiseLayout.Description>
    )
}
