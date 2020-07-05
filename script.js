window.onload = () => {
  if (!localStorage.getItem("Departments")) {
    const departments = [];
    localStorage.setItem("Departments", JSON.stringify(departments));
    loadData();
  } else {
    loadData();
  }
  function clear() {
    document.getElementById("list-of-departments").innerHTML = "";
  }

  function loadData() {
    clear();
    let data = JSON.parse(localStorage.getItem("Departments"));
    let path = document.getElementById("list-of-departments");
    if (data.length < 1) {
      let text = document.createElement("h3");
      text.innerText = "No one department, please, create another one";

      path.appendChild(text);
    } else {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element.name);
        let depName = element.name;
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = depName;
        path.appendChild(li);
      }
    }
  }

  document
    .getElementById("btn-create-department")
    .addEventListener("click", () => {
        let data = JSON.parse(localStorage.getItem("Departments"));
        let depName = document.querySelector("#new-department-name").value;
        let newDepartment = {
        name: depName,
        employee: [],
      };
      data.push(newDepartment);

      localStorage.setItem("Departments", JSON.stringify(data));
      loadData();
    });

    document.querySelector("#clearData").addEventListener("click", () => {
        localStorage.clear();
        const departments = [];
        localStorage.setItem("Departments", JSON.stringify(departments));
        loadData();
  });


};

$("#exampleModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data("whatever"); // Extract info from data-* attributes
  var modal = $(this);
});
