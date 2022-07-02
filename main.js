// Setting
document.getElementById('three-js-contents').style.display = '';
document.getElementById('my-introduce-contents').style.display = 'none';
document.getElementById('etc-contents').style.display = 'none';

const $three_js = document.getElementById('three-js');
const $my_introduce = document.getElementById('my-introduce');
const $etc = document.getElementById('etc');

$three_js.onclick = ShowOnlyThree_js;
$my_introduce.onclick = ShowOnlyMy_introduce;
$etc.onclick = ShowOnlyETC;

function ShowOnlyThree_js(){
    document.getElementById('three-js-contents').style.display = '';
    document.getElementById('my-introduce-contents').style.display = 'none';
    document.getElementById('etc-contents').style.display = 'none';
}
function ShowOnlyMy_introduce(){
    document.getElementById('three-js-contents').style.display = 'none';
    document.getElementById('my-introduce-contents').style.display = '';
    document.getElementById('etc-contents').style.display = 'none';
}
function ShowOnlyETC(){
    document.getElementById('three-js-contents').style.display = 'none';
    document.getElementById('my-introduce-contents').style.display = 'none';
    document.getElementById('etc-contents').style.display = '';
}