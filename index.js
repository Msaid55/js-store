let products = ["iPhone ", "iPhone 11 pro", "iPhone 12", "iPhone 13", "iPhone 16 pro max"];
let prices = [500, 600, 700, 800, 900];
let qties = [8, 5, 7, 4, 3];



let showProducts = () => {
  console.clear();
  products.forEach((el, index) => {
    console.log(
      ` ${index} - Name : ${el} , Price : $ ${prices[index]} , Qty : ${qties[index]}`
    );
  });
};


let addNewProduct = () => {
  let newPhoneName = prompt("Please Enter New Phone Name");
  let newPhonePrice = +prompt("Please Enter New Phone Price");
  let newPhoneQty = +prompt("Please Enter New Phone Qty");
  if(newPhoneName && newPhonePrice && newPhoneQty){
    products.push(newPhoneName);
    prices.push(newPhonePrice);
    qties.push(newPhoneQty);
    showProducts();
  }else{
    showProducts();
  }
};


let deleteProduct = () => {
    
  let indexToDelete = +prompt("Enter Phone No you want to delete");
  if(indexToDelete){
    products.splice(indexToDelete, 1);
    prices.splice(indexToDelete, 1);
    qties.splice(indexToDelete, 1);
    showProducts();
  }else{
    showProducts();
  }
  

};


let editName = () => {
  let indexToUpdate = +prompt("Enter Phone No you want to Edit");
  let newName = prompt("Enter new Phone Name");
  products[indexToUpdate] = newName;
  showProducts();
};

let editPrice = () => {
  let indexToUpdate = +prompt("Enter Phone No you want to Edit");
  let newprice = +prompt("Enter new Phone Price");
  prices[indexToUpdate] = newprice;
  showProducts();
};

let editQty = () => {
  let indexToUpdate = +prompt("Enter Phone No you want to Edit");
  let newQty = +prompt("Enter new Phone Qty");
  qties[indexToUpdate] = newQty;
  showProducts();
};