import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import getOrders from '../utils/getOrders';
import { setOrders } from '../redux/slices/ordersSlice';
import OrderData from '../constants/OrderData';

const Layout = () => {
    const { products } = useSelector((state) => state.productsReducer);
    const [openSidebar, setOpenSidenav] = useState(true)
    const dispatch = useDispatch();

    const fetchOrderDetails = (orderData = [], products = []) => {
        const orderDetails = getOrders(orderData, products);
        dispatch(setOrders(orderDetails));
    }

    useEffect(() => {
        if (OrderData && products) fetchOrderDetails(OrderData, products)
    }, [OrderData, products])

    return (
        <div>
            <Header setOpenSidenav={setOpenSidenav} />
            <SideNav openSidebar={openSidebar} />
            <div className="p-4 sm:ml-64 bg-bgPrimary min-h-screen">
                <div className="mt-20">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout