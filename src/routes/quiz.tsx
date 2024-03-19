import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { FunctionComponent } from 'react'
import { Navigate } from 'react-router-dom'
import {
    Question,
    calculateResult,
    getQuestions,
    questionsQueryKey,
} from '../adapter'
import Button from '../components/button'
import * as PageLayout from '../components/page-layout'

const Quiz: FunctionComponent = () => {
    const questionsQuery = useSuspenseQuery({
        queryKey: questionsQueryKey,
        queryFn: getQuestions,
    })

    const mutation = useMutation({
        mutationFn: calculateResult,
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const answers = Object.fromEntries(formData.entries())

        mutation.mutate(answers as { [key: string]: string })
    }

    if (mutation.isSuccess) {
        return <Navigate to={`/your-best-match/${mutation.data.id}`} />
    }

    return (
        <PageLayout.Root>
            <PageLayout.Headline>Coffee Quiz</PageLayout.Headline>
            <PageLayout.Kicker>
                Find your favorite coffee by answering a few questions.
            </PageLayout.Kicker>

            <PageLayout.Body>
                <form
                    className="space-y-4 max-w-md mx-auto leading-8"
                    onSubmit={handleSubmit}
                >
                    {questionsQuery.data?.map((question: Question) => (
                        <fieldset key={question.id}>
                            <legend className="font-semibold text-gray-700">
                                {question.question}
                            </legend>
                            {question.answers.map((answer) => (
                                <div key={answer.id} className="space-x-2">
                                    <input
                                        className="text-gray-700"
                                        type="radio"
                                        id={`${question.id}-${answer.answer}`}
                                        name={question.id}
                                        value={answer.id}
                                        required
                                    />
                                    <label
                                        htmlFor={`${question.id}-${answer.answer}`}
                                    >
                                        {answer.answer}
                                    </label>
                                </div>
                            ))}
                        </fieldset>
                    ))}

                    <div className="flex justify-center">
                        <Button type="submit" disabled={mutation.isPending}>
                            Find my best match
                        </Button>
                    </div>
                </form>
            </PageLayout.Body>
        </PageLayout.Root>
    )
}

export default Quiz
