setTimeout(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("aboutcard").removeAttribute("data-uk-sortable")
    }
}, 1000)