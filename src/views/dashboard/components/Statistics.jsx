import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Icon from '@ant-design/icons';
import ContentBox from './ContentBox';
import Statistic from 'antd/lib/statistic';
import SignalFilled from '@ant-design/icons/SignalFilled';
import DollarOutlined from '@ant-design/icons/DollarOutlined';
import ProductOutlined from '@ant-design/icons/ProductOutlined';
import UsergroupAddOutlined from '@ant-design/icons/UsergroupAddOutlined';
import getTotalUsersCount from '../utils/getTotalUsersCount'
import getTotalSales from '../utils/getTotalSales'

const Statistics = () => {
    const { products } = useSelector((state) => state.productsReducer)
    const { orders } = useSelector((state) => state.ordersReducer)

    const users = useMemo(() => {
        return getTotalUsersCount(orders)
    }, [orders]);


    const totalSale = useMemo(() => {
        return getTotalSales(orders)
    }, [orders])


    const stats = [
        {
            label: 'Sales',
            value: totalSale,
            icon: DollarOutlined
        },
        {
            label: 'Products Listed',
            value: products?.length,
            icon: ProductOutlined
        },
        {
            label: 'Users On Platform',
            value: users?.length,
            icon: UsergroupAddOutlined
        },
        {
            label: 'Total Orders',
            value: orders?.length,
            icon: SignalFilled
        },
    ]

    return (
        <>
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                {stats.map(({ label, value, icon }) => (
                    <ContentBox key={label}>
                        <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-gradient-to-tr bg-dark text-white shadow-gray-900/20 absolute grid h-12 w-12 place-items-center">
                            <Icon component={icon} className='text-2xl' />
                        </div>
                        <div className="p-4 text-right">
                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-gray-600">{label}</p>
                            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-gray-900">
                                <Statistic value={value} prefix={label === 'Sales' && "$"} suffix="+" />
                            </h4>
                        </div>
                    </ContentBox>
                ))}
            </div>

        </>
    );
};

export default Statistics;
