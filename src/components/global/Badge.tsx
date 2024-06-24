import { FC } from 'react';

type BadgeProps = {
    count: number;
};

const Badge: FC<BadgeProps> = ({ count }) => {
    return (
        <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-slate-700 hover:text-gray-800">
            <a href="#" role="button" className="relative flex">
                <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24" >
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute -right-2 -top-1 rounded-full bg-red-600 w-auto h-auto top right p-1 m-0 text-white font-medium text-[10px]  leading-tight text-center">{count}
                </span>
            </a>
        </li>
    );
};

export default Badge;