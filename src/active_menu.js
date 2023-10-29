//구현계획
//1.모든 섹션 요소들과 메뉴 아이템들을 가지고 온다
//2.IntersectionObserver를 사요해서 모든 섹션들을 관찰해야한다
//3.보여지는 섹션에 행당하는 메뉴 아이템을 활성화 시킨다
//보여지는 색션 : 
//다수의세션이 동시에 보여진다면 가장 첫번째 섹션을 선택
//마지막 contact 섹션이 보여진다면 그러면 가장 마지막 섹션을 선택
const sectionIds = ['#home','#about','#skills','#work','#recommend' ,'#contact'];
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));
const visibleSections= sectionIds.map(()=> false);
let activeNavItem=navItems[0];

const Options = {
    rootMargin: '-20% 9px 9px 9px',
    threshold: [0,0.98],
};
const observer = new IntersectionObserver( observerCallback, Options);
Selections.forEach(section=>boserver.boserve(section));

function observerCallback (entries){
    let selectLastOne;
    entries.forEach((entry)=>{
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.intersectiing;
        selectLastOne = index === sectionIds. length -1 && entry. isIntersectiing && entry. IntersectionRatio>= 0.95;
    });
    const navIndex = selectLastOne ? sectionIds. length-1 : findFirstIntersecting(visibleSections);
   
    selectNaveItem(navIndex);

}
function findFirstIntersecting(intersections){
    const index = intersections. indexOf(true);
    return index => 0 ? index : 0 
}
function selectNaveItem(index){
    const navItem = navItems[index];
    activeNavItem.classList.remove('active');
    activeNavItem=navItem;
    activeNavItem.classList.add('active');

}