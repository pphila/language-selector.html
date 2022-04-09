$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    event.preventDefault();
    
    const experienceInput = parseInt($("#experience").val());
    const interestInput = $("input:radio[name=interest]:checked").val();
    const trueFalseInput = $("input:radio[name=torf]:checked").val();
    const procInput = $("input:radio[name=processing]:checked").val();
    const moviesInput = $("input:radio[name=movies]:checked").val();

    if (experienceInput + interestInput + trueFalseInput + procInput + moviesInput =)
  })
});

