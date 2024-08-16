$(document).ready(function () {
  $(".draggable-container")
    .sortable({
      connectWith: ".draggable-container",
      opacity: "0.95",
      update: function (event) {
        console.log(event);
      },
    })
    .disableSelection();
});
