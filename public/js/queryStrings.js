const search = window.location.search.toString();

if (search === "?=%22description%22") {
  $.get('/aboutme/description')
    .then(data => $(".description-response").replaceWith(data))
    .then(() => $("#btn-1").hide())
    .catch(e => console.log(e))
  }
  else if (search === "?=%22tech%22") {
    $.get('/aboutme/tech')
      .then(data => $(".tech-response").replaceWith(data))
      .then(() => $("#btn-2").hide())
      .catch(e => console.log(e))

  } else if (search === "?=%22techstack%22") {
    $.get('/aboutme/stack')
      .then(data => $(".stack-response").replaceWith(data))
      .then(() => $("#btn-3").hide())
      .catch(e => console.log(e))

  } else if (search === "?=%22hobbies%22") {
    $.get('/aboutme/hobbies')
      .then(data => $(".hobbies-response").replaceWith(data))
      .then(() => $("#btn-4").hide())
      .catch(e => console.log(e))

  } else if (search != '') {
    $.get('/aboutme/all')
      .then(data => $(".all").replaceWith(data))
      .then(() => {
        $("#btn-1, #btn-2, #btn-3, #btn-4").hide();
      })
      .catch(e => console.log(e))
  }
