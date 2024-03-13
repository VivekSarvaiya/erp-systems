import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import ContentBox from './ContentBox';
import ReactApexChart from 'react-apexcharts';
import { activeUsers, product, sales } from '../utils/Charts';

const Charts = () => {
    const { products } = useSelector((state) => state.productsReducer)
    return (
        <>
            <div className='mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3'>

                <ContentBox className='sm:col-span-2'>
                    <p className="text-base font-semibold text-gray-900 m-4 mb-0">
                        Daily Sales (in 1000 $)
                    </p>
                    <ReactApexChart {...sales()} />
                </ContentBox>

                <ContentBox>
                    <p className="text-base font-semibold text-gray-900 m-4 mb-0">
                        Product Categories
                    </p>
                    <ReactApexChart {...product(products)} />
                </ContentBox>

            </div>

            <ContentBox>
                <p className="text-base font-semibold text-gray-900 m-4 mb-0">
                    Active Users On Platform
                </p>
                <ReactApexChart {...activeUsers()} />
            </ContentBox>
        </>
    )
}

export default memo(Charts)