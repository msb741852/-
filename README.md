반응형 header

display : flex
@media screen 를 활용한 반응형 header

---

1차 수정

MODIFY

[navbar, icons]를 toggleBtn을 클릭 시 active 클래스를 토글 하면서
display : none -> flex로, 또는 display : flex -> none으로 하던 점을 변경

    - [navbar, navbar_menu, icons] visibility: hidden <-> visible로 수정
    - [navbar, icons] max-height 추가
    - [.active] transition 추가

WHY

- display: none -> flex로 변경할 경우 transition이 적용이 안되는 것처럼 보인다.

COME TO KNOW

- visibility: hidden은 컨텐츠를 보여주지는 않지만 영역은 지워지지 않는다.
- height : 0 -> 100%도 transition이 되지 않는다.
- height : auto 일 경우에는 transition을 적용할 수 없다.
- max-height

BY THE WAY

- vh 단위를 넣었더니 transition이 적용은 되지만 말그대로 vh단위는 'viewport height'이기에 메뉴의 영역만 나오는게 아니고 오버되서 나온다.
- height : auto 는 메뉴 높이만큼만 나오지만 transition이 되지 않았다.
- max-height, transition에 대해 공부할 것
