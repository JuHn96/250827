const todoList = document.getElementById("todoList");
let draggedItem = null;
// 기본 데이터
const defaultTasks = [
  "출근 / 이메일 확인",
  "팀 미팅",
  "API 기능 개발",
  "코드 리뷰",
  ":포크와_나이프: 점심 식사",
  "DB 마이그레이션 준비",
  "프론트엔드 버그 수정",
  "디자인팀 협업 미팅",
  "테스트 코드 작성",
  "보고서 정리",
  ":압정: 오늘 18시 퇴근 후 운동",
];
// localStorage에서 불러오기
function loadTasks() {
  const saved = localStorage.getItem("todoList");
  return saved ? JSON.parse(saved) : defaultTasks;
}
// localStorage에 저장
function saveTasks() {
  const tasks = [...todoList.querySelectorAll(".task")].map(
    (el) => el.textContent
  );
  localStorage.setItem("todoList", JSON.stringify(tasks));
}
// 리스트 렌더링
function renderTasks(tasks) {
  todoList.innerHTML = "";
  tasks.forEach((taskText) => {
    const taskEl = document.createElement("div");
    taskEl.className = "task";
    taskEl.draggable = true;
    taskEl.textContent = taskText;
    todoList.appendChild(taskEl);
  });
}
// 초기화
renderTasks(loadTasks());
// 이벤트 바인딩 (이벤트 위임)
todoList.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("task")) {
    draggedItem = e.target;
    e.target.style.opacity = "0.5";
  }
});
todoList.addEventListener("dragend", (e) => {
  if (e.target.classList.contains("task")) {
    draggedItem = null;
    e.target.style.opacity = "1";
    saveTasks(); // dragend 시 저장
  }
});
todoList.addEventListener("dragover", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target && target !== draggedItem && target.classList.contains("task")) {
    target.classList.add("drag-over");
  }
});
todoList.addEventListener("dragleave", (e) => {
  if (e.target.classList.contains("task")) {
    e.target.classList.remove("drag-over");
  }
});
todoList.addEventListener("drop", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target && target !== draggedItem && target.classList.contains("task")) {
    target.classList.remove("drag-over");
    todoList.insertBefore(draggedItem, target);
  }
});
