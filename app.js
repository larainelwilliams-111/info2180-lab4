document.addEventListener('DOMContentLoaded', function () {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('search');
  const result = document.getElementById('result');

  function search() {
    const query = encodeURIComponent(searchInput.value.trim());

    fetch('superheroes.php?query=' + query)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Request failed: ' + response.status);
        }
        return response.text();
      })
      .then(function (html) {
        // The PHP script returns already-escaped HTML
        result.innerHTML = html;
      })
      .catch(function (error) {
        result.textContent = 'Something went wrong: ' + error.message;
      });
  }

  searchBtn.addEventListener('click', search);
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') search();
  });
});
