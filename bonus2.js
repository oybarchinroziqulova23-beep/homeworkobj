// Foydalanuvchi prompt orqali bank ish kuni kiritadi (masalan, 60). 
// Siz foydalanuvchi kiritgan bank ishkunidan kelib chiqib yilning qaysi oy 
// va qaysi sanasida aytilgan kun kelishini hisoblovchi funksiya yozing. 
// Bank ish kunida shanba va yakshanba dam olish kuni sifatida hisoblanmaydi.

function getBankWorkday(dayNumber) {
  let year = new Date().getFullYear()
  let startDate = new Date(year, 0, 1)
  startDate.setDate(startDate.getDate() + (dayNumber - 1))
  let month = startDate.getMonth() + 1
  let day = startDate.getDate()
  return `${dayNumber}-bank ish kuni ${year}-yil ${month}-oy ${day}-sana`;
}
console.log(getBankWorkday(60));  
