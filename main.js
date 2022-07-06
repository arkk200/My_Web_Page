// Setting
document.getElementById('three-js-contents').style.display = '';
document.getElementById('web-introduce-contents').style.display = 'none';
document.getElementById('etc-contents').style.display = 'none';

const $three_js = document.getElementById('three-js');
const $web_introduce = document.getElementById('web-introduce');
const $etc = document.getElementById('etc');

$three_js.onclick = ShowOnlyThree_js;
$web_introduce.onclick = ShowOnlyMy_introduce;
$etc.onclick = ShowOnlyETC;

function ShowOnlyThree_js(){
    document.getElementById('three-js-contents').style.display = '';
    document.getElementById('web-introduce-contents').style.display = 'none';
    document.getElementById('etc-contents').style.display = 'none';
}
function ShowOnlyMy_introduce(){
    document.getElementById('three-js-contents').style.display = 'none';
    document.getElementById('web-introduce-contents').style.display = '';
    document.getElementById('etc-contents').style.display = 'none';
}
function ShowOnlyETC(){
    document.getElementById('three-js-contents').style.display = 'none';
    document.getElementById('web-introduce-contents').style.display = 'none';
    document.getElementById('etc-contents').style.display = '';
}