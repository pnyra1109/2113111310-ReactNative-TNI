//กำหนดตัวแปลประเภทEnum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
//สร้างฟังก์ชั้น
function displayOderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            console.log("Your order is pending.");
            break;
        case OrderStatus.Shipped:
            console.log("Your order has been Shipped.");
            break;
        case OrderStatus.Cancelled:
            console.log("Your order has been Cancelled.");
            break;
        default:
            console.log("Unknow order status.");
    }
} //end of Function
//Testing the function
displayOderStatus(OrderStatus.Shipped);
displayOderStatus(OrderStatus.Cancelled);
