import "./MypageHeader.css"

function TopBar() {
  return (
    <div>
      <ul className="navbar-nav">
        <div className="search-body">
          <li className="nav-item">
            <a className="nav-link" href="">
              <input className="search" placeholder="검색" id="text"></input>
            </a>
          </li>
        </div>
        <li className="nav-item">
          <a className="nav-link" href="">
            설문조사
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            영양제 비교
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            영양제 계산기
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            고객지원
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            홍길동(로그아웃)
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            로그인
          </a>
        </li>
      </ul>
    </div>
  );
}
export default TopBar;
