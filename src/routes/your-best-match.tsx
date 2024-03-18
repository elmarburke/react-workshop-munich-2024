import { useSuspenseQuery } from '@tanstack/react-query'
import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { getResult } from '../adapter'
import * as PageLayout from '../components/page-layout'

const Result: FunctionComponent = () => {
    const { matchId } = useParams()

    if (!matchId) {
        throw new Error('No match id provided')
    }

    const query = useSuspenseQuery({
        queryKey: ['result', matchId],
        queryFn: () => getResult(matchId),
    })

    return (
        <PageLayout.Root>
            <PageLayout.Headline>Your best coffee is:</PageLayout.Headline>
            <PageLayout.Kicker>{query.data.description}</PageLayout.Kicker>
        </PageLayout.Root>
    )
}

export default Result
