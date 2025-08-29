// x va y koordinatalarni qabul qiluvchi Point nomli class yozing. 
// Shuningdek ushbu class ikki nuqta orasidagi masofani hisoblovchi 
// distance nomli static metodga ega bo'lsin.

//     Input:
//       let p1 = new Point(5, 5);
//       let p2 = new Point(9, 8);
//       console.log(Point.distance(p1, p2));

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static distance(p1, p2) {
    let dx = p2.x - p1.x
    let dy = p2.y - p1.y
    return Math.sqrt(dx * dx + dy * dy)
  }
}

let p1 = new Point(5, 5)
let p2 = new Point(9, 8)

console.log(Point.distance(p1, p2))
