import React from 'react';
import styles from '@/util/style';
import Image from 'next/image';

export default function Brand() {
    return (
        <>
            <div className={`hidden xs:flex justify-between text-center w-full bg-slate-900 py-8 ${styles.paddingX}`}>
                <div className="w-[80px] sm:w-[110px] text-white">
                    <Image src="/brands/versace.png" alt="Versace" className='text-white' width={200} height={200}
                        priority />
                </div>
                <div className="w-[45px] sm:w-[56px] text-white">
                    <Image src="/brands/zara.png" alt="Versace" className='text-white' width={200} height={200}
                        priority />
                </div>
                <div className="w-[80px] sm:w-[110px] text-white">
                    <Image src="/brands/gucci.png" alt="Versace" className='text-white' width={200} height={200}
                        priority />
                </div>
                <div className="w-[80px] sm:w-[110px] text-white">
                    <Image src="/brands/prada.png" alt="Versace" className='text-white' width={200} height={200}
                        priority />
                </div>
                <div className="w-[80px] sm:w-[110px] text-white">
                    <Image src="/brands/calvinklein.png" alt="Versace" className='text-white' width={200} height={200}
                        priority />
                </div>
            </div>

            <div className={`flex xs:hidden flex-col  space-y-4 text-center w-full bg-slate-900 py-8 ${styles.paddingX}`}>
                <div className='flex justify-between  items-center'>
                    <div className="w-[80px] text-white">
                        <Image src="/brands/versace.png" alt="Versace" className='text-white' width={200} height={200}
                            priority />
                    </div>
                    <div className="w-[45px] xs:w-[56px] text-white">
                        <Image src="/brands/zara.png" alt="Versace" className='text-white' width={200} height={200}
                            priority />
                    </div>
                    <div className="w-[80px] text-white">
                        <Image src="/brands/gucci.png" alt="Versace" className='text-white' width={200} height={200}
                            priority />
                    </div>
                </div>
                <div className='flex justify-between items-center px-6'>
                    <div className="w-[80px] text-white mt-5 xs:mt-0">
                        <Image src="/brands/prada.png" alt="Versace" className='text-white' width={200} height={200}
                            priority />
                    </div>
                    <div className="w-[80px] text-white mt-5 xs:mt-0">
                        <Image src="/brands/calvinklein.png" alt="Versace" className='text-white' width={200} height={200}
                            priority />
                    </div>
                </div>
            </div>

        </>
    )
}
