function autoNavigate(url) {
    if(url) {
        window.open(url, '_blank');
    }
}

function manualNavigate() {
    var dropdown = document.getElementById('manualNavigateDropdown');
    var url = dropdown.value;
    if(url) {
        window.open(url, '_blank');
    }
}
