const title=document.querySelector('.title');
const textp1=document.querySelectorAll('.textp1');
const clickBtn=document.querySelector('#click');
const container=document.querySelector('.container');
const ul=document.querySelector('.ul');
const img=document.querySelector('.image');

title.textContent='This is Duc\'s Web';
textp1[0].innerHTML+='<p class="textp1">Đây là một đoạn văn bản innerHTML.</p>';
const newLi=document.createElement('li');
newLi.textContent='Đây là một phần tử li mới được tạo bằng createElement.';
ul.appendChild(newLi);
const newLi2=document.createElement('li');
newLi2.textContent="Đây là li sẽ bị xóa";
ul.appendChild(newLi2);
newLi2.remove();

img.src='img/yourName.jpg'; img.style.width='50%';

ul.classList.add('hidden');
ul.classList.remove('hidden');
ul.classList.toggle('active');
console.log(ul.classList.contains('active'));

clickBtn.addEventListener('click',()=>{
 clickBtn.style.backgroundColor='red';
 clickBtn.textContent='Đã click';
})

const newBtn=document.createElement('button');
newBtn.textContent='Button thử di chuột';
newBtn.classList.add('btn');
container.appendChild(newBtn);
newBtn.addEventListener('mouseenter',()=>{
    newBtn.style.backgroundColor='blue';
    newBtn.textContent='Chuột được di vào button';
});
newBtn.addEventListener('mouseleave',()=>{
    newBtn.style.backgroundColor='';
    newBtn.textContent='Button thử di chuột';
});

const newBtn2=document.createElement('button');
newBtn2.textContent='Click để thay đổi title';
newBtn2.classList.add('btn');
container.appendChild(newBtn2);
newBtn2.addEventListener('click',()=>{
    title.textContent='Title đã được thay đổi';
    newBtn2.textContent='Đã click';
});

const newBtn3 = document.querySelector('#click3');
newBtn3.textContent = 'dark-mode'; 
newBtn3.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        newBtn3.textContent = 'light-mode';
    } else {
        newBtn3.textContent = 'dark-mode';
    }
});