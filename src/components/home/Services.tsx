import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../common/PrimaryButton';

const Services = () => {
    const services = [
        {
            id: 1, image: '/images/screenshots/4.png', title: 'Advantage From Our App', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore voluptates blanditiis repudiandae! Inventore aspernatur saepe harum autem dolorum eveniet id molestiae, quo perferendis atque incidunt aliquam accusantium dolore esse.',
        },
        {
            id: 2, image: '/images/screenshots/4.png', title: 'Advantage From Our App', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore voluptates blanditiis repudiandae! Inventore aspernatur saepe harum autem dolorum eveniet id molestiae, quo perferendis atque incidunt aliquam accusantium dolore esse.',
        },
        {
            id: 3, image: '/images/screenshots/4.png', title: 'Advantage From Our App', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore voluptates blanditiis repudiandae! Inventore aspernatur saepe harum autem dolorum eveniet id molestiae, quo perferendis atque incidunt aliquam accusantium dolore esse.',
        },
        {
            id: 4, image: '/images/screenshots/4.png', title: 'Advantage From Our App', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore voluptates blanditiis repudiandae! Inventore aspernatur saepe harum autem dolorum eveniet id molestiae, quo perferendis atque incidunt aliquam accusantium dolore esse.',
        },
    ];
    return (
        <section className='grid grid-cols-1 gap-40'>
            {
                services.map((service) => (<div key={service.id} className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-20 px-20">
                    {service.id % 2 !== 0 ? (
                        <>
                            <div className="flex flex-col justify-center gap-5">
                                <h3 className="text-primary text-5xl">{service.title.toUpperCase()}</h3>
                                <p className="text-2xl">
                                    {service.description}
                                </p>
                                <PrimaryButton>KNOW MORE</PrimaryButton>
                            </div>
                            <div className="relative h-[500px] md:min-h-[600px]">

                                <Image
                                    src={'/images/circles.png'}
                                    alt="Circles"
                                    width={400}
                                    height={400}
                                    className="object-fill absolute top-0 left-0 w-full min-h-[600px] animate-pulse "
                                />

                                <Image
                                    src={service.image}
                                    alt="CEO Logo"
                                    fill
                                    className="object-fill"
                                />
                            </div>
                        </>
                    ) : (
                        <>   <div className="relative h-[500px] md:min-h-[600px]">
                            <Image
                                src={'/images/circles.png'}
                                alt="Circles"
                                width={400}
                                height={400}
                                className="object-fill absolute top-0 left-0 w-full min-h-[600px] animate-pulse"
                            />
                            <Image
                                src={service.image}
                                alt="CEO Logo"
                                fill
                                className="object-fill"
                            />
                        </div>
                            <div className="flex flex-col justify-center gap-5">
                                <h3 className="text-primary text-5xl">{service.title.toUpperCase()}</h3>
                                <p className="text-2xl">
                                    {service.description}
                                </p>
                                <PrimaryButton>KNOW MORE</PrimaryButton>
                            </div></>
                    )}

                </div>))


            }

            {
                services.map((service) => (<div key={service.id} className="grid md:hidden grid-cols-1 md:grid-cols-2 gap-20 px-20">
                    {
                        <>
                            <div className="flex flex-col justify-center gap-5">
                                <h3 className="text-primary text-5xl">{service.title.toUpperCase()}</h3>
                                <p className="text-2xl">
                                    {service.description}
                                </p>
                                <PrimaryButton>KNOW MORE</PrimaryButton>
                            </div>
                            <div className="relative h-[500px] md:min-h-[600px]">

                                <Image
                                    src={'/images/circles.png'}
                                    alt="Circles"
                                    width={400}
                                    height={400}
                                    className="object-fill absolute top-0 left-0 w-full min-h-[600px] animate-pulse "
                                />

                                <Image
                                    src={service.image}
                                    alt="CEO Logo"
                                    fill
                                    className="object-fill"
                                />
                            </div>
                        </>
                    }

                </div>))
            }
        </section>
    )
}

export default Services