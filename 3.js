// name va departments (array) xususiyatlariga ega bo'lgan Universitet nomli class yarating.
// Ushbu classga yangi bo'lim(department) qo'shish, bo'limni olib tashlash 
// va barcha bo'limlarni ko'rsatish metodlarini yozing. Universitet classidan object yarating, 
// 5ta yangi bo'lim qo'shing va 2 ta bo'limni olib tashlang. Qolgan bo'limlar ro'yxatini chiqaring.

class Universitet {
  constructor(name) {
    this.name = name
    this.departments = []
  }

  addDepartment(dep) {
    this.departments.push(dep)
  }

  removeDepartment(dep) {
    this.departments = this.departments.filter(d => d !== dep)
  }

  showDepartments() {
    console.log(`${this.name} universitetidagi bo'limlar:`);
    this.departments.forEach((d, i) => {
      console.log(`${i + 1}. ${d}`)
    })
  }
}

let uni = new Universitet("TATU");
uni.addDepartment("Informatika");
uni.addDepartment("Matematika");
uni.addDepartment("Fizika");
uni.addDepartment("Biologiya");
uni.addDepartment("Kimyo");
uni.removeDepartment("Biologiya");
uni.removeDepartment("Kimyo");
uni.showDepartments();
