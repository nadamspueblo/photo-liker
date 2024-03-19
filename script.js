let likes = 0;

function init() {
  addClickEvent("thumbup", thumbUpClick)
}

function thumbUpClick() {
  likes += 1;
  setText("Likes: " + likes);
}

init();
