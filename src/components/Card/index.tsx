import React from 'react';

interface Props {
    theme: "white" | "black";
    img: string;
    title: string;
    subTitle: string;
}

const Card: React.FC<Props> = ({ theme, img, title, subTitle }) => {
    return (
        <div className={`min-w-[300px] w-[300px] h-[380px] rounded-lg shadow-lg transition-transform transform hover:scale-105
            ${theme === "black" ? "bg-[#111218] text-white" : "bg-white text-black"}
        `}>
            <img src={img} alt={title} className='h-[70%] w-full object-cover rounded-t-lg' />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm mt-2">{subTitle}</p>
            </div>
        </div>
    );
};

export default Card;
