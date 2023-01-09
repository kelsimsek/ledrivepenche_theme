// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let nav_label = document.getElementsByClassName("nav-label");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    Array.prototype.forEach.call(nav_label, function(lbl) {
        lbl.style.marginTop = "-130px";
        lbl.style.setProperty('color', 'white', 'important');
    });
  } else {
    Array.prototype.forEach.call(nav_label, function(lbl) {
        lbl.style.marginTop = "0";
        lbl.style.setProperty('color', '#DF8243', 'important');
    });
  }
}