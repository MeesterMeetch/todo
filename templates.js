var templates = {};

// single todo list item post
templates.post = [
  "<li class='post'> data-id'<%= _id %>'>",
  "<div class='checkbox'>",
  "<label>",
  "<input type='checkbox' value=''/>",
  "</label>",
  "</div>",
  "<hr>",
  "</li>"
].join("");
