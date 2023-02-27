import MypageInfo from "./mypage-info/mypageInfo.js";
import MypageSel from "./mypage-sel/mypageSel.js"
import MypageFavor from "./mypage-favor/mypageFavor.js"

// import Topbar from "./topBar.js"

function mypage(){
return (
    <div className = "mypage-first">
    <MypageSel></MypageSel>
    <MypageInfo></MypageInfo>
    <MypageFavor></MypageFavor>
    </div>
    );
}

export default mypage;

