import z from 'zod'

const answerSchema = z.object({
    id: z.string().regex(/^answer:[a-d]$/, 'Invalid answer id'),
    answer: z.string(),
})

export type Answer = z.infer<typeof answerSchema>

const questionSchema = z.object({
    id: z.string().regex(/^question:[1-5]$/, 'Invalid question id'),
    question: z.string(),
    answers: z.array(answerSchema),
})

export type Question = z.infer<typeof questionSchema>

export const answersRequestSchema = z.record(
    z.string().regex(/^question:[1-5]$/),
    z.string().regex(/^answer:[a-d]$/)
)

export type AnswersRequest = z.infer<typeof answersRequestSchema>

export const answersResponseSchema = z.object({
    id: z.string(),
    description: z.string(),
})

const questionsResponseSchema = z.array(questionSchema)

export const questionsQueryKey = ['questions']

export const getQuestions = async () => {
    const req = await fetch(`${import.meta.env.VITE_API_URL}/questions`)

    return questionsResponseSchema.parse(await req.json())
}

export const calculateResult = async (data: AnswersRequest) => {
    const req = await fetch(`${import.meta.env.VITE_API_URL}/answers`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return answersResponseSchema.parse(await req.json())
}

export const getResult = async (id: string) => {
    const req = await fetch(`${import.meta.env.VITE_API_URL}/results/${id}`)

    return answersResponseSchema.parse(await req.json())
}
