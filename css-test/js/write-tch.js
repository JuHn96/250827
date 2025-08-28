// -------------------------------
// localStorage에 글쓴이 데이터 저장
// -------------------------------
const authors = ["홍길동", "김철수", "이영희"];
if (!localStorage.getItem("authors")) {
  localStorage.setItem("authors", JSON.stringify(authors));
}
// select에 옵션 추가
const authorSelect = document.getElementById("author");
const savedAuthors = JSON.parse(localStorage.getItem("authors"));
savedAuthors.forEach((name) => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  authorSelect.appendChild(option);
});
// -------------------------------
// Form 제출 이벤트
// -------------------------------
document.getElementById("postForm").addEventListener("submit", function (e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    alert("입력값을 확인해주세요!");
  } else {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    data.category = formData.getAll("category"); // 체크박스 여러 개
    console.log("제출 데이터:", JSON.stringify(data, null, 2));
    alert("게시물이 등록되었습니다!");
  }
});

document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 기본 제출 막기
  const elements = this.elements;
  console.log("===== Form Elements 상세 출력 =====");
  for (let el of elements) {
    if (!el.name && !el.id) continue; // name, id 둘 다 없으면 패스
    let info = `[${el.tagName}] id="${el.id}" name="${el.name}" type="${el.type}"`;
    if (el.type === "checkbox") {
      info += ` | value="${el.value}" | checked=${el.checked}`;
    } else if (el.type === "radio") {
      info += ` | value="${el.value}" | checked=${el.checked}`;
    } else {
      info += ` | value="${el.value}"`;
    }
    console.log(info);
  }
  console.log("================================");
  author_print();
});

function author_print() {
  console.log(
    "author_print -- getElementById - ",
    document.getElementById("title").value
  ); /*주로 쓴다고 생각 나머지는 상황이나 필요에 따라서 사용*/
  console.log(
    "author_print -- getElementsByName - ",
    document.getElementsByName("title").value
  );
  console.log(
    "author_print -- getElementsByClassName - ",
    document.getElementsByClassName("title").value
  );
  console.log(
    "author_print -- querySelector - ",
    document.querySelector("#title").value
  );
}
