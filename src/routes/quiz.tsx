import { useSuspenseQuery } from '@tanstack/react-query'
import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Question, getQuestions, questionsQueryKey } from '../adapter'
import Button from '../components/button'
import * as PageLayout from '../components/page-layout'

const Quiz: FunctionComponent = () => {
    const navigate = useNavigate()
    const questionsQuery = useSuspenseQuery({
        queryKey: questionsQueryKey,
        queryFn: getQuestions,
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // Implement your logic here

        // Endpoint: `${import.meta.env.VITE_API_URL}/answers`
        // HTTP Method: POST
        // Content-Type: application/json

        // once you have the answers, you can navigate to the result page
        // The result you get back has an id that you can use to navigate to the result page:
        // navigate(`/your-best-match/${result.id}`)
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
                        <Button type="submit">Find my best match</Button>
                    </div>
                </form>
            </PageLayout.Body>
        </PageLayout.Root>
    )
}

export default Quiz
