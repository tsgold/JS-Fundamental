const products = [
    {
        name: "Uncharted 4",
        price: "Rp. 550.000",
        category: "Action",
        Transaction: "25",
        rating: "9"
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

//untuk mengolah tipe data array satu satu ada cara yaitu iterasi atau looping atau pengulangan
// 2 map
// 1 For-loop

//cara pakai map
// products.map((dataObj, id) => {})

// products.map((dataKu, index) => {})

//map

products.map((dataObj, id) => {
    console.log(dataObj.name, dataObj.price, dataObj.rating);
});


//for-loop - index pertama menggunakan let untuk menununjukan itu mulai dari nol

console.log(`====================`)
//console.log(products.length)
//for-loop
for (let a=0 ; a < products.length ; a++){
    console.log( products[a].name, products[a].price, products[a].rating)
}

//++ agar tidak ada mengulang

costs name 
Text "handsome"






