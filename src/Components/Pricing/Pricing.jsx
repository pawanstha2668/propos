import React from 'react'
import './Pricing.css'
import Pricingcard from './Pricingcard';
const Pricing = () => {
    const plans = [
        {
            title: "Free",
            price: "Free",
            duration: "/2 Days",
            features: [
                { text: "Lifetime Free Update", available: true },
                { text: "6 months technical support", available: true },
                { text: "WhatsApp & Skype support", available: true },
                { text: "Live support", available: true },
                { text: "Free installation", available: false },
                { text: "Free installation Cpanel", available: false },
                { text: "Advance Remote Support", available: false },
                { text: "Multi-branch Allowed", available: false },
                { text: "Addon Domain Available?", available: false },
                { text: "Subdomain Available?", available: false },
            ],
        },
        {
            title: "Standard",
            price: "₹34,999",
            duration: "/365 Days",
            features: [
                { text: "Lifetime Free Update", available: true },
                { text: "6 months technical support", available: true },
                { text: "WhatsApp & Skype support", available: true },
                { text: "Live support", available: true },
                { text: "Free installation", available: true },
                { text: "Free installation Cpanel", available: true },
                { text: "Advance Remote Support", available: true },
                { text: "Multi-branch Allowed", available: true },
                { text: "Addon Domain Available?", available: false },
                { text: "Subdomain Available?", available: false },
            ],
        },
        {
            title: "Premium",
            price: "₹50",
            duration: "/180 Days",
            features: [
                { text: "Lifetime Free Update", available: true },
                { text: "6 months technical support", available: true },
                { text: "WhatsApp & Skype support", available: true },
                { text: "Live support", available: true },
                { text: "Free installation", available: true },
                { text: "Free installation Cpanel", available: true },
                { text: "Advance Remote Support", available: true },
                { text: "Multi-branch Allowed", available: true },
                { text: "Addon Domain Available?", available: false },
                { text: "Subdomain Available?", available: false },
            ],
        },
    ];



    return (


        <section className='pricing'>
            <h2>Our Pricing Plan</h2>
            <p>We Offer flexible pricing plans to suit the diverse needs of our clients</p>

            <div className='pricing-grid'>
                {plans.map((plan, index)=>(
                    <Pricingcard key={index} plan={plan} />
                ))}
            </div>
        </section>
    )
}

export default Pricing
