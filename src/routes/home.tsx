import { FunctionComponent } from 'react'
import * as PageLayout from '../components/page-layout'

const Home: FunctionComponent = () => {
    return (
        <PageLayout.Root>
            <PageLayout.Headline>Welcome to the workshop</PageLayout.Headline>
            <PageLayout.Kicker>
                Great to have you here! We are going to learn a lot of cool
                stuff today. Let's get our hands dirty! To see what we're going
                to build, take a look at{' '}
                <PageLayout.Anchor
                    href="https://coffeequiz.elmarcodes.workers.dev/"
                    target="_blank"
                >
                    the raw version of the app
                </PageLayout.Anchor>
                .
            </PageLayout.Kicker>
        </PageLayout.Root>
    )
}

export default Home
