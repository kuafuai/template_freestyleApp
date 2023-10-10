document.addEventListener("DOMContentLoaded", function() {
  var announcementTitles = document.getElementsByClassName("announcement-title");
  
  for (var i = 0; i < announcementTitles.length; i++) {
    announcementTitles[i].addEventListener("click", function() {
      var announcementContent = this.nextElementSibling;
      displayAnnouncementContent(announcementContent);
    });
  }
});

function displayAnnouncementContent(announcementContent) {
  var rightColumn = document.querySelector(".right-column");
  
  rightColumn.innerHTML = '';
  rightColumn.appendChild(announcementContent.cloneNode(true));
}
