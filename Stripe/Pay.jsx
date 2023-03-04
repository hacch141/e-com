import StripeCheckout from "react-stripe-checkout"
import { useState, useEffect, useHistory } from "react"
import axios from "axios"

const KEY = "pk_test_51MIh8vSIuLKp8sNdRDwPkITe8KkkzO2rhEaOegR0uZuSUCgl9Oq5oYVyAcxfi0RaUnSJKgMQQespptSkyO4Aqc2I00auGcfcCh    "

const Pay = () => {

    const[stripeToken, setStripeToken] = useState(null)
    const history = useHistory()

    const onToken = (token) => {
        console.log(token)
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkput/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                )
                console.log(res.data)
                history.push("/success");
            } catch(err) {
                console.log(err);
            }
        }
        stripeToken && makeRequest
    }, [stripeToken, history])

    return(
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {stripeToken ? (<span>Processing. Please Wait...</span>) : (
            <StripeCheckout
                name="Buy Now"
                image="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80"
                billingAddress
                shippingAddress
                description="Your total is $50"
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    Pay Now
                </button>
            </StripeCheckout>
            )}
        </div>
    )
}