import React from 'react'
import RightSideBarItem from './RightSideBarItem'

const RightSideBar = () => {
    return (
        <div className="ml-1 bg-black-medium pl-2 py-2 rounded-r-xl">
            <RightSideBarItem title={'Fortnite'} imgPath={'./images/rightBanner1.png'} />
            <RightSideBarItem title={'Fortnite'} imgPath={'./images/rightBanner1.png'} />
            <RightSideBarItem title={'Fortnite'} imgPath={'./images/rightBanner1.png'} />
            <RightSideBarItem title={'Fortnite'} imgPath={'./images/rightBanner1.png'} />
        </div>
    )
}

export default RightSideBar
