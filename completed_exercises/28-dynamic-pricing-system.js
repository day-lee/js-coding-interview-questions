/*
outlier assessment
write a functional program that accomplishes the following prompt:
➡️ Develop a dynamic pricing system for an e-commerce platform.
*/

const productsList = [
  { id: 1, name: "product1", price: 12, promotion: true },
  { id: 2, name: "product2", price: 3, promotion: true },
  { id: 3, name: "product3", price: 8, promotion: false },
  { id: 4, name: "product4", price: 5, promotion: true },
  { id: 5, name: "product5", price: 15, promotion: false },
  { id: 6, name: "product6", price: 7, promotion: true },
  { id: 7, name: "product7", price: 10, promotion: false },
  { id: 8, name: "product8", price: 6, promotion: true },
  { id: 9, name: "product9", price: 9, promotion: false },
  { id: 10, name: "product10", price: 4, promotion: true },
];

function dynamicPricingSystem(productsList) {
  let currentTime = new Date().getHours();

  const updatedPriceProductsList = productsList.map((item) => {
    let updatedPrice = item.price;
    // when the item is on promotion, 50% discount applies
    if (item.promotion) {
      updatedPrice = updatedPrice - updatedPrice * 0.5;
    }
    // when time is between 7 to 10 P.M, 10% discount applies
    if (currentTime >= 19 && currentTime < 22) {
      updatedPrice = updatedPrice - updatedPrice * 0.1;
    }
    // No discount
    return { ...item, price: updatedPrice };
  });

  return updatedPriceProductsList;
}

dynamicPricingSystem(productsList);
