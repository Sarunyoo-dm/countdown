const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear(); //ดึงเวลาปีปัจจุบัน
const newYear = new Date(`January 01 ${currentYear+1} 00:00:00`);

function updateCoundDown(){
        const currentTime = new Date();
        const diff = newYear - currentTime;
        const d = Math.floor(diff/1000/60/60/24); // มิลลินาที/นาที/วินาที/ชั่วโมง = จำนวนวัน
        const h = Math.floor(diff/1000/60/60)%24;
        const m = Math.floor(diff/1000/60)%60;
        const s = Math.floor(diff/1000)%60;
    
        days.innerHTML = d;
        hours.innerHTML = h<10 ? '0' +h:h; //ถ้า h <10 ให้ใส่ 0+h : ถ้าไม่ false แสดง h เฉยๆ ไม่มี 0 นำหน้า
        minutes.innerHTML = m<10 ? '0' +m:m;
        seconds.innerHTML = s<10 ? '0' +s:s;
        
    }

setInterval(updateCoundDown,1000);