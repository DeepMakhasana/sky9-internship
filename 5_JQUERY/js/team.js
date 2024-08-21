import { getLocalStorage, setLocalStorage } from "./utils.js";

$(document).ready(function () {
  // load team member
  function ListTeamMember() {
    const members = getLocalStorage("teamMember");
    if (members && members.length != 0) {
      members.forEach((member, i) => {
        $("#memberList tbody").append(`<tr id=${member.id}>
                <td scope="row">${i + 1}</td>
                <td>${member.name}</td>
                <td>${member.email}</td>
                <td>
                  <button class="btn btn-outline-primary btn-sm" data-temp=${member.id} id="edit-member" >edit</button>
                  <button class="btn btn-outline-primary btn-sm" data-temp=${
                    member.id
                  } id="delete-member" >delete</button>
                </td>
              </tr>`);
      });
    } else {
      $("#memberList tbody").append(`<tr>
                <td colspan="4" class="text-center text-black-50">No any member in team</td>
              </tr>`);
    }
  }
  ListTeamMember();

  // when modal open using add team member btn hide edit btn
  $("#openModel").on("click", () => {
    $("#addMember").css({ display: "block" });
    $("#editMember").css({ display: "none" });
  });

  // add team members
  $("#addMember").on("click", () => {
    addTeamMember();
  });

  function addTeamMember() {
    const newTeamMember = {
      id: Date.now(),
      name: $("#memberName").val(),
      email: $("#memberEmail").val(),
    };
    console.log("newTeamMember: ", newTeamMember);
    const members = getLocalStorage("teamMember");

    console.log("members: ", members);

    if (members && members.length != 0) {
      const payload = [...members, newTeamMember];
      setLocalStorage("teamMember", payload);
    } else {
      setLocalStorage("teamMember", [newTeamMember]);
      $("#memberList tbody tr").remove();
    }

    $("#memberList tbody").append(`<tr id=${newTeamMember.id}>
                <td scope="row">${members.length + 1}</td>
                <td>${newTeamMember.name}</td>
                <td>${newTeamMember.email}</td>
                <td>
                  <button class="btn btn-outline-primary btn-sm" data-temp=${
                    newTeamMember.id
                  } id="edit-member" >edit</button>
                  <button class="btn btn-outline-primary btn-sm" data-temp=${
                    newTeamMember.id
                  } id="delete-member" >Delete</button>
                </td>
              </tr>`);

    // cleanup
    $("#memberName").val("");
    $("#memberEmail").val("");
    $("#newMember").modal("hide");
  }
});

// delete and edit team member event
$("#memberList tbody").on("click", (e) => {
  console.log(e.target);
  if (e.target.id === "delete-member") {
    deleteTeamMember(e);
  } else if (e.target.id === "edit-member") {
    editTeamMember(e);
  }
});

// delete member
function deleteTeamMember(e) {
  const deleteId = e.target.getAttribute("data-temp");
  const members = getLocalStorage("teamMember");
  console.log(deleteId, members);

  const payload = members.filter((member) => member.id != deleteId);

  $(e.target).parents("tr").remove();
  if (payload.length === 0) {
    $("#memberList tbody").append(`<tr>
                <td colspan="4" class="text-center text-black-50">No any member in team</td>
              </tr>`);
  }
  setLocalStorage("teamMember", payload);
}

// edit member detail
function editTeamMember(e) {
  const editId = e.target.getAttribute("data-temp");
  const members = getLocalStorage("teamMember");

  const editMember = members.find((member) => member.id == editId);

  $("#memberName").val(editMember.name);
  $("#memberEmail").val(editMember.email);

  $("#newMember").modal("show");
  $("#editMember").css({ display: "block" });
  $("#addMember").css({ display: "none" });

  $("#editMember").on("click", () => {
    const updatedMember = members.map((member) => {
      if (member.id == editId) {
        return {
          ...member,
          name: $("#memberName").val(),
          email: $("#memberEmail").val(),
        };
      }
      return member;
    });

    $(e.target).parents("tr").children("td:nth-child(2)").text($("#memberName").val());
    $(e.target).parents("tr").children("td:nth-child(3)").text($("#memberEmail").val());

    setLocalStorage("teamMember", updatedMember);
    $("#memberName").val("");
    $("#memberEmail").val("");
    $("#newMember").modal("hide");
  });
}
