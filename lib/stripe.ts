import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY){
    throw new Error('Missing STRIPE_SECRET_KEY')  // Replace with your own secret key
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-11-20.acacia', // Use the latest version
})

export default stripe