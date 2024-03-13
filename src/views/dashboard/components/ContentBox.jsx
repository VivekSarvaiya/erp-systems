import React from 'react'

const ContentBox = ({ children, className }) => {
    return (
        <div className={` ${className} relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border shadow-sm`}>
            {children}
        </div>
    )
}

export default ContentBox