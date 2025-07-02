const facebookShortenedLink = 'https://tr.ee/ZTlLme';
const instagramShortenedLink = 'https://tr.ee/VkXQvB';

document.addEventListener('DOMContentLoaded', function () {
    //Event listener for the div links
    // - FACEBOOK
    const facebookLinkDiv = document.getElementById('facebookLinkDiv');
    if (facebookLinkDiv) { // Check if the element exists to prevent errors
        facebookLinkDiv.addEventListener('click', function () {
            // Redirect to Fever Dream's FB page
            window.open(facebookShortenedLink, '_blank'); // '_blank' opens in a new tab
        });
    }
    // END - FACEBOOK -

    // - INSTAGRAM  -
    const instagramLinkDiv = document.getElementById('instagramLinkDiv');
    if (instagramLinkDiv) { // Check if the element exists to prevent errors
        instagramLinkDiv.addEventListener('click', function () {
            // Redirect to Fever Dream's Instagram page
            window.open(instagramShortenedLink, '_blank'); // '_blank' opens in a new tab
        });
    }
    // END - INSTAGRAM  -

});