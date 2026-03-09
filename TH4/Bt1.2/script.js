let students = [];
let currentSort = 'none';

const nameInput = document.getElementById('txtName');
const scoreInput = document.getElementById('txtScore');
const btnAdd = document.getElementById('btnAdd');
const tableBody = document.getElementById('studentTableBody');
const statsBoard = document.getElementById('statsBoard');

const txtSearch = document.getElementById('txtSearch');
const selRank = document.getElementById('selRank');
const colScore = document.getElementById('colScore');
const sortIcon = document.getElementById('sortIcon');

function getRank(score) {
    if (score >= 8.5) return "Giỏi";
    if (score >= 7.0) return "Khá";
    if (score >= 5.0) return "Trung bình";
    return "Yếu";
}

function applyFilters() {
    const keyword = txtSearch.value.toLowerCase().trim();
    const rankFilter = selRank.value;

    let filteredStudents = students.filter(s => {
        const matchesName = s.name.toLowerCase().includes(keyword);
        const matchesRank = (rankFilter === 'all' || getRank(s.score) === rankFilter);
        return matchesName && matchesRank;
    });

    if (currentSort === 'asc') {
        filteredStudents.sort((a, b) => a.score - b.score);
    } else if (currentSort === 'desc') {
        filteredStudents.sort((a, b) => b.score - a.score);
    }

    renderTable(filteredStudents);
}

function renderTable(dataList) {
    tableBody.innerHTML = '';
    let totalScore = 0;

    if (dataList.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" class="no-data">Không có kết quả</td></tr>`;
    } else {
        dataList.forEach((student, index) => {
            const rank = getRank(student.score);
            const isLowScore = student.score < 5.0 ? 'class="warning"' : '';
            totalScore += student.score;

            const row = `
                <tr ${isLowScore}>
                    <td>${index + 1}</td>
                    <td>${student.name}</td>
                    <td>${student.score.toFixed(1)}</td>
                    <td>${rank}</td>
                    <td><button class="btn-delete" data-id="${student.id}">Xóa</button></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    const avgScore = dataList.length > 0 ? (totalScore / dataList.length).toFixed(2) : 0;
    statsBoard.innerText = `Tổng số sinh viên: ${dataList.length} | Điểm trung bình: ${avgScore}`;
}

function addStudent() {
    const name = nameInput.value.trim();
    const score = parseFloat(scoreInput.value);

    if (name === "" || isNaN(score) || score < 0 || score > 10) {
        alert("Vui lòng nhập họ tên và điểm hợp lệ (0-10)!");
        return;
    }

    students.push({ id: Date.now(), name, score });
    
    nameInput.value = '';
    scoreInput.value = '';
    nameInput.focus();
    
    applyFilters();
}

btnAdd.addEventListener('click', addStudent);
scoreInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addStudent(); });

txtSearch.addEventListener('input', applyFilters);
selRank.addEventListener('change', applyFilters);

colScore.addEventListener('click', () => {
    if (currentSort === 'none' || currentSort === 'desc') {
        currentSort = 'asc';
        sortIcon.innerText = '▲';
    } else {
        currentSort = 'desc';
        sortIcon.innerText = '▼';
    }
    applyFilters();
});

tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const idToDelete = parseInt(e.target.getAttribute('data-id'));
        students = students.filter(s => s.id !== idToDelete);
        applyFilters();
    }
});