//구현계획
//1.모든 섹션 요소들과 메뉴 아이템들을 가지고 온다
//2.IntersectionObserver를 사요해서 모든 섹션들을 관찰해야한다
//3.보여지는 섹션에 행당하는 메뉴 아이템을 활성화 시킨다
//보여지는 색션 : 
//다수의세션이 동시에 보여진다면 가장 첫번째 섹션을 선택
//마지막 contact 섹션이 보여진다면 그러면 가장 마지막 섹션을 선택
const sectionIds = ['#home','#about','#skills','#work','#recommend' ,'#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
