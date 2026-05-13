let tong = ( a, b) => {
    return a + b;
}
console.log(tong(1, 2));

let chao = ()=>
    console.log("Xin chao cac ban");
chao();

let chao2 = (name) => {
    console.log("xin chao " + name);
}
chao2("Long");

let Chao3 = (id, name , age, address)=> {
    console.log("ID: " +id);
    console.log("Name: " +name);
    console.log("Age: " +age);
    console.log("Address: " +address);  
}
Chao3(91, "Long", 21, "Quang Binh");

let vonglap = (n) => {
    for(let i = 0; i < n; i++){
        console.log("Xin chao cac ban");
    }
}
vonglap(5);

