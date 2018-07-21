$(function() {
  var menuContainer = $('nav'),
    dropDown = menuContainer.find('.dd-menu a');

  dropDown.on('click', function(e) {
    e.preventDefault();
    $t = $(this);
    if (
      $(this)
        .parent()
        .hasClass('opened')
    ) {
      $t.parent().removeClass('opened'); 
    } else {
      $t.parent().addClass('opened');
    }
  });
});
