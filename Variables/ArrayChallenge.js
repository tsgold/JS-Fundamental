// //menggunakan metode perulangan /iterasi/looping

//lv 1
const ratingProduct = "*";
//*

console.log(ratingProduct)

//lv 2
const RatingProductGame = 2;
//**

let star = "";
for (let a=0 ; a < RatingProductGame; a++){
    star += "* ";
}
console.log(star)

//lv 3
// *
// * *
// * * *
// * * * *
// * * * * *

const totalMaxStars = 5;
for (let a = 0; a < totalMaxStars; a++) { //Vertical
    let stars = "";
    for (let b = 0; b <= a; b++) { //Horizontal
        stars += "* ";
    }
    stars += "\n";
    console.log(stars);
}

//lv 4

const products = [
    {
        name: "Uncharted 4",
        price: "Rp. 550.000",
        category: "Action",
        Transaction: "25",
        rating: 9
    }, {
        name:"GTA, V",
        price: "Rp. 650.000",
        category: "RPG",
        Transaction: "134",
        rating: 8
    }, {
        name: "FIFA 2019",
        price: "Rp 850.000",
        category: "Sport",
        Transaction: "5",
        rating: 7
    }
];

// Game: Uncharted 4, Transaction: 25, Rating: *********
// Game: GTA, V, Transaction: 134, Rating: ********
// Game: FIFA 2019, Transaction: 5, Rating: *******

products.map((dataObj, idx) => {
    let stars = "";
    for (let d = 0; d < dataObj.rating; d++) {
        stars += "* ";
    }
    console.log(
        `Game: ${dataObj.name}, Transaction: ${
            dataObj.Transaction
        }, Rating: ${stars}`
    );
});

console.log("");

console.log("");

console.log("===================================");






