const termSelect = document.getElementById("termSelect");
const subjectSelect = document.getElementById("subjectSelect");
const courseNumber = document.getElementById("courseNumber");

const clearButton = document.getElementById("clearButton");
const searchButton = document.getElementById("searchButton");

clearButton.addEventListener("click", () => {
  termSelect.selectedIndex = 0;
  subjectSelect.selectedIndex = 0;
  courseNumber.value = "";
});

searchButton.addEventListener("click", () => {
  const criteria = {
    term: termSelect.value || "Any term",
    subject: subjectSelect.value || "Any subject",
    courseNumber: courseNumber.value.trim() || "Any number"
  };

  sessionStorage.setItem("searchCriteria", JSON.stringify(criteria));
  window.location.href = "results.html";
});
