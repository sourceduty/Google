document.addEventListener('DOMContentLoaded', function() {
  var searchButton = document.getElementById('searchButton');
  var searchInput = document.getElementById('searchInput');

  searchButton.addEventListener('click', function() {
    var query = searchInput.value;
    if (query.trim() !== '') {
      var url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
      chrome.tabs.create({ url: url });
    }
  });
});
