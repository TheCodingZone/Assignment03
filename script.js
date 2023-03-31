console.dir(document);
console.log(document.title);

var title=document.querySelector('.title');
document.title='DOM MANIPULATION';

var header=document.querySelector('#header-title');
header.style.borderBottom='solid 3px #ccc';


var header1=document.querySelector('#main-header');
header1.style.borderBottom='solid 3px #800000';


var lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='green';

var item=document.querySelector('.list-group-item');
item.style.color='green';

var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color='green';

var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='green';
seconditem.style.fontStyle='italic';
seconditem.style.backgroundColor='yellow';

var submit=document.querySelector('input[type="submit"]');
submit.value="ADD";
submit.style.color='white';
submit.style.backgroundColor='red';



