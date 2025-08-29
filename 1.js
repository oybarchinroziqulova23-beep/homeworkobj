// id, name va price xususiyatlariga ega Product deb nomlangan class yozing. 
// Har safar yangi product kiritilganda qiymati bittaga oshib boruvchi static 
// productCount xususiyatini qo'shing. Mahsulotlarning umumiy narxini hisoblab beruvchi 
// totalPrice metodini yarating. Product classidan CareProduct deb nomlangan voris class yarating 
// va unga kafolat muddati uchun warrantyPeriod xususiyatini qo'shing.
//  Voris class uchun kafolat muddatini hisobga oluvchi totalPrice metodini qayta yozing. 
// Bunda agar kafolat muddatiga 5 kun qolgan bo'lsa 10%, 4 kun qolgan bo'lsa 20%, 
// 3 kun qolgan bo'lsa 30%, 2 kun qolgan bo'lsa 40% 
// va 1 kun qolgan bo'lsa 50% narxda hisoblashni amalga oshiring.

class Product {
  static productCount = 0

  constructor(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
    Product.productCount++
  }

  totalPrice() {
    return this.price
  }
}

class CareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price)
    this.warrantyPeriod = warrantyPeriod
  }

  totalPrice() {
    let discount = 0

    switch (this.warrantyPeriod) {
      case 5:
        discount = 0.1; break;
      case 4:
        discount = 0.2; break;
      case 3:
        discount = 0.3; break;
      case 2:
        discount = 0.4; break;
      case 1:
        discount = 0.5; break;
    }

    return this.price * (1 - discount)
  }
}

let p1 = new Product(1, "Stol", 500)
let p2 = new CareProduct(2, "Televizor", 2000, 3)
let p3 = new CareProduct(3, "Telefon", 1000, 1)

console.log("Mahsulotlar soni:", Product.productCount)
console.log(`${p1.name} narxi: ${p1.totalPrice()}`)
console.log(`${p2.name} narxi (chegirma bilan): ${p2.totalPrice()}`)
console.log(`${p3.name} narxi (chegirma bilan): ${p3.totalPrice()}`)



