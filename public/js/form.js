$(document).ready(function () {
  // Capture the form inputs
  let urSum = 0;
  let sum = 0;
  let name = '';

  $("#submit").on("click", function (event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
      let isValid = true;
      $(".form-control").each(function () {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      $(".chosen-select").each(function () {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    // let result = scores.split(',').map(function(i){
    //   return parseInt(i, 10);
    // });
    // If all required fields are filled
    if (validateForm()) {

      let scores = [
        parseInt($("#q1").val()),
        parseInt($("#q2").val()),
        parseInt($("#q3").val()),
        parseInt($("#q4").val()),
        parseInt($("#q5").val()),
        parseInt($("#q6").val()),
        parseInt($("#q7").val()),
        parseInt($("#q8").val()),
        parseInt($("#q9").val()),
        parseInt($("#q10").val())
      ];

      let nmArr = scores;
      urSum = nmArr.reduce(add, 0);

      function add(a, b) {
        return a + b;
      }
      name = $("#name").val();
      // console.log(nmArr);
      // console.log(scores);
      // console.log(urSum);
      // Create an object for the user"s data
      let matches = {
        name: name,
        photo: $("#photo").val(),
        scores: scores
      };

      // AJAX post the data to the friends API.
      $.post("/api/friends", matches, function (data) {
        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        alert(`post was added: ${data}`);
        findMatch();
      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });

  function findMatch() {
    $.get("/api/friends", function (data) {
      // test to see if data gets received. 
      //alert(`data Test ${JSON.stringify(data)}`);
      //const d = JSON.stringify(data);
      for (let i = 0; i < data.length; i++) {
        let e = data[i];
        let nArr = e.scores;
        let numArr = [];
        nArr.forEach(e => {
          numArr.push(parseInt(e));
        });
        sum = numArr.reduce(add, 0);
        function add(a, b) {
          return a + b;
        }
        //alert(`New Array ${JSON.stringify(numArr)}`);
        console.log(`Your Sum ${urSum}`);
        console.log(`A partners Sum ${sum}`);
        if ((urSum >= sum) && ( e.name !== name )) {
          $("#match-name").text(e.name);
          $("#match-img").attr("src", e.photo);
          $("#results-modal").modal("toggle");
        } else {
          console.log('No matches found')
        }
        //let scr = e.scores;
        // alert(`data.name Test ${e.name}`);
        // alert(`data.photo Test ${e.photo}`);
        //alert(`score sum test ${sum}`);

        // Show the modal with the best match
      }
    });
  }
});