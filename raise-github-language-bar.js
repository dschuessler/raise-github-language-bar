// ==UserScript==
// @name raise-github-language-bar
// @version 1.0
// @description Raises the language bar in Github so that it is visible in the viewport without scrolling
// @include https://github.com/*
// ==/UserScript==

const borderGridRows = document.getElementsByClassName("BorderGrid-row");
const lastRow = borderGridRows.item(borderGridRows.length - 1);

if (
  lastRow
    .getElementsByClassName("BorderGrid-cell")[0]
    .getElementsByTagName("h2")[0].textContent === "Languages"
) {
  borderGridRows[0].parentNode.removeChild(lastRow);
  borderGridRows[0].parentNode.insertBefore(lastRow, borderGridRows[1]);
}
