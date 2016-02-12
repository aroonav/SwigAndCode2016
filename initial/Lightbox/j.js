$(document).ready(function () {
    var outerThis = this, isCloseable = false;
    $('#open-button').on('click', function (e) {
        e.preventDefault();
        $('#page-cover').show();
    });

    $('#close-button').on('click', function (e) {
        e.preventDefault();
        if(outerThis.isCloseable) {
            $('#page-cover').hide();
            outerThis.isCloseable = false;
        }
    });

    $('#click-first-button').on('click', function (e) {
        e.preventDefault();
        outerThis.isCloseable = true;
    });    
    
});