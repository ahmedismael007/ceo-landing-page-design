import Image from 'next/image'
import React from 'react'

const Partners = () => {
    const partners = [
        '1password',
        'adobe',
        'airtable',
        'Alrajhi-Bank',
        'apple',
        'bootstrap5',
        'css3',
        'digital2',
        'Digital3',
        'dnet',
        'figma',
        'google',
        'html5',
        'hyperpay',
        'jquery',
        'laravel',
        'make',
        'mysql',
        'nafath',
        'namecheap',
        'national',
        'php',
        'sahara-net-seeklogo',
        'saudi1',
        'Saudi3',
        'voucherify',
    ]
    return (
        <section className='mb-20'>
            <h3 className='text-center text-5xl text-primary mb-20'>OUR SUCCESS PARTNERS</h3>
            <div className="relative max-w-full overflow-hidden">
                {/* Left gradient fade */}
                <div className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-black to-transparent z-10"></div>
                {/* Right gradient fade */}
                <div className="absolute top-0 right-0 h-full w-[20%] bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Scrolling wrapper */}
                <div className="flex w-max animate-scroll gap-40">
                    {partners.concat(partners).map((p, index) => (
                        <Image
                            key={index}
                            src={`/images/partners-orange/${p}.svg`}
                            alt="partner"
                            width={150}
                            height={150}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Partners