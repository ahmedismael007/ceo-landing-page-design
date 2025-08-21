"use client";
import React, { useState } from 'react'


const plans = [
    { range: "1 - 15 Employee", price: 22, total: 330 },
    { range: "1 - 40 Employee", price: 19, total: 760 },
    { range: "1 - 70 Employee", price: 16, total: 1120 },
    { range: "1 - 120 Employee", price: 14, total: 1680 },
    { range: "1 - 220 Employee", price: 12, total: 2640 },
    { range: "1 - 500 Employee", price: 9, total: 4500 },
    { range: "1 - 1000 Employee", price: 7, total: 7000 },
    { range: "1 - 2000 Employee", price: 5, total: 10000 },
    { range: "1 - 100,000 Employee", price: 3, total: 300000 },
];

const Pricing = () => {
    const [yearly, setYearly] = useState(false);

    const formatPrice = (plan: any) => {
        if (!yearly) {
            return `${plan.total}$ / Monthly`;
        }
        const yearlyPrice = plan.total * 12 * 0.9;
        return `${yearlyPrice.toLocaleString()}$ / Yearly`;
    };


    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold ">Pricing Plans</h2>
                <p className="text-gray-400 mt-2">
                    Choose the package that fits your number of employees. Get a{" "}
                    <span className="font-semibold text-primary">10% discount</span> on yearly subscriptions.
                </p>
            </div>

            {/* Toggle Monthly / Yearly */}
            <div className="flex justify-center mb-10">
                <div className="bg-secondary shadow rounded-full p-1 flex gap-2">
                    <button
                        onClick={() => setYearly(false)}
                        className={`px-6 py-2 rounded-full cursor-pointer transition ${!yearly ? "bg-gradient-to-r from-[#997A00] to-[#FFCC00] text-secondary" : "text-gray-400"
                            }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setYearly(true)}
                        className={`px-6 py-2 rounded-full cursor-pointer  transition ${yearly ? "bg-gradient-to-r from-[#997A00] to-[#FFCC00] text-secondary" : "text-gray-400"
                            }`}
                    >
                        Yearly (10% Discount)
                    </button>
                </div>
            </div>

            {/* Pricing Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="bg-secondary shadow rounded-2xl p-6 flex flex-col hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-white">
                            {plan.range}
                        </h3>
                        <p className="text-3xl font-bold mb-1 text-primary">
                            {formatPrice(plan)}
                        </p>
                        <p className="text-gray-400 text-sm mb-6">
                            {plan.price}$ per employee
                        </p>
                        <button className="mt-auto bg-gradient-to-r from-[#997A00] to-[#FFCC00] text-secondary py-2 rounded-xl hover:opacity-90 transition cursor-pointer ">
                            Subscribe Now
                        </button>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default Pricing