/*
 *  多分メイン的な何か
 */
$(function(){

    var pronamaBot = new nijiBot("botImg","serifText")

    var main = function(){
        //初期化
        document.getElementById("inputTextarea").value = "";
        pronamaBot.execute("idle");
    }

    var copyToClipBoard = function(e){
        //クリップボードに入れる
        e.clipboardData.setData("text/plain" , this.target);    
        e.preventDefault();
    }

    var showIdleImage = function() {
        // 原初のイメージに戻します。
        pronamaBot.showNormalImg();
    }

    $("#cutButton").click(function(){

        // 改行を削って戻します。
        var targetText = document.getElementById("inputTextarea").value;
        var result = targetText.replace(/\r?\n/g,"");
        document.getElementById("inputTextarea").value = result;

        // 更にクリップボードにも入れます.
        document.addEventListener("copy",　{target: result, handleEvent: copyToClipBoard});
        document.execCommand("copy");
        document.removeEventListener("copy", copyToClipBoard); // 毎回こうするのが正しいのでしょうか…

        // UI面倒（汗。cuttedは文字数も伝える
        pronamaBot.execute("cutted", String(result.length));

        // ちょっとアニメチックに
        setTimeout(showIdleImage, 2000);
    });

    $("#clearButton").click(function(){
        // 普通に消すだけ
        document.getElementById("inputTextarea").value = "";

        // UI面倒（汗
        pronamaBot.execute("clear");

        // ちょっとアニメチックに
        setTimeout(showIdleImage, 2000);
    });

    main();
});
