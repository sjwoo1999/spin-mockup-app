import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
    className?: string;
    as?: 'h1' | 'h2' | 'h3';
    titleColor?: string;
    descriptionColor?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    className,
    as = 'h2',
    titleColor = 'text-primary',
    descriptionColor = 'text-primary',
}) => {
    const HeadingTag = as;

    return (
        <div className={`text-center max-w-xl mx-auto px-4 ${className}`}>
            <HeadingTag className={`text-3xl font-bold mb-2 ${titleColor}`}>{title}</HeadingTag>
            <p className={`text-lg ${descriptionColor}`}>{description}</p>
        </div>
    );
};

export default PageHeader;
