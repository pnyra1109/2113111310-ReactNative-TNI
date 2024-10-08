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
var books = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economic 101", genre: "educational", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Catcher in the Rye", genre: "fiction", price: 400 }
];
function filterpriceBygenre(book, genrefilter, pricefilter) {
    return book.filter(function (booked) { return booked.genre == genrefilter && booked.price > pricefilter; });
}
function discountbook(booked) {
    return booked.map(function (booked) { return (__assign(__assign({}, booked), { price: booked.price * 0.9 })); });
}
var filterBook = filterpriceBygenre(books, "fiction", 300);
var discountbooks = discountbook(filterBook);
console.log(discountbooks);
