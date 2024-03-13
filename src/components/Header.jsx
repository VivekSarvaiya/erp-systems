import { Link, useNavigate } from 'react-router-dom';
import Avatar from 'antd/lib/avatar';
import Dropdown from 'antd/lib/dropdown';
import UserOutlined from '@ant-design/icons/UserOutlined'
import MenuOutlined from '@ant-design/icons/MenuOutlined'
import LogoutOutlined from '@ant-design/icons/LogoutOutlined'
import { TOKEN, removeLocalStorageItem } from '../utils/localStorageManager';


const Header = ({ setOpenSidenav }) => {
   const navigate = useNavigate()
   const HeaderProfileOptions = [
      {
         key: '1',
         label: "Log out",
         danger: true,
         icon: <LogoutOutlined />,
         onClick: () => {
            removeLocalStorageItem(TOKEN)
            navigate('/login')
         }
      },
   ];
   return (
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
         <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
               <div className="flex items-center justify-start rtl:justify-end text-white">
                  <button onClick={() => setOpenSidenav(prev => prev = !prev)} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                     <MenuOutlined />
                  </button>
                  <Link to='/dashboard' className="flex ms-2 md:me-24">
                     <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-black ">ERP</span>
                  </Link>
               </div>
               <div className="flex items-center">
                  <Dropdown menu={{ items: HeaderProfileOptions }} placement="bottomRight" arrow trigger="click">
                     <button type="button" className="inline-flex items-center text-sm text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                        <Avatar icon={<UserOutlined />} />
                     </button>
                  </Dropdown>
               </div>
            </div>
         </div>
      </nav>
   );
};


export default Header;
