const button = document.getElementById('check');
let monthly = document.getElementsByClassName('monthly-price');
let annual = document.getElementsByClassName('annual-price');
var id;

function changePrice() {

    if (button.checked == true) {
        for (var id = 0; id < monthly.length; id++) {
            annual[id].style.display = 'none'
            monthly[id].style.display = 'flex'
        }
    } else {
        for (var id = 0; id < monthly.length; id++) {
            annual[id].style.display = 'flex'
            monthly[id].style.display = 'none'
        }
    }
}