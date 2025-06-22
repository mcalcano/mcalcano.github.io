document.addEventListener('DOMContentLoaded', function () {
    const eventListContainer = document.getElementById('event-list-container');
    const eventsFilePath = 'data/event-list.html'; // Path to your separate HTML file

    fetch(eventsFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            eventListContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            eventListContainer.innerHTML = '<p>Error loading events. Please try again later.</p>';
        });
});