//to the div

document.querySelector('button').onclick = myClick;
function myClick() {
    let myText = document.querySelector('.i-1').value;
    document.querySelector('.out').innerHTML = myText;
}