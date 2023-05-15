/**
 * This function, urlToLink, returns the path to the selected item's page
 * @param {string} url - api url
 * @param {string} root - "characters" OR "books" OR "houses"
 * @returns
 */
export const urlToLink = (url, root) => {
  let urlLength = `https://www.anapioficeandfire.com/api/${root}/`.length;
  let newLink = url.slice(urlLength);
  return `/${root}/${newLink}`;
};

/**
 * This component, DisplayKey, returns a <p> tag with the value of the selected keys
 * @param {object} obj - full element of the list
 * @param {array[string]} keys - values'keys to display on the list, max: 2
 * @returns
 */
export const DisplayKey = ({ obj, keys }) => {
  let toDisplay = [];
  for (const [key, value] of Object.entries(obj)) {
    keys.forEach((element) => {
      if (element === key) {
        toDisplay.push(value.length ? value : "Unknown");
      }
    });
  }
  return (
    <>
      {toDisplay.length
        ? toDisplay.map((item, itemKey) => <p key={itemKey}>{item}</p>)
        : ""}
    </>
  );
};
