const description = $(".description")
const tech = $(".tech")
const techStack = $(".stack")
const hobbies = $(".hobbies")

description.on("click", function(e) {
  e.preventDefault();
  $("[name=btn-1]").attr('disabled', true);
  $("#btn-1").hide();
  $.get('/aboutme/description')
    .then(data => $(".description").append(data))
    .catch(e => console.log(e))
})

tech.on("click", function(e) {
  e.preventDefault();
  $("[name=btn-2]").attr('disabled', true);
  $("#btn-2").hide();
  $.get('/aboutme/tech')
    .then(data => $(".tech").replaceWith(data))
    .catch(e => console.log(e))
})

techStack.on("click", function(e) {
  e.preventDefault();
  $("[name=btn-3]").attr('disabled', true);
  $("#btn-3").hide();
  $.get('/aboutme/stack')
    .then(data => $(".stack").replaceWith(data))
    .catch(e => console.log(e))
})

hobbies.on("click", function(e) {
  e.preventDefault();
  $("[name=btn-4]").attr('disabled', true);
  $("#btn-4").hide();
  $.get('/aboutme/hobbies')
    .then(data => $(".hobbies").replaceWith(data))
    .catch(e => console.log(e))
})
