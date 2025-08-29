function author_print() {
  console.log("author_print -- getElementById - ", document.getElementById("title").textContent);
  console.log("author_print -- querySelector - ", document.querySelector("#title").textContent);
  console.log("author_print -- getElementsByName - ", document.getElementsByName("title").textContent);
  console.log("author_print -- getElementsByClassName - ", document.getElementsByClassName("title").textContent);



// const elems = document.getElementsByName("title");
// // 첫 번째 요소
// console.log(elems[0].textContent);
// // 두 번째 요소 값
// console.log(elems[1].textContent);
//  const elems1 = document.getElementsByClassName("title");
//   console.log(elems1[0].textContent); // 첫 번째
//   console.log(elems1[1].textContent); // 두 번째

}