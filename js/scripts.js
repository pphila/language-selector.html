$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    event.preventDefault();
    
    const experience = $("#experience").val();
    const interest = $("input:radio[name=interest]:checked").val();
    const trueFalse = $("input:radio[name=torf]:checked").val();
    const processing = $("input:radio[name=processing]:checked").val();
    const movies = $("input:radio[name=movies]:checked").val();
  })
});

