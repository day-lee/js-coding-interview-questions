/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  // option 1 - switch case statement
  let arr = str.split("");
  for (let i = 0; i < str.length; i++) {
    switch (arr[i]) {
      case "&":
        arr[i] = "&amp;";
        break;
      case "'":
        arr[i] = "&apos;";
        break;
      case '"':
        arr[i] = "&quot;";
        break;
      case "<":
        arr[i] = "&lt;";
        break;
      case ">":
        arr[i] = "&gt;";
    }
  }
  console.log(arr.join(""));

  // option 2 - map()
  const symbols = new Map([
    ["&", "&amp;"],
    ["'", "&apos;"],
    [">", "&gt;"],
    ["<", "&lt;"],
    ['"', "&quot;"],
  ]);
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (symbols.get(arr[i])) {
      arr[i] = symbols.get(arr[i]);
    }
  }
  console.log(arr.join(""));

  // option 3 - regex replace
  const symbols = {
    "&": "&amp;",
    "'": "&apos;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
  };

  const regex = /[&'"><]/g;
  //   let arr = str.split("");

  console.log(str.replace(regex, (match) => symbols[match]));
}

convertHTML("Dolce & Gabbana"); // Dolce &amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos"); // Hamburgers &lt; Pizza &lt; Tacos
convertHTML("abc"); // abc
convertHTML('Stuff in "quotation marks"'); // Stuff in &quot;quotation marks&quot;
