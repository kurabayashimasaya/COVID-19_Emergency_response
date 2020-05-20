/**
 * topの設問のHTMLを作成する
 * @param {*} target1 対象となる要素
 * @param {*} json1 コンテンツ情報
 */
function createTop(target1, json1) {
    // 設問の作成
    var list_css = {
      margin: "20px 0 30px 0",
      paddingLeft: "10%"
    }
    var heading_css = {
      padding: "40px 40px 40px 40px",
      fontWeight: "bold",
      fontSize: "140%",
    }
    var question_div = $('<div>').appendTo(target1).addClass('question_item');
    $('<p>').appendTo(question_div).text(json1.content).css(heading_css);
    $('<p>').appendTo(question_div).text(json1.list01).css(list_css);
    $('<p>').appendTo(question_div).text(json1.list02).css(list_css);
    $('<p>').appendTo(question_div).text(json1.list03).css(list_css);
    $('<p>').appendTo(question_div).text(json1.list04).css(list_css);
    // ボタンBOXの作成
    var btn_box_div = $('<div>').appendTo(target1).addClass('button_box');
    // YESボタンの作成
    var top_button = $('<a>').appendTo(btn_box_div);
    top_button.attr('id', json1.top_id);
    top_button.addClass('start_button');
    top_button.text(json1.next_content);
    top_button.attr('href', json1.href);
}

/**
 * 質問画面のHTMLを作成する
 * @param {*} target2 対象となる要素
 * @param {*} json2 コンテンツ情報
 */
function createQuestion(target2, json2, qNo) {
    // タイトルの作成
    var title_div = $('<div>').appendTo(target2).addClass('title');
    question = "Q0" + qNo + ".";
    $('<p>').appendTo(title_div).text(question);
    // 設問の作成
    var list_css2 = {
      padding: '20px 0 10px 130px'
    }
    var heading_css = {
      margin: '100px 80px 30px 80px',
      fontSize: "130%"
    }
    var question_div = $('<div>').appendTo(target2).addClass('question_item');
    $('<p>').appendTo(question_div).text(json2.content).css(heading_css);
    $('<p>').appendTo(question_div).text(json2.list01).css(list_css2);
    $('<p>').appendTo(question_div).text(json2.list02).css(list_css2);
    $('<p>').appendTo(question_div).text(json2.list03).css(list_css2);
    $('<p>').appendTo(question_div).text(json2.list04).css(list_css2);
    // ボタンBOXの作成
    var btn_box_div = $('<div>').appendTo(target2).addClass('button_box');
    // YESボタンの作成
    var yes_button = $('<a>').appendTo(btn_box_div);
    yes_button.attr('id', json2.yes_id);
    yes_button.addClass('yes_button');
    yes_button.text(json2.yes_content);
    yes_button.attr('href', json2.yes_button_href + "&questionno=" + qNo);
    // NOボタンの作成
    var no_button = $('<a>').appendTo(btn_box_div);
    no_button.attr('id', json2.no_id);
    no_button.addClass('no_button');
    no_button.text(json2.no_content);
    no_button.attr('href', json2.no_button_href + "&questionno=" + qNo);
    //戻るボタン作成
    if (json2.id != "Q01") {
      var return_button = $('<a>').appendTo(btn_box_div);
      return_button.attr('id', json2.return_id);
      return_button.addClass('return_button');
      return_button.text(json2.return_content);
      return_button.attr('href', json2.return_button_href);
    }
}

/**
 * 結果画面のHTMLを作成する
 * @param {*} target3 対象となる要素
 * @param {*} json3 コンテンツ情報
 */
function createResult(target3, json3) {
    // タイトルの作成
    var title_div = $('<div>').appendTo(target3).addClass('title');
    $('<p>').appendTo(title_div).text(json3.title);
    // 設問の作成
    var list_css = {
      margin: "20px 50px 20px 130px"
    }
    var heading_css = {
      margin: '100px 80px 30px 130px',
      fontSize: "130%"
    }
    var question_div = $('<div>').appendTo(target3).addClass('question_item');
    $('<p>').appendTo(question_div).text(json3.content01).css(heading_css);
    $('<p>').appendTo(question_div).text(json3.content02).css(heading_css);
    $('<p>').appendTo(question_div).text(json3.list01).css(list_css);
    $('<p>').appendTo(question_div).text(json3.content03).css(heading_css);
    $('<p>').appendTo(question_div).text(json3.list02).css(list_css);
    $('<p>').appendTo(question_div).text(json3.list03).css(list_css);
    $('<p>').appendTo(question_div).text(json3.list04).css(list_css);
    //選択した設問表示
    var result_div = $('<div>').appendTo(target3).addClass('question_item');
    var param = getReqParams();
    if (param.yes_list) {
      var yes_list = param.yes_list.split(',');
      yes_list.forEach(function(qId) {
        json2.forEach(function(obj) {
          if (obj.id == qId) {
            console.log(obj.id + ":" + obj.content);
            $('<p>').appendTo(result_div).text(obj.id + ":" + obj.yes_content).css(list_css);
          }
        });
      });
    } else {
      var no_list = param.no_list.split(',');
      no_list.forEach(function(qId) {
        json2.forEach(function(obj) {
          if (obj.id == qId) {
            console.log(obj.id + ":" + obj.content);
            $('<p>').appendTo(result_div).text(qId + ":" + obj.no_content).css(list_css);
          }
        });
      });
    }

    // ボタンBOXの作成
    var btn_box_div = $('<div>').appendTo(target3).addClass('button_box');
    // topに戻るボタンの作成
    var exit_button = $('<a>').appendTo(btn_box_div);
    exit_button.attr('id', json3.exit_id);
    exit_button.addClass('start_button');
    exit_button.text(json3.exit_content);
    exit_button.attr('href', json3.href);
}

/**
 * クエリパラメータの取得処理
 */
function getReqParams() {
  // パラメータの格納配列を用意
  var paramArray = {};
  // URLのリクエストパラメータを取得
  var reqParamString = location.search.substring(1);
  // 格納なければから配列返却
  if (reqParamString) {
    var param = reqParamString.split('&');

    for (i = 0; i < param.length; i++) {
      var item = param[i].split('=');
      var itemName = item[0];
      var itemValue = item[1];
      paramArray[itemName] = itemValue;
    }
  }
  return paramArray;
}
