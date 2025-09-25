// // // Đếm ngược đến ngày đặc biệt
// // // Bạn sửa `targetDate` thành ngày bạn muốn đếm ngược đến (năm-tháng-ngày)
// // const targetDate = new Date("2025-12-25T00:00:00");  // ví dụ: 25/12/2025
// // const startDate = date ("2022-")
// // function updateCountdown() {
// //   const now = new Date();
// //   const diff = targetDate - now;

// //   if (diff < 0) {
// //     document.getElementById("countdownTimer").innerHTML = "🎉 Đã đến ngày đặc biệt!";
// //     return;
// //   }

// //   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
// //   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
// //   const minutes = Math.floor((diff / (1000 * 60)) % 60);
// //   const seconds = Math.floor((diff / 1000) % 60);

// //   document.getElementById("days").textContent = days;
// //   document.getElementById("hours").textContent = hours;
// //   document.getElementById("minutes").textContent = minutes;
// //   document.getElementById("seconds").textContent = seconds;
// // }

// // setInterval(updateCountdown, 1000);
// // updateCountdown();
// // Ngày bắt đầu yêu (YYYY, MM-1, DD)
// const startDate = new Date(2025, 9, 11); // tháng 10 là 9 vì đếm từ 0
// const popup = document.getElementById('anniversaryPopup');

// function updateCounter() {
//   const now = new Date();
//   let diffMs = now - startDate;

//   if(diffMs < 0){
//     // Chưa đến ngày bắt đầu
//     document.getElementById('days').textContent = "0";
//     document.getElementById('hours').textContent = "0";
//     document.getElementById('minutes').textContent = "0";
//     document.getElementById('seconds').textContent = "0";
//     popup.style.display = 'none';
//     return;
//   }

//   // Tính tổng ngày yêu
//   const totalDays = Math.floor(diffMs / (1000*60*60*24));

//   // Tính giờ, phút, giây
//   const totalHours = Math.floor(diffMs / (1000*60*60));
//   const totalMinutes = Math.floor(diffMs / (1000*60));
//   const totalSeconds = Math.floor(diffMs / 1000);

//   // Hiển thị thời gian từng đơn vị
//   document.getElementById('days').textContent = totalDays;
//   document.getElementById('hours').textContent = totalHours % 24;
//   document.getElementById('minutes').textContent = Math.floor((totalMinutes % 60));
//   document.getElementById('seconds').textContent = Math.floor((totalSeconds % 60));

//   // Kiểm tra kỷ niệm đặc biệt
//   checkAnniversary(totalDays, now);
// }

// function checkAnniversary(days, now) {
//   // 1 tháng ~ 30 ngày
//   const isMonth = days > 0 && days % 30 === 0;
//   const isYear = days > 0 && days % 365 === 0;
//   const isThousand = days > 0 && days % 1000 === 0;

//   if(isMonth || isYear || isThousand){
//     let msg = 'Hôm nay là ngày kỷ niệm ';
//     if(isThousand) msg += `tròn ${days} ngày yêu! 🎉❤️`;
//     else if(isYear) msg += `tròn ${days / 365} năm yêu! 🎉❤️`;
//     else if(isMonth) msg += `tròn ${days / 30} tháng yêu! 🎉❤️`;

//     popup.textContent = msg;
//     popup.style.display = 'block';
//   } else {
//     popup.style.display = 'none';
//   }
// }

// // Khi click popup hiện hiệu ứng trái tim đập
// popup.addEventListener('click', e => {
//   createHeart(e.clientX, e.clientY);
// });

// // Tạo trái tim ở vị trí click, tự động biến mất
// function createHeart(x, y) {
//   const heart = document.createElement('div');
//   heart.classList.add('heart');
//   heart.style.left = `${x}px`;
//   heart.style.top = `${y}px`;

//   document.body.appendChild(heart);

//   setTimeout(() => {
//     heart.remove();
//   }, 2000);
// }

// // Cập nhật mỗi giây
// setInterval(updateCounter, 1000);

// // Chạy lần đầu
// updateCounter();
// 💖 Cấu hình ngày bắt đầu yêu nhau
const loveStartDate = new Date(2022, 9, 11); // 11/10/2022 (JS: tháng 9 = tháng 10)

// 🗓️ Hiển thị "Từ ngày: dd/mm/yyyy"
function showStartDate() {
  const day = loveStartDate.getDate().toString().padStart(2, '0');
  const month = (loveStartDate.getMonth() + 1).toString().padStart(2, '0');
  const year = loveStartDate.getFullYear();

  const formatted = `${day}/${month}/${year}`;
  document.getElementById("startDate").textContent = formatted;
}

// 💕 Tính số ngày bên nhau + năm/tháng/ngày
function showLoveDuration() {
  const now = new Date();
  const diffTime = now - loveStartDate;
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Tính năm/tháng/ngày
  let years = now.getFullYear() - loveStartDate.getFullYear();
  let months = now.getMonth() - loveStartDate.getMonth();
  let days = now.getDate() - loveStartDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Thêm dòng hiển thị vào sau danh sách mốc thời gian
  const timelineSection = document.querySelector(".timeline");
  const durationPara = document.createElement("p");
  durationPara.style.fontWeight = "bold";
  durationPara.textContent = `❤️ Chúng mình đã bên nhau được: ${years} năm, ${months} tháng, ${days} ngày (${totalDays} ngày tổng cộng)`;

  timelineSection.insertBefore(durationPara, document.getElementById("timelineList"));
}

// ⏳ Đếm ngược đến một ngày đặc biệt (ví dụ: kỷ niệm 3 năm)
function updateCountdown() {
  const targetDate = new Date(2025, 9, 11); // 11/10/2025 — kỷ niệm 3 năm
  const now = new Date();
  const diff = targetDate - now;

  if (diff < 0) {
    document.getElementById("countdownTimer").innerHTML = "🎉 Đã đến ngày đặc biệt!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// 🟢 Gọi các hàm khi trang tải
showStartDate();
showLoveDuration();
updateCountdown();
setInterval(updateCountdown, 1000); // Cập nhật mỗi giây
