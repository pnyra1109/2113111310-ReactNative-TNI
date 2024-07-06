type Product = {
  name: string;
  price: number;
  category: string;
};

//กำหนด Array ของผลิตภัณฑ์
let products: Product[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 1200, category: "Apparel" },
  { name: "Coffee Maker", price: 2500, category: "Appliances" },
];

//สร้างฟังก์ชั้น filterProductByPrice
function filterProductByPrice(products: Product[],filterprice:number): Product[] {
  return products.filter((product) => product.price>filterprice);
}

//สร้างฟังก์ชั้น discountProduct
function discountProduct(products: Product[]): Product[] {
  return products.map((product) => ({ ...product,price:product.price * 0.9 }));
}
////เรียกใช้ฟังก์ชั้น
let filterProduct = filterProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

//แสดงผลที่ต้องการ
//console.log(filterProduct);
console.log(discountProducts);
