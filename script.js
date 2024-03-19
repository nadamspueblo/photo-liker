let likes = 0;

function init() {
  addClickEvent("thumbup", thumbUpClick);
  addClickEvent("thumbdown", thumbDownClick);
  addClickEvent("addcomment", addComment);
}

function thumbUpClick() {
  likes += 1;
  setText("Likes: " + likes, "likes");
}

function thumbDownClick() {
  likes -= 1;
  setText("Likes: " + likes, "likes");
}

function addComment() {
  let comment = getInputValue("newcomment");
  let prevComments = getText("comments");
  setText(prevComments + "<br>" + comment, "comments");
  clearInputValue("newcomment");
}

init();
