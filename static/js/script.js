$(document).ready(function() {
    // Handle search form submission
    $('form').submit(function(event) {
        event.preventDefault();
        var searchQuery = $('input[name="search"]').val();
        var categoryFilter = $('select[name="category"]').val();
        var dateFilter = $('input[name="date"]').val();
        var url = '/?search=' + searchQuery + '&category=' + categoryFilter + '&date=' + dateFilter;
        window.location.href = url;
    });
});
