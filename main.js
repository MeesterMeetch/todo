$(document).ready(function () {
  page.init();
});

var page = {
  url: "http://tiy-fee-rest.herokuapp.com/collections/mitch",
  init: function () {
    page.initLoading();
    page.initEvents();
  },

/////////////////////////////////////////////////////////////////

  //create task
  function createTodo(text){
      var markup = '<li class="post"><div class="checkbox"><label><input type="checkbox" value="" />'+ text +'</label></div></li>';
      $('#sortable').append(markup);
      $('.add-todo').val('');
  }



});
