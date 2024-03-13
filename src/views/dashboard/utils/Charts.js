import getCategories from "./getCategories";
import chartsConfig from '../config/charts-config';

export const activeUsers = () => {
    return ({
        type: "line",
        height: 300,
        series: [
            {
                name: "Sales",
                data: [50, 140, 100, 210, 100, 500, 200, 300, 150, 300, 400, 533],
            },
        ],
        options: {
            ...chartsConfig,
            colors: ["#546E7A"],
            stroke: {
                lineCap: "round",
            },
            markers: {
                size: 5,
            },
            xaxis: {
                ...chartsConfig.xaxis,
                categories: [
                    "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]
            },
        },
    })
};
export const product = (products) => {
    let { categories, values } = getCategories(products)
    return ({
        type: "pie",
        series: values,
        height: 300,
        options: {
            labels: categories,
            legend: {
                position: 'bottom'
            },
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            responsive: [{
                breakpoint: 400,
                options: {
                    chart: {
                        width: 280
                    }
                }
            }]
        },
    })
};

export const sales = () => {
    return ({

        type: "bar",
        height: 300,
        series: [
            {
                name: "Views",
                data: [50, 140, 100, 210, 100, 500, 200, 300, 150, 300, 400, 533],
            },
        ],
        options: {
            ...chartsConfig,
            colors: "#388e3c",
            plotOptions: {
                bar: {
                    columnWidth: "16%",
                    borderRadius: 5,
                },
            },
            xaxis: {
                ...chartsConfig.xaxis,
                categories: [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",],
            },
        },
    })
};