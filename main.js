const $a = document.querySelector('#select h1 a');
const $select = document.querySelector('#select');

const $hide_boxH2 = document.querySelector('#hide-box h2');
const $hide_boxP = document.querySelector('#hide-box p');

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

let selectBoxWidth = 260;
let selectBoxHeight = 50;
let selectBoxLeft = 15;
let hideH2 = 0;
let hideP = 0;
let anima;
let isStop = true;

function ChangeHideBox2Select(){
    isStop = false;
    anima = requestAnimationFrame(ChangeHideBox2Select);
    $select.style.width = `${selectBoxWidth}px`;
    $select.style.height = `${selectBoxHeight}px`;
    if(selectBoxWidth >= 260 && selectBoxHeight <= 50) { cancelAnimationFrame(anima); isStop = true;}
    $select.style.left = `${selectBoxLeft}%`;
    selectBoxHeight *= 0.9;
    selectBoxWidth += selectBoxHeight / 8.5;
    selectBoxLeft -= selectBoxHeight / 260;
    if(selectBoxHeight <= 50) {
        selectBoxHeight = 50;
    }
    if(selectBoxWidth >= 260) {
        selectBoxWidth = 260;
    };
    if(selectBoxLeft <= 15) selectBoxLeft = 15;
}

function ChangeSelect2HideBox(){
    isStop = false;
    anima = requestAnimationFrame(ChangeSelect2HideBox);
    $select.style.width = `${selectBoxWidth}px`;
    $select.style.height = `${selectBoxHeight}px`;
    $select.style.left = `${selectBoxLeft +-2}%`;
    console.log(hideP);
    if(selectBoxWidth <= 0 && selectBoxHeight >= 295) {cancelAnimationFrame(anima); isStop = true;}
    $hide_boxP.style.left = `${hideP}%`
    selectBoxWidth *= 0.85;
    selectBoxHeight += selectBoxWidth / 5.9;
    selectBoxLeft += selectBoxWidth / 160;
    console.log(selectBoxLeft);
    hideP += selectBoxWidth / 140;
    if(selectBoxWidth <= 1) {
        selectBoxWidth = 0;
    };
    if(selectBoxHeight >= 295){
        selectBoxHeight = 295;
    }
    if(selectBoxLeft >= 25) selectBoxLeft = 25;
    if(hideP >= 100) hideP = 100;
}

$three_js.addEventListener('click', () => {
    if(isStop){
        $select.style.display = '';
        contentsNum = 1;
        contentsArr = three_js_contents;
        $a.textContent = 'Clock1';
        ChangeHideBox2Select();
    }
});

$web_introduce.addEventListener('click', () => {
    if(isStop){
        ChangeSelect2HideBox();
    }
});

$etc.addEventListener('click', () => {
    if(isStop){
        $select.style.display = '';
        contentsNum = 2;
        contentsArr = etc_js_contents;
        $a.textContent = '';
        ChangeHideBox2Select();
    }
});