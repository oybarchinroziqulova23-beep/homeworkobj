// Berilgan ikkita JSON obyektida bir xil kalit-qiymat juftliklarini topadigan funksiyani yozing. 
// Natijada umumiy qiymatlar bilan kalit-qiymat juftliklari yangi obyekt shaklida qaytarilsin. 
// Ikkala obyektning tuzilmalari turli darajada murakkab va ichma-ich bo'lishi mumkin.

function findCommonPairs(obj1, obj2) {
  let result = {}
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      let val1 = obj1[key]
      let val2 = obj2[key]
      if (typeof val1 === "object" && val1 !== null && 
          typeof val2 === "object" && val2 !== null && 
          !Array.isArray(val1) && !Array.isArray(val2)) {
        let nested = findCommonPairs(val1, val2)
        if (Object.keys(nested).length > 0) {
          result[key] = nested
        }
      } 
      else if (val1 === val2) {
        result[key] = val1
      }
    }
  }

  return result
}
const jsonData1 = {
  user: {
    name: "Ali",
    age: 25,
    address: {
      city: "Tashkent",
      zip: "100000"
    }
  },
  active: true
};

const jsonData2 = {
  user: {
    name: "Ali",
    age: 30,
    address: {
      city: "Tashkent",
      zip: "200000"
    }
  },
  active: true
}

console.log(findCommonPairs(jsonData1, jsonData2))
