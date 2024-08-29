import { FC } from "react";

const LinkList: FC = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full text-gray-500'>
            <div className="flex flex-col space-y-2">
                <h1 className='text-black uppercase text-sm'>company</h1>
                <ul className='flex flex-col space-y-2 text-sm'>
                    <li className="hover:text-black cursor-pointer">About</li>
                    <li className="hover:text-black cursor-pointer">Features</li>
                    <li className="hover:text-black cursor-pointer">Works</li>
                    <li className="hover:text-black cursor-pointer">Career</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className='text-black uppercase text-sm'>help</h1>
                <ul className='flex flex-col space-y-2 text-sm'>
                    <li className="hover:text-black cursor-pointer">Customer Support</li>
                    <li className="hover:text-black cursor-pointer">Delivery Details</li>
                    <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
                    <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className='text-black uppercase text-sm'>faq</h1>
                <ul className='flex flex-col space-y-2 text-sm'>
                    <li className="hover:text-black cursor-pointer">Account</li>
                    <li className="hover:text-black cursor-pointer">Manage Deliveries</li>
                    <li className="hover:text-black cursor-pointer">Orders</li>
                    <li className="hover:text-black cursor-pointer">Payments</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className='text-black uppercase text-sm'>resources</h1>
                <ul className='flex flex-col space-y-2 text-sm'>
                    <li className="hover:text-black cursor-pointer">Free ebooks</li>
                    <li className="hover:text-black cursor-pointer">Developmental Tutorial</li>
                    <li className="hover:text-black cursor-pointer">How to Blog</li>
                    <li className="hover:text-black cursor-pointer">Youtube Playlist</li>
                </ul>
            </div>
        </div>
    );
};

export default LinkList;
