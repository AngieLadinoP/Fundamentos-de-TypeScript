export const products = [];
export const addProduct = (data) => {
    products.push(data);
};
export const calcStock = () => {
    let total = 0;
    products.forEach((item) => {
        total += item.stock;
    });
    return total;
};
