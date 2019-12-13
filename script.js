let btnSearch = document.createElement('a');
btnSearch.setAttribute('id', 'search-button');
btnSearch.setAttribute('href', '#');
btnSearch.innerHTML = '<i></i> Search on Google';

const panelContainer = document.getElementsByClassName('panel-default')[0];
panelContainer.insertBefore(btnSearch, panelContainer.lastChild);

document.getElementById('search-button').addEventListener('click', function (e) {
    e.preventDefault();

    const txtSoal = document.getElementById('txtSoal').innerHTML;
    // window.open('https://www.google.com/search#btnI=1&q=' + txtSoal, '_blank');
    window.open('https://www.google.com/search?q=' + txtSoal, '_blank');

});