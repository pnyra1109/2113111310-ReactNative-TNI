//สร้างและเข้าถึงArray
let numbers: number[] = [10, 20, 30, 40, 50];
console.log(numbers[2]); //30

//การใช้งานLoop ร่วมกับ Array
let names: String[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
  console.log(name);
}

//การเพิ่มและลดข้อมูลใน Array(*push,pop)
let fruits: String[] = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits);
fruits.pop();
console.log(fruits);