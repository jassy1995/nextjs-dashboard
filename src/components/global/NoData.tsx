import {FC} from 'react';
import {cn} from "@/util/global";


type NoDataProps = {
    icon?: any;
    text:string;
    className?:string;
};



const NoData:FC<NoDataProps> = ({ icon, text, className }) => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center space-y-3 rounded-2xl border-2 border-dashed border-default-300 px-8 py-16 text-center text-zinc-500',
                className
            )}
        >
            {!!icon && <span>icon</span>}
            <p className="max-w-sm">{text || 'No data'}</p>
        </div>
    );
};

export default NoData;
