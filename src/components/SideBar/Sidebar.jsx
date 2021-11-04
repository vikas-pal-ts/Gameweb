import React from 'react'
import { HomeSvg, LibrarySvg, LiveSvg, LogoSvg, PeopleSvg, StoreSvg } from '../../svgs/SideBarIcon'
import SideBarMenuItem from './SideBarMenuItem';
import {TopHeader} from "../TopHeader";

export const Sidebar = ({ children }) => {
    return (
        <>
        <div className="flex flex-row mt-14">
        <div className="bg-black-dark w-64 min-h-screen flex items-center flex-col justify-start border-r-2 border-grey-border">
            <div className="logo mb-14">
                <LogoSvg />
            </div>
            <nav className="sideNav">
                <ul className="">
                   <SideBarMenuItem Icon={HomeSvg} title={'Home'} to={'./'} />
                   <SideBarMenuItem Icon={StoreSvg} title={'Store'} to={'./'} />
                   <SideBarMenuItem Icon={LibrarySvg} title={'Library'} to={'./'} />
                   <SideBarMenuItem Icon={PeopleSvg} title={'Friends'} to={'./'} />
                   <SideBarMenuItem Icon={LiveSvg} title={'Live'} to={'./'} />
                </ul>
            </nav>
        </div>
        {/* <div className="flex w-full h-5/6 fixed items-end justify-center">
            <nav className="w-4/5 bg-black-medium p-4 rounded-full">
                    <ul className="flex item-center justify-evenly w-full">
                        <li className="">
                            <a href="./">{ <HomeSvg width="40" height="40" /> }</a>
                        </li>
                        <li>
                            <a href="./">{ <StoreSvg width="40" height="40" /> }</a>
                        </li>
                        <li>
                            <a href="./">{ <LibrarySvg width="40" height="40" /> }</a>
                        </li>
                        <li>
                            <a href="./">{ <LiveSvg width="40" height="40" /> }</a>
                        </li>
                    </ul>
                </nav>
        </div> */}
        <div className="ml-6 mr-12 w-full">
            <>
             <TopHeader />
              { children }
            </>
        </div>
        </div>

        </>
    )
}
