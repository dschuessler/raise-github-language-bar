// ==UserScript==
// @name raise-github-language-bar
// @version 1.0
// @description Raises the language bar in Github so that it is visible in the viewport without scrolling
// @include https://github.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements(".BorderGrid", reorderGridRows);

function reorderGridRows(grid) {
  const gridRows = Object.values(grid.children()).filter((child) =>
    child?.attributes?.class?.nodeValue.includes("BorderGrid-row")
  );
  const lastRow = gridRows[gridRows.length - 1];

  if (
    lastRow
      .getElementsByClassName("BorderGrid-cell")[0]
      .getElementsByTagName("h2")[0].textContent === "Languages"
  ) {
    gridRows[0].parentNode.removeChild(lastRow);
    gridRows[0].parentNode.insertBefore(lastRow, gridRows[1]);
  }
}
