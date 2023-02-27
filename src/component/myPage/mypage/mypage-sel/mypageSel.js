// import HorizentalLine from "./horizentalLine.js"
import "./mypageSel.css";
function myPageSel() {
  return (
    <aside>
        <div className="mypage-sel-border">
          <div>
            <a className="mypage-sel-1" href="">
              MyPage
            </a>
          </div>

          <hr className="mypage-sel-line" />
          
          <ul className="mypage-sel-2">
            <li className="mypage-sel-3">
              <a className="mypage-sel-4" href="">
                기본정보
              </a>
            </li>
            <li className="mypage-sel-3">
              <a className="mypage-sel-4" href="">
                영양제 취향 정보
              </a>
            </li>
            <li className="mypage-sel-3">
              <a className="mypage-sel-4" href="">
                나의 약장
              </a>
            </li>
            <li className="mypage-sel-3">
              <a className="mypage-sel-4" href="">
                회원탈퇴
              </a>
            </li>
          </ul>
        </div>
        </aside>
  );
}

export default myPageSel;

/* <nav> 요소는 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냅니다 */
