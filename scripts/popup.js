const saveToCRMButton = document.getElementById("saveToCRM");

saveToCRMButton.addEventListener("click", (event) => {
  var bookmarkTreeNodes = chrome.bookmarks.getTree(function (nodes) {
    console.log("Bookmarks: ", nodes);

    return nodes;
  });

  console.log("Bookmarks: ", bookmarkTreeNodes);
});
