let form = document.querySelector('#identicon-form');
form.addEventListener('submit', updateDOM);

function updateDOM(event) {
    event.preventDefault();
    // console.log(form.querySelector('div input'));
    let inputText = form.querySelector('div input').value;
    let identicon = new Identicon(inputText);
    console.log(identicon);
    squares = document.querySelectorAll('span')
    let colors = `rgb(${identicon.array[0]}, ${identicon.array[1]}, ${identicon.array[2]})`
    makeBackgroundColors(squares[0], squares[4], colors, identicon.array[0]);
    makeBackgroundColors(squares[1], squares[3], colors, identicon.array[1]);
    makeBackgroundColors(squares[5], squares[9], colors, identicon.array[2]);
    makeBackgroundColors(squares[6], squares[8], colors, identicon.array[3]);
    makeBackgroundColors(squares[10], squares[14], colors, identicon.array[4]);
    makeBackgroundColors(squares[11], squares[13], colors, identicon.array[5]);
    makeBackgroundColors(squares[15], squares[19], colors, identicon.array[6]);
    makeBackgroundColors(squares[16], squares[18], colors, identicon.array[7]);
    makeBackgroundColors(squares[20], squares[24], colors, identicon.array[8]);
    makeBackgroundColors(squares[21], squares[23], colors, identicon.array[9]);
    makeBackgroundColors(squares[2], squares[2], colors, identicon.array[10]);
    makeBackgroundColors(squares[7], squares[7], colors, identicon.array[11]);
    makeBackgroundColors(squares[12], squares[12], colors, identicon.array[12]);
    makeBackgroundColors(squares[17], squares[17], colors, identicon.array[13]);
    makeBackgroundColors(squares[22], squares[22], colors, identicon.array[14]);


    // squares[0].style.backgroundColor = squares[4].style.backgroundColor = 'red'

    // squares[1].style.backgroundColor = squares[3].style.backgroundColor = 'orange';
    // squares[5].style.backgroundColor = squares[9].style.backgroundColor = 'yellow';
    // squares[6].style.backgroundColor = squares[8].style.backgroundColor = 'green';
    // squares[10].style.backgroundColor = squares[14].style.backgroundColor = 'blue';
    // squares[11].style.backgroundColor = squares[13].style.backgroundColor = 'indigo';
    // squares[15].style.backgroundColor = squares[19].style.backgroundColor = 'violet';
    // squares[16].style.backgroundColor = squares[18].style.backgroundColor = 'red';
    // squares[20].style.backgroundColor = squares[24].style.backgroundColor = 'orange';
    // squares[21].style.backgroundColor = squares[23].style.backgroundColor = 'yellow';

}

function makeBackgroundColors(node1, node2, color, arrayValue){
    node1.style.backgroundColor = node2.style.backgroundColor = arrayValue % 2 === 0 ? color : '';
}

