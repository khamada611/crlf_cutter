/*
 * UI考えるの面倒なので、雰囲気は絵で、説明はテキストで
 * これ使うとパーツの事とか考えたくなくて済むという手抜きUI
 * （ひどすぎと言われると何も言えねー）
 */

/*
 * リアクションはこうまとめます。
 * <ID>_func -> セリフとして表示させるテキストを作る関数（単純メッセージじゃない時あるので）
 * <ID>_img -> その時のイメージ画像（今はここを凝る予定がないので直接）
 * 
 * まずは<ID>_funcを必要数記述し、次にテーブルを記述する感じです。
 * 
 */

var idle_message = function(text) {
  // 固定文字列応答
  return "改行文字をカットしますよ<br>コピペして「改行カット」クリックです";
}

var clear_message = function(text) {
  // 固定文字列応答
  return "クリアしたよ。<br>「改行カット」でまた指示してね。";
}

var cutted_message = function(text) {
  // cuttedは文字数をtextで受け取る仕様
  result = "だいたい" + text + "文字だね。<br>改行は削除してコピーしたよ";
  return result;
}

 var botSchenario = {
    "idle_img"  : "img/pronama_normal.png",
    "idle_func" : idle_message,
  
    "clear_img"  : "img/pronama_ok.png",
    "clear_func" : clear_message,

    "cutted_img"  : "img/pronama_executed.png",
    "cutted_func" : cutted_message 
}

/*
 * 他のjsからこいつを生成して反応させます。
 */
class nijiBot {

    // HTMLのイメージとテキストのIDを教えてさしあげませう
    constructor(img, text) {
      this.img = img;
      this.text = text;
    }

    // 何か反応させる
    // <ID>のみの場合と<ID>, textの場合とがある。
    // 情報加工したい場合は後者で。
    execute(schenario, ...args) {
        var text = "";
        if (args.length == 1) {
          text = args[0];
        }
        var image = schenario + "_img";
        var serif = botSchenario[schenario + "_func"](text);
        document.getElementById(this.img).src = botSchenario[image];
        document.getElementById(this.text).innerHTML = serif;
    }

    // 初期画面に。アイドル状態に戻す場合を想定。
    showNormalImg()
    {
        if (this.img != botSchenario["idle_img"])
        {
          document.getElementById(this.img).src = botSchenario["idle_img"];
        }
    }

}

