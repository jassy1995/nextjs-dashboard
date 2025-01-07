import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ItemGallery() {
    return (
        <div>
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="grid grid-cols-1 ss:grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
                        <div
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:h-80">
                    <Link href='/category/all'>
                            <Image
                                src="/gallery/casual.png"
                                alt="Photo by Minh Pham"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="transition duration-200 group-hover:scale-110"
                            />
                    </Link>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-black md:ml-5 md:text-lg">Casual</span>
                        </div>
                        <div
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:col-span-2 md:h-80">
                    <Link href='/category/all'>

                            <Image
                                src="/gallery/formal.png"
                                alt="Photo by Minh Pham"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="transition duration-200 group-hover:scale-110"
                            />
                    </Link>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-black md:ml-5 md:text-lg">Formal</span>
                        </div>
                        <div
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:col-span-2 md:h-80">
                    <Link href='/category/all'>
                            <Image
                                src="/gallery/party.png"
                                alt="Photo by Minh Pham"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="transition duration-200 group-hover:scale-110"
                            />
                    </Link>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-black md:ml-5 md:text-lg">Party</span>
                        </div>
                        <div
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:h-80">
                            <Link href='/category/all'>
                                <Image
                                    src="/gallery/gym.png"
                                    alt="Photo by Minh Pham"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="transition duration-200 group-hover:scale-110"
                                />
                            </Link>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-black md:ml-5 md:text-lg">Gym</span>
                        </div>
                </div>
            </div>
        </div>
    )
}
