document.addEventListener("DOMContentLoaded", function() {
  var stickyEls = document.querySelectorAll(".sticky");
  Array.prototype.forEach.call(stickyEls, function(el) {
      Stickyfill.add(el);
  });
});