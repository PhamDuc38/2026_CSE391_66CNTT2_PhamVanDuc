
let employees = [
    { id: 1, conName: "Al", email: "anpb@gmail.com", speakers: "Prof.James", location: "Lecture" },
    { id: 2, conName: "Cloud", email: "nhinh@gmail.com", speakers: "Ms.Laura", location: "Audisirium" },
    { id: 3, conName: "Ux", email: "phongch@gmail.com", speakers: "D.Morrison", location: "Tlu" },
    { id: 4, conName: "Modern", email: "lamphan@gmail.com", speakers: "Df.Sarah", location: "IT central" },
    { id: 5, conName: "BigData", email: "longle@gmail.com", speakers: "dr.emyly", location: "Central" }
];

// Lấy các phần tử từ giao diện
const tableBody = document.getElementById('tableBody');
const modal = document.getElementById('employeeModal');
const btnOpen = document.getElementById('btnOpenModal');
const btnCancel = document.getElementById('btnCancel');
const closeBtn = document.querySelector('.close-btn');
const form = document.getElementById('employeeForm');

function renderTable() {
    tableBody.innerHTML = ""; 
    employees.forEach((emp, index) => {
        const row = `
            <tr>
                <td>${emp.conName}</td>
                <td>${emp.speakers}</td>
                <td>${emp.email}</td>
                <td>${emp.date}</td>
                <td>${emp.location}</td>
                
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}



// --- XỬ LÝ ĐÓNG/MỞ POP-UP ---
btnOpen.onclick = () => modal.style.display = "block";

const closeModal = () => {
    modal.style.display = "none";
    form.reset(); // Xóa sạch dữ liệu ô nhập
    document.querySelectorAll('.error').forEach(e => e.innerText = ""); // Xóa thông báo lỗi
};

btnCancel.onclick = closeModal;
closeBtn.onclick = closeModal;



// --- KIỂM TRA DỮ LIỆU (VALIDATION) VÀ THÊM MỚI ---
form.onsubmit = (e) => {
    e.preventDefault(); 
    const conName = document.getElementById('conName').value.trim();
    const email = document.getElementById('email').value.trim();
    const speakers = document.getElementById('speakers').value.trim();
    const location = document.getElementById('location').value.trim();
    const date =  document.getElementById('date').value.trim();

    let isValid = true;

    // Reset lỗi
    document.querySelectorAll('.error').forEach(e => e.innerText = "");

    if (!conName) {
        document.getElementById('errConName').innerText = "Please Input";
        isValid = false;
    } else if (conName.length > 60) {
        document.getElementById('errConName').innerText = "Limit 60";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('errEmail').innerText = "Please Input Email";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('errEmail').innerText = "Fail Email";
        isValid = false;
    }

    const dateRegex = /^\d{10}$/;
    if (!date) {
        document.getElementById('errDate').innerText = "Please Input";
        isValid = false;
    } else if (!dateRegex.test(date)) {
        document.getElementById('errDate').innerText = "Fail Date";
        isValid = false;
    }

    if (!location) {
        document.getElementById('errLocation').innerText = "Please Input";
        isValid = false;
    }

    if (!speakers) {
        document.getElementById('errSpeakers').innerText = "Please Input";
        isValid = false;
    }

    // NẾU HỢP LỆ -> THÊM VÀO MẢNG
    if (isValid) {
        const newEmp = {
            id: Date.now(), 
            conName: conName,
            email: email,
            date: date,
            location: location,
            speakers: speakers
        };

        employees.push(newEmp); // Lưu vào danh sách
        renderTable(); // Cập nhật lại giao diện bảng
        alert("Thêm nhân sự thành công!");
        closeModal();
    }
};

// Chạy hiển thị bảng lần đầu khi mở trang
renderTable();