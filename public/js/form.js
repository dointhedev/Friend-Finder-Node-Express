$(document).ready(function () {
  // Capture the form inputs
  findMatch();
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
      let isValid = true;
      $(".form-control").each(function() {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      $(".chosen-select").each(function() {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user"s data
      let matches = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          parseInt($("#q1").val()),
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
        ]
      };

      // AJAX post the data to the friends API.
      $.post("/api/friends", matches, function(data) {
      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      alert(`post was added: ${data}`) 
    });
  } else {
      alert("Please fill out all fields before submitting!");
    }
  });

  function findMatch(){
    alert('in findmatch');
    $.get("/api/friends", function(data) {
            // test to see if data gets received. 
           alert(`data Test ${JSON.stringify(data)}`);
          //const d = JSON.stringify(data);
        for (let i = 0; i < data.length; i++) {
          let e = data[i];
          //let scr = e.scores;
          alert(`data.name Test ${e.name}`);
          alert(`data.photo Test ${e.photo}`);
          $("#match-name").text(e.name);
          $("#match-img").attr("src", e.photo);

        // for (let s = 0; s < scr.length; s++) { 
        //   let sc =+ scr[s];
        //   alert(`getting this to calculate I ran out of time ${sc}`);
        // }
        }
        $("#results-modal").modal("toggle");
           // Show the modal with the best match
       
    });
  }
  
});

