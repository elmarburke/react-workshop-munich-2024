import { FormEventHandler, FunctionComponent } from 'react'
import Button from '../components/button'
import * as PageLayout from '../components/page-layout'

const OrderForm: FunctionComponent = () => {
    const sendOrderForm: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const name = formData.get('name')
        const email = formData.get('email')
        const address = formData.get('address')
        const postalCode = formData.get('postal-code')
        const city = formData.get('city')
        const country = formData.get('country')
        const roast = formData.get('roast')
        const amount = formData.get('amount')
    }

    return (
        <PageLayout.Root>
            <PageLayout.Headline>Order your coffee</PageLayout.Headline>
            <PageLayout.Kicker>
                Fill out the form to get your coffee freshly roasted delivered
                to your door. You're going to love it!
            </PageLayout.Kicker>

            <PageLayout.Body>
                <form
                    className="flex flex-col space-y-4"
                    onSubmit={sendOrderForm}
                >
                    <div>
                        <label htmlFor={'name-input'}>Name:</label>
                        <input
                            id="name-input"
                            type="text"
                            name="name"
                            required
                            className="invalid:border-red-500 invalid:border-2 border border-gray-200 rounded"
                        />
                    </div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            required
                            className="invalid:border-red-500 invalid:border-2 border border-gray-200 rounded"
                        />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="address" required />
                    </label>
                    <label>
                        Postal code:
                        <input type="text" name="postal-code" required />
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" required />
                    </label>
                    <label>
                        Country:
                        <input type="text" name="country" required />
                    </label>
                    <label>
                        Your roast:
                        <select name="roast" required>
                            <option value="light">Light and fruity</option>
                            <option value="medium-dark">
                                Medium to dark with chocolate notes
                            </option>
                            <option value="medium">
                                Medium with nutty and caramel notes
                            </option>
                        </select>
                    </label>
                    <label>
                        Amount:
                        <input
                            type="number"
                            name="amount"
                            required
                            min={1}
                            max={10}
                        />
                    </label>

                    <div className="flex space-x-4 justify-center">
                        <Button type="submit">Order</Button>
                    </div>
                </form>
            </PageLayout.Body>
        </PageLayout.Root>
    )
}

export default OrderForm
