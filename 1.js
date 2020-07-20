function isElementUnderBottom(elem) { //객체(elem)가 화면에 보이는지 판별해주는 함수
    const top = elem.getBoundingClientRect().top; // 객체가 화면 최상단에서 얼마나 밑으로 멀어져있는지를 판별해준다.(음수도 나올 수 있다. 위로 멀어져있으면)
    const innerHeight = window.innerHeight; //화면의 높이(항상 값이 정해져 있다. 반응형으로 줄어들거나 늘어날 수는 있다.)
    return top > innerHeight ; // 객체가 밑으로 멀어진 정도가 화면의 높이보다 크면(화면에서 아직 안나오면) true를 반환한다.
  }
  
  function handleScroll() { 
    const elems = document.querySelectorAll('.up-on-scroll'); //'up-on-scroll'이라는 클래스를 가진 모든 객체를 html에서 모은다.
    elems.forEach(elem => { //저번 퀴즈에 나왔을 것이다. 각각에 대해서 무언가를 실행한다.
      if (isElementUnderBottom(elem)) { // 화면에 아직 안나오면
        elem.style.opacity = "0"; // opacity(불투명도)가 0, 즉 투명한 상태가 된다.
      } else { //화면에 나왔다면
        elem.style.opacity = "1"; //투명 상태가 해제된다.
      }
    })
  }
  
  window.addEventListener('scroll', handleScroll); //화면에 이벤트를 추가한다. 스크롤할 경우 계속 handleScroll 함수를 작동시켜서 객체가 화면에 나왔는지를 확인하는 것이다.