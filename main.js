const $a = document.querySelector('#select h1 a');
const $select = document.querySelector('#select');
const $hide_box = document.querySelector('#hide-box');

const $three_js = document.querySelector('#three-js button');
const $web_introduce = document.querySelector('#web-introduce button');
const $etc = document.querySelector('#etc button');

let isTHRClicked = true;
let isATWClicked = false;
let isETCClicked = false;

let contentsNum = 1;

const three_js_contents = ['Clock1', 'Clock2', 'Mirror1', 'Mirror2', 'Yacht_Dice', 'Skybox', '', ''];
const etc_js_contents = ['', '', '', '', '', '', '', ''];

let contentsArr = three_js_contents;

$hide_box.style.display = 'none';

window.addEventListener('scroll', () => {
    if(scrollY < 143 || scrollY > 2144){
        $a.textContent = contentsArr[0];
        if(contentsNum === 1) $a.href = './files/three.js/Clock1/clock1.html'
        else if(contentsNum === 2) $a.href = './';
    } else if(scrollY < 427){
        $a.textContent = contentsArr[1];
        if(contentsNum === 1) $a.href = './files/three.js/Clock2/clock2.html'
        else if(contentsNum === 2) $a.href = './';
    } else if(scrollY < 715){
        $a.textContent = contentsArr[2];
        if(contentsNum === 1) $a.href = './files/three.js/Mirror1/mirror1.html'
        else if(contentsNum === 2) $a.href = './';
    } else if(scrollY < 1000){
        $a.textContent = contentsArr[3];
        if(contentsNum === 1) $a.href = './files/three.js/Mirror2/mirror2.html'
        else if(contentsNum === 2) $a.href = './';
    } else if(scrollY < 1284){
        $a.textContent = contentsArr[4];
        if(contentsNum === 1) $a.href = './files/three.js/Yacht_Dice/yacht_dice.html'
        else if(contentsNum === 2) $a.href = './';
    } else if(scrollY < 1568){
        $a.textContent = contentsArr[5];
        if(contentsNum === 1) $a.href = './files/three.js/Skybox/skybox.html'
        else if(contentsNum === 2) $a.href = './';
    } else if(scrollY < 1852){
        $a.textContent = contentsArr[6];
        if(contentsNum === 1) $a.href = './files/three.js/Clock1/clock1.html'
        else if(contentsNum === 2) $a.href = './';
    } else {
        $a.textContent = contentsArr[7];
        if(contentsNum === 1) $a.href = './files/three.js/Clock1/clock1.html'
        else if(contentsNum === 2) $a.href = './';
    }
});

$three_js.addEventListener('click', () => {
    $select.style.display = '';
    $hide_box.style.display = 'none';
    contentsNum = 1;
    contentsArr = three_js_contents;
    $a.textContent = 'Clock1';
})

let selectBoxWidth = 260;
function ChangeSelect2HideBox(){
    let handle = requestAnimationFrame(ChangeSelect2HideBox);
    $select.style.width = `${selectBoxWidth}px`;
    $select.style.height = `${selectBoxWidth}px`;
    selectBoxWidth *= 0.9;
    if(selectBoxWidth <= 0) {
        selectBoxWidth = 0;
        console.log('te');
        cancelAnimationFrame(handle);
    };
}

$web_introduce.addEventListener('click', () => {
    // $select.style.display = 'none';
    $hide_box.style.display = '';
    ChangeSelect2HideBox();
})

$etc.addEventListener('click', () => {
    $select.style.display = '';
    $hide_box.style.display = 'none';
    contentsNum = 2;
    contentsArr = etc_js_contents;
    $a.textContent = '';
    console.log(contentsArr);
})