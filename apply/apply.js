function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}

  function handleScroll() { 
    const elems = document.querySelectorAll('.item'); //'.item'이라는 클래스를 가진 모든 객체를 html에서 모은다.
    elems.forEach(elem => { //저번 퀴즈에 나왔을 것이다. 각각에 대해서 무언가를 실행한다.
      if (isElementUnderBottom(elem,-20)) { // 화면에 아직 안나오면
        elem.style.opacity = "0"; // opacity(불투명도)가 0, 즉 투명한 상태가 된다.
        elem.style.transform='translateY(150px)';
      } else { //화면에 나왔다면
        elem.style.opacity = "1"; //투명 상태가 해제된다.
        elem.style.transform='translateY(0px)';
      }
    })
  }


  window.addEventListener('scroll', handleScroll); //화면에 이벤트를 추가한다. 스크롤할 경우 계속 handleScroll 함수를 작동시켜서 객체가 화면에 나왔는지를 확인하는 것이다.

  const btn=document.getElementById('submit_button');
  
  btn.onclick=function(){
    location.href='https://docs.google.com/forms/d/1ezmsJtZFo9rHCZt9SE4n_P-I7eD7hNAfftU1gW5iC6Q/edit';
  }