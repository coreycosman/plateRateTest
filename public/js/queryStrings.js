const search = window.location.search.toString();

if (window.location.pathname === "/aboutme") {
  window.location.replace("/aboutme/all");
}
if (search === "?=%22description%22") {
  window.location.replace("/aboutme/description");
} else if (search === "?=%22tech%22") {
  window.location.replace("/aboutme/tech");
} else if (search === "?=%22techstack%22") {
  window.location.replace("/aboutme/stack");
} else if (search === "?=%22hobbies%22") {
  window.location.replace("/aboutme/hobbies");
} else if (search != "") {
  window.location.replace("/aboutme/all");
}
