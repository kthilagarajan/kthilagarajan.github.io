setTimeout(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("aboutcard").removeAttribute("data-uk-sortable")
    }
}, 1000)

function doShare() {
    console.log("Share")
    if (navigator.share) {
        navigator.share({
                title: 'Thilagarajan Kamarajan',
                text: 'About me',
                url: 'https://kthilagarajan.github.io',
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    }
}