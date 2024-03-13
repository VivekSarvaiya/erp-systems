const getCategories = (products) => {
    let categories = {}
    products.forEach(ele => {
        if (categories[ele.category]) categories[ele.category]++
        else categories[ele.category] = 1
    });
    return { categories: Object.keys(categories), values: Object.values(categories) }
}

export default getCategories