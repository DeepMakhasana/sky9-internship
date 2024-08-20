import { getLocalStorage, setLocalStorage } from "./utils.js";

$(document).ready(function () {
  // load team member
  function ListTeamMember() {
    const members = getLocalStorage("teamMember");
    if (members) {
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

  // team members
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

    if (members) {
      const payload = [...members, newTeamMember];
      setLocalStorage("teamMember", payload);
    } else {
      setLocalStorage("teamMember", [newTeamMember]);
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

// delete team member
$("#memberList tbody").on("click", (e) => {
  console.log(e.target);
  if (e.target.id === "delete-member") {
    deleteTeamMember(e);
  } else if (e.target.id === "edit-member") {
    editTeamMember(e);
  }
});

function deleteTeamMember(e) {
  const deleteId = e.target.getAttribute("data-temp");
  const members = getLocalStorage("teamMember");
  console.log(deleteId, members);

  const payload = members.filter((member) => member.id != deleteId);

  $(deleteId).remove();
  setLocalStorage("teamMember", payload);
}

function editTeamMember(e) {}
