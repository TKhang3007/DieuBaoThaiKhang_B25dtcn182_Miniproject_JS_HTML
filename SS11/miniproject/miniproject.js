let students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, gpa: 9.0, status: "active" },
  { id: 2, name: "Trần Thị B", age: 17, gpa: 6.9, status: "inactive" },
  { id: 3, name: "Lê Văn C", age: 22, gpa: 8.5, status: "active" },
  { id: 4, name: "Phạm Thị D", age: 18, gpa: 7.1, status: "active" }
];

const showMenu = () =>
    +prompt(`
===== HỆ THỐNG QUẢN LÝ SINH VIÊN =====
        1. Create Student
        2. Read All Students
        3. Filter Scholarship Candidates
        4. Update Student Profile
        5. Delete Record
        6. Compliance Verification
        7. Academic Statistics
        8. Data Normalization
        0. Exit
Nhập lựa chọn của bạn:`);

const formatStudent = student => {
  return `ID: ${student.id} | Name: ${student.name} | Age: ${student.age} | GPA: ${student.gpa} | Status: ${student.status}`;
}

const formatList = (list, title) => {
  if (list.length === 0) {
    return `${title}\n(Không tìm thấy bản ghi)`;
  } 

  let result = `${title}\n${"-".repeat(60)}\n`;

  list.forEach(student => {
    result += formatStudent(student) + "\n";
  });

  result += "-".repeat(60);
  return result;
};

// case 1
const createStudent = () => {
  const name = prompt("Nhập tên sinh viên:");
  const age = +prompt("Nhập tuổi:");
  const gpa = +prompt("Nhập GPA (0 - 10):");
  const status = prompt("Nhập trạng thái (active/inactive):");

  if (!name || name.trim() === "") {
    return alert("Tên không hợp lệ!");
  }

  if (!Number.isInteger(age) || age <= 0) {
    return alert("Tuổi không hợp lệ!");
  }

  if (isNaN(gpa) || gpa < 0 || gpa > 10) {
    return alert("GPA không hợp lệ!");
  }

  if (status !== "active" && status !== "inactive") {
    return alert("Trạng thái không hợp lệ!");
  }

  const newStudent = {
    id: Date.now(),
    name: name.trim(),
    age: age,
    gpa: gpa,
    status: status
  };

  students.push(newStudent);

  alert("Sinh viên được tạo thành công!");
};

// case 2
const readAllStudents = () => {
    alert(formatList(students, "===== TẤT CẢ SINH VIÊN ====="));
}


// case 3
const filterScholarship = () => {
  const candidates = students.filter(
    student => student.gpa > 8.0
  );

  alert(formatList(candidates,"===== ỨNG VIÊN HỌC BỔNG (ĐIỂM TRUNG BÌNH > 8.0) ====="));
};

// case 4
const updateStudent = () => {
  const id = +prompt("Nhập mã sinh viên để cập nhật:");
  const student = students.find(s => s.id === id);

  if (!student) {
    return alert("Không tìm thấy mã sinh viên!");
  }

  const newName = prompt("Nhập tên mới");
  const newGpa = +prompt("Nhập GPA mới:");

  if (newName && newName.trim() !== "")
    student.name = newName.trim();

  if (!isNaN(newGpa) && newGpa >= 0 && newGpa <= 10) {
    student.gpa = newGpa;
  }

  alert("Cập nhật sinh viên thành công!");
};

// case 5
const deleteStudent = () => {
  const id = +prompt("Nhập mã sinh viên để xóa:");
  const exists = students.some(s => s.id === id);

  if (!exists) {
    return alert("Không tìm thấy mã sinh viên!");
  }

  students = students.filter(s => s.id !== id);

  alert("Xóa sinh viên thành công!");
};

// case 6
const complianceVerification = () => {
  const hasMinor = students.some(s => s.age < 18);
  const allActive = students.every(s => s.status === "active");

  alert(
    `===== XÁC MINH TUÂN THỦ =====

Có học sinh dưới 18 tuổi: ${hasMinor}
Tất cả học sinh đang hoạt động: ${allActive}`
  );
};

// case 7
const academicStatistics = () => {
  if (students.length === 0)
    return alert("Không có học sinh nào!");

  const totalGpa = students.reduce((sum, student) => 
    sum + student.gpa,0);

  const average = totalGpa / students.length;

  alert(
    `===== THỐNG KÊ HỌC THUẬT =====

Điểm trung bình GPA: ${average.toFixed(2)}`
  );
};

// case 8
const dataNormalization = () => {
    const normalizedList = students.map(student => {

    });

};

let running = true;
while (running) {
    const choice = showMenu();

    switch (choice) {
      case 1:
        createStudent();
        break;
      case 2:
        readAllStudents();
        break;
      case 3:
        filterScholarship();
        break;
      case 4:
        updateStudent();
        break;
      case 5:
        deleteStudent();
        break;
      case 6:
        complianceVerification();
        break;
      case 7:
        academicStatistics();
        break;
      case 8:
        dataNormalization();
        break;
      case 0:
        running = false;
        alert("Đang thoát hệ thống...");
        break;
      default:
        alert("Lựa chọn không hợp lệ, vui lòng chọn từ 0-8");
        break;
    }
}