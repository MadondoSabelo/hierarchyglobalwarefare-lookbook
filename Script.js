
function search() {
    // Get the search query from the input field
    var query = document.getElementById('searchInput').value.toLowerCase();

    // Clear previous search results
    document.getElementById('searchResults').innerHTML = '';

    // Find all elements containing text content
    var elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span');

    // Loop through each element to check for the search query
    elements.forEach(function(element) {
        var text = element.innerText.toLowerCase();
        if (text.includes(query)) {
            // If the search query is found in the element's text, display the element
            var clone = element.cloneNode(true); // Clone the element
            document.getElementById('searchResults').appendChild(clone); // Append the clone to search results
        }
    });
}

if (!query || query.trim().length === 0) {
    return;
  }
  var text = element.innerText.toLowerCase();
if (text.includes(query)) {
  // Display the element
}
var regex = new RegExp('\\b' + query + '\\b', 'i');
if (regex.test(text)) {
  // Display the element
}
function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  document.getElementById('searchInput').addEventListener('input', debounce(search, 300));
  function search() {
    //...
    elements.forEach(function(element, index) {
      if (index < MAX_RESULTS) {
        // Display the element
      }
    });
    //...
  }
  var escapedQuery = encodeURIComponent(query);
var regex = new RegExp('\\b' + escapedQuery + '\\b', 'i');
if (regex.test(text)) {
  // Display the element
}
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  if (isElementVisible(element) && regex.test(text)) {
    // Display the element
  }
  try {
    // Search function code
  } catch (error) {
    console.error('Error during search:', error);
  }