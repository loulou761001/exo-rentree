import React from 'react';

interface Props {
    children: React.ReactNode;
    theme: 'black' | 'gray';
}

const CommentaryCard: React.FC<Props> = ({ children, theme }) => {
    return (
        <div className={`p-6 rounded-lg shadow-lg 
            ${theme === 'gray' ? 'bg-[#22242f]' : 'bg-[#131317]'}
        `}>
            {children}
        </div>
    );
};

export default CommentaryCard;
