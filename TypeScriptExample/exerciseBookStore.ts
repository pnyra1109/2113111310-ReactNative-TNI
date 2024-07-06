interface Book{
    title: string;
    genre: 'fiction' | 'non-fiction' | 'educational';
    price: number;
}

const books: Book[] = [
    {title: "The Great Gatsby", genre: "fiction", price: 320},
    {title: "War and Peace", genre: "fiction", price: 250},
    {title: "Economic 101", genre: "educational", price: 480},
    {title: "In Cold Blood", genre: "non-fiction", price: 300},
    {title: "The Catcher in the Rye", genre: "fiction", price: 400}
];

function filterpriceBygenre(book:Book[],genrefilter:String,pricefilter:number): Book[]{
    return book.filter((booked)=>booked.genre == genrefilter && booked.price > pricefilter);
}
function discountbook(booked:Book[]): Book[] {
    return booked.map((booked) => ({ ...booked,price:booked.price * 0.9 }));
}

let filterBook = filterpriceBygenre(books,"fiction",300);
let discountbooks = discountbook(filterBook);

console.log(discountbooks);