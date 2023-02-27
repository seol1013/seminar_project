function mypageFavor() {
  return (
    <div>
      <div>
        <span>
          설동윤님의 영양제 취향<button>변경하기</button>
        </span>
      </div>
      <hr />

      <ul>
        <li>
          <label>제형</label>
          <ul >
            <li ><input
                id=":rm:"
                type="checkbox"
                class=""
              ></input>
              <label for=":rm:" class="">
              상관없음
              </label>
              
            </li>
            <li class="">
              <label for=":rn:" class="">
                캡슐
              </label>
              <input
                id=":rn:"
                type="checkbox"
                class=""
              ></input>
            </li>
            <li class="">
              <label for=":ro:" class="">
                정
              </label>
              <input
                id=":ro:"
                type="checkbox"
                class=""
              ></input>
            </li>
            <li class="">
              <label for=":rp:" class="">
                가루
              </label>
              <input
                id=":rp:"
                type="checkbox"
                class=""
              ></input>
            </li>
            <li class="">
              <label for=":rq:" class="">
                액상
              </label>
              <input
                id=":rq:"
                type="checkbox"
                class=""
              ></input>
            </li>
            <li disabled="" class="">
              <label for=":rr:" class="">
                츄어블
              </label>
              <input
                id=":rr:"
                type="checkbox"
                class=""
              ></input>
            </li>
          </ul>
        </li>

        <li>
            <label>키워드</label>
            <ul>
            <li>
              <label for="key1" class="">좋은원료</label>
              <input id="key1" type="checkbox" class=""></input>
            </li>
            <li>
              <label for="key2" class="">가성비</label>
              <input id="key2" type="checkbox" class=""></input>
            </li>
            <li>
              <label for="key3" class="">단일성분</label>
              <input id="key3" type="checkbox" class=""></input>
            </li>
            <li>
              <label for="key4" class="">멀티제품</label>
              <input id="key4" type="checkbox" class=""></input>
            </li>
            </ul>
        </li>
      </ul>
    </div>
  );
}

export default mypageFavor;