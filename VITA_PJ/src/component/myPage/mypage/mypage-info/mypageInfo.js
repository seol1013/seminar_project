function mypageInfo() {
  return (
      <div className = "mypage-info-1">
        <div className = "mypage-info-2"> {/*1-1*/}
          <div className="">기본정보</div>
          <button type="submit" className="mypage-info-button">
            변경하기
          </button>
        </div>
        <hr />
        <div>{/*1-2*/}
          <ul>
            <li>
              <label for="nickname" className="">
                닉네임
              </label>
              <input id="nickname" type="text" className=""></input>
            </li>
            <li>
              <label for="user-birthday" className="">
                생년월일
              </label>
              <input
                id="user-birthday"
                placeholder="19910101"
                maxlength="8"
                minlength="8"
                type="text"
                className=""
                value="99999999"
              ></input>
            </li>
            <li>
              <label for="user-gender" className="">
                성별
              </label>
              <ul>
                <li>
                  <label for="g:0">여성</label>
                  <input id="g:0" type="checkbox" className=""></input>
                </li>
                <li>
                  <label for="g:1">남성</label>
                  <input id="g:1" type="checkbox" className=""></input>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
  );
}
export default mypageInfo;
