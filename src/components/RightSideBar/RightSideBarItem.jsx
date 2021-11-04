import React from 'react'

const RightSideBarItem = ({ title,imgPath }) => {
    return (
        <div className="flex items-center w-52 h-16 hover:bg-black-dark pl-1 pb-1 mb-4 cursor-pointer">
            <div className="w-12 h-14">
                <img src={imgPath} alt="suggestBanner1" />
            </div>
            <h4 className="text-sm ml-4">{ title }</h4>
        </div>
    )
}

export default RightSideBarItem
