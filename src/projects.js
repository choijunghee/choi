'use strict';
// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects= document.querySelectorAll('.project');
categories.addEventListener('click', (event)=> {
const filter=event.target.dataset.category;
if(filter==null){
    return;
}
projects.forEach((project) =>{
    console.log(project.dataset.type);
});
});