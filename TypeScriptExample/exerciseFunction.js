var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//กำหนด Array ของผลิตภัณฑ์
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
//สร้างฟังก์ชั้น filterProductByPrice
function filterProductByPrice(products) {
    return products.filter(function (product) { return product.price > 1000; });
}
//สร้างฟังก์ชั้น discountProduct
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
////เรียกใช้ฟังก์ชั้น
var filterProduct = filterProductByPrice(products);
var discountProducts = discountProduct(filterProduct);
//แสดงผลที่ต้องการ
//console.log(filterProduct);
console.log(discountProducts);
