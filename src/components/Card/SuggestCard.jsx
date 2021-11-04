import React from 'react'
import CircleButton from '../Button/CircleButton'
import SuggestCardItem from './SuggestCardItem'

const SuggestCard = () => {
    return (
        <>
        <div className="mt-12 mb-8">
            <div className="flex w-full justify-between items-center">
                <h4 className="text-base">Games on sales</h4>
                <div className="flex">
                    <CircleButton className="mr-6">{ '<-'}</CircleButton>
                    <CircleButton>{'->'}</CircleButton>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 w-full">
            <SuggestCardItem title="Valheim" category="Action Games" price="8.15" imgSrc="./images/bottomBanner1.png" />
            <SuggestCardItem title="Valheim" category="Action Games" price="8.67" imgSrc="./images/bottomBanner1.png"
            discountedPrice="50" discountPercent="-80" />
             <SuggestCardItem title="Valheim" category="Action Games" price="8.67" imgSrc="./images/bottomBanner1.png"
            discountedPrice="50" discountPercent="-80" />
             <SuggestCardItem title="Valheim" category="Action Games" price="8.67" imgSrc="./images/bottomBanner1.png"
            discountedPrice="50" discountPercent="-80" />
             <SuggestCardItem title="Valheim" category="Action Games" price="8.67" imgSrc="./images/bottomBanner1.png"
            discountedPrice="50" discountPercent="-80" />
            
        </div>

        </>
    )
}

export default SuggestCard
