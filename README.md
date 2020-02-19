# crlf_cutter

Sorry. This page is Japanese only. 

These files are licensed by Pronama LLC.

* crlf_cutter\img/pronama_executed.png
* crlf_cutter\img\pronama_normal.png
* crlf_cutter\img\pronama_ok.png

    https://kei.pronama.jp/guideline-others/

You can try this free software, but you will need to take full responsibility for your action.

## JavaScriptのお勉強なのです。

ちょっと色々ありまして、JavaScriptを書いてみたいと思いました。いやー私一応組み込み系なんですが、そもそもC言語でもヤバいのに果たしてそんな事が出来るのでしょうか

…えーえー出来ませんでしたとも。でも書いたので晒してみようかなと。で、増長した時にこのコードを見て自分を戒めようかなと。

## これなに？

あ、はい。これは名前の通り改行文字を削るだけのプログラムです。ぶっちゃけreplaceのサンプルですｗ。

例えばプライベートでラズパイいじるとかしたくてUSBの仕様（PDFです）を公式から落として、その英語を翻訳しようかなーとか思ったとします。その場合PDFからテキトーにマウスで選んでコピーします。でグーグル翻訳とか出してペーストすれば、英語がどんなにダメなエンジニアでも「あーそういう事かー」ぐらいは分かります。良い時代になったものです。

ところがPDFだと結構不必要に改行がついています。そのため、翻訳文が分割とかしてしまうじゃないですか、そういう時にこのツールは少しだけお手伝いが出来るかもしれません。

bootstrapにJQueryまで引っ張り出して、出来ることはこれだけです。

* textareaに改行削って欲しいテキストをペーストします。
* 「改行カット」をクリックすると改行を削ってくれます。更にその削ったテキストをクリップボードにも入れてくれます。
* なので検索サービスのtextareaにペーストすれば後はエンジンがきっとよしなにしてくれます。
* 「クリア」をクリックすると、テキストをクリアします。この時クリップボードは操作しません。

## 動作確認環境など

以下の環境でしか確認はしていません。。

* Windows10 Professional(64bit)でFireFoxとChrome
* Mac OS CatalinaでSafari

## 使い方

* まずはcloneするなりzipを解凍するなりして、適当なフォルダに展開して下さい。
* で、index.htmlをダブルクリックするとこんな画面が出ます。

<img src="readme_pic/app1.png" width="500px">

* このテキストエリアにペーストして「改行カット」をクリックすると改行が削除された文字列に更新されます。そしてそれはクリップボードにも設定されます。
* なので「改行カット」をクリックしたその足で翻訳エンジンにペーストすると、良い感じに翻訳してくれるかもしれません。
* 次のテキストをやりたくなったり、とにかくその表示がウザいなら「クリア」をクリックすると消去されます。この時に特にクリップボードには何もしません。

## 使わせて戴いたもの

* Bootstrapv4.4.1

    https://getbootstrap.com/

* jQuery v3.4.1

    https://jquery.com/download/

## 参考にさせて頂いたページ

作成するに辺り、以下参考にさせて戴きました。各サイトの皆様ありがとうございました。

* addEventListenerでの引数渡し

    https://note.com/yamanoborer/n/n2e4cc40328b7

* Bootstrap4の使い方

    https://webst8.com/blog/css-bootstrap4-howto/

* 吹き出しデザイン

    https://saruwakakun.com/html-css/reference/speech-bubble

* JavaScriptのクラス

    https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes

* 関数テーブル
    
    https://qiita.com/hirokidaichi/items/c9a76191216f3cc6c4b2

* 可変長引数

    https://takamints.hatenablog.jp/entry/varg-on-es6-modern-javascript


## ライセンス系について

以下の画像はプロ生ちゃん利用ガイドラインに基づく利用が必要ですのでご注意ください。

* crlf_cutter\img\pronama_executed.png
* crlf_cutter\img\pronama_normal.png
* crlf_cutter\img\pronama_ok.png

ガイドラインは以下。フリー用途では寛容ですが使う際には一応目を通して下さい。

https://kei.pronama.jp/guideline-others/

コードのライセンスは一応MITとさせて下さい。

## PS

* 当然ですが使用した際の損害は誰も請け負ってくれません。そこだけ注意で。
* 私、普段は組み込みでC系やっててJavaScriptは駆け出し以下です。だからあまりいじめるな（寄生獣：田島玲子風）
