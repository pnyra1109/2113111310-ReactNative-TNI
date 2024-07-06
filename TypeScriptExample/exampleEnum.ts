//กำหนดตัวแปลประเภทEnum
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}
//สร้างฟังก์ชั้น
function displayOderStatus(status: OrderStatus) {
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
