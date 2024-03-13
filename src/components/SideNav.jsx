import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '@ant-design/icons';
import HomeFilled from '@ant-design/icons/HomeFilled';
import ProductFilled from '@ant-design/icons/ProductFilled';
import SignalFilled from '@ant-design/icons/SignalFilled';
import CalendarFilled from '@ant-design/icons/CalendarFilled';

const SideNav = ({ openSidebar }) => {
   const routes = [
      {
         name: "Dashboard",
         path: '/dashboard',
         icon: HomeFilled
      },
      {
         name: "Products",
         path: '/products',
         icon: ProductFilled
      },
      {
         name: "Orders",
         path: '/orders',
         icon: SignalFilled
      },
      {
         name: "Calendar",
         path: '/calendar',
         icon: CalendarFilled
      },
   ]


   return (
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${openSidebar ? "-translate-x-full" : ""} bg-white border-r border-gray-200 sm:translate-x-0`} aria-label="Sidebar">
         <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
            <ul className="space-y-2 font-medium">
               {routes.map(({ icon, name, path }) => (
                  <li key={name} >
                     <NavLink to={path} className='group'>
                        <div className="flex items-center p-2 text-gray-700 rounded-lg  hover:bg-gray-100 hover:text-gray-900 group-[.active]:text-gray-900 group-[.active]:bg-gray-100">
                           <Icon component={icon} />
                           <span className="ms-3">{name}</span>
                        </div>
                     </NavLink>
                  </li>
               ))}
            </ul>
         </div>
      </aside>
   )
}


export default SideNav
