import { FunctionComponent } from 'react'
import Button from '../components/button'
import * as PageLayout from '../components/page-layout'

const OrderForm: FunctionComponent = () => {
    return (
        <PageLayout.Root>
            <PageLayout.Headline>Order your coffee</PageLayout.Headline>
            <PageLayout.Kicker>
                Fill out the form to get your coffee freshly roasted delivered
                to your door. You're going to love it!
            </PageLayout.Kicker>

            <PageLayout.Body>
                <form className="flex flex-col space-y-4">
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="address" />
                    </label>
                    <label>
                        Postal code:
                        <input type="text" name="postal-code" />
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" />
                    </label>
                    <label>
                        Country:
                        <input type="text" name="country" />
                    </label>
                    <label>
                        Your roast:
                        <select name="roast">
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
                        <input type="number" name="amount" />
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
