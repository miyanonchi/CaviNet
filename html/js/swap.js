//取ってきた値↓
var CID = "";
var upID = "";
var downID ="";

//矢印ボタン↑を入力した時の処理
function swap_up() {
    getSwapPageID();
    
    //CGIに送れる形に変更
    var sendID = CID + "," + upID;    
    var fdata = new FormData();
    xhr = XMLHttpRequestCreate();
    fdata.append("PageID",sendID);
    var u = BASE_PATH+"swap_page.cgi";
    xhr.open("post", u, false);
    xhr.send(fdata);
}

//矢印ボタン↓を入力した時の処理
function swap_down() {    
    //CGIに送れる形に変更
    var sendID = CID + "," + downID;

    var fdata = new FormData();
    xhr = XMLHttpRequestCreate();
    fdata.append("PageID","Tes008,Tes005");
    var u = BASE_PATH+"swap_page.cgi";
    xhr.open("post", u, false);
    xhr.send(fdata);
}

function getSwapPageID() {
    var tableLength = document.getElementById("TbodyArea").childNodes.length;
    for (var i = 0; i < tableLength; ++i) {
    var cell = document.getElementById("Info(" + i + ",0)");
    if (cell.firstElementChild.checked) {
        var count = i;
        var CIDLocate = document.getElementById("Info(" + count + ",7)");
        CID = "Tes" + CIDLocate.textContent;
        if(i == 0){ // 最初の行にチェックが入っていた場合
        upID = "Tes" + CIDLocate.textContent;
        count = i + 1;
        CIDLocate = document.getElementById("Info(" + count + ",7)");
        downID = "Tes" + CIDLocate.textContent;
        } else if(i == tableLength){ // 最後の行にチェックが入っていた場合
        downID = "Tes" + CIDLocate.textContent;
        count = i - 1;
        CIDLocate = document.getElementById("Info(" + count + ",7)");
        upID = "Tes" + CIDLocate.textContent;
        } else { // 通常の処理
        count = i + 1;
        CIDLocate = document.getElementById("Info(" + count + ",7)");
        downID = "Tes" + CIDLocate.textContent;
        count = i - 1;
        CIDLocate = document.getElementById("Info(" + count + ",7)");
        upID = "Tes" + CIDLocate.textContent;
        }

    }
    }
}