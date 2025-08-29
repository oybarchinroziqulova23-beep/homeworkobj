// Foydalanuvchi o'z ish kunining boshlanish va tugash vaqtini kiritadi. 
// Siz bu ma'lumotlardan foydalangan holda u qancha vaqt ishlaganini 
// (soat va daqiqalar ko'rinishida) hisoblaydigan funksiyani yozing. 
// Agar ishning tugash vaqti boshlanish vaqtidan oldin bo'lsa,
//  "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas" matnini qaytaring. 
// Kirish ma'lumotlari: Boshlanish va tugash vaqtlari formati: HH:MM Misol: 
// console.log(calculateWorkingHours("09:00", "17:30")); 
// "Ish vaqti: 8 soat 30 daqiqa" console.log(calculateWorkingHours("10:00", "09:00"));
//  "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas"

function calculateWorkingHours(startTime, endTime) {
  let [startHour, startMinute] = startTime.split(":").map(Number)
  let [endHour, endMinute] = endTime.split(":").map(Number)

  let startTotal = startHour * 60 + startMinute
  let endTotal = endHour * 60 + endMinute

  if (endTotal < startTotal) {
    return "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas"
  }
  let diff = endTotal - startTotal
  let hours = Math.floor(diff / 60)
  let minutes = diff % 60
  return `Ish vaqti: ${hours} soat ${minutes} daqiqa`
}

console.log(calculateWorkingHours("09:00", "17:30"))
console.log(calculateWorkingHours("10:00", "09:00")) 
