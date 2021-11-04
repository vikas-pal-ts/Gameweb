import React from 'react'
import { NotificationSvg, SearchSvg } from '../../svgs/SideBarIcon'
import Button from '../Button'

export const TopHeader = () => {
    return (
        <div className="flex justify-between items-center mb-9">
            <div className="flex items-center">
              <Button>Discover</Button>
              <Button>Browse</Button>
              <Button>Wishlist</Button>
            </div>
            <div className="flex items-center">
                <span className="cursor-pointer"><NotificationSvg /></span>
                <div className="flex ml-8 items-center bg-black-medium rounded-full h-8 pl-2">
                    <SearchSvg />
                    <input className="bg-black-medium pl-2 rounded-full focus:outline-none" type="text" placeholder="Search" />
                </div>
            </div>
        </div>
    )
}
