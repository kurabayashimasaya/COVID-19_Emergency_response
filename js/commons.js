/**
 * topの設問のHTMLを作成する
 * @param {*} target1 対象となる要素
 * @param {*} json1 コンテンツ情報
 */
function createTop(target1, json1) {
    var question_div = $('<div>').appendTo(target1).addClass('list_item');
    $('<p>').appendTo(question_div).text(json1.content).addClass('top_heading');
    $('<p>').appendTo(question_div).text(json1.list01).addClass('top_list_content clear');
    $('<p>').appendTo(question_div).text(json1.list02).addClass('top_list_content');
    $('<p>').appendTo(question_div).text(json1.list03).addClass('top_list_content');
    $('<p>').appendTo(question_div).text(json1.list04).addClass('top_list_content');
    // ボタンBOXの作成
    var btn_box_div = $('<div>').appendTo(target1).addClass('button_box');
    // YESボタンの作成
    var top_button = $('<a>').appendTo(btn_box_div);
    top_button.attr('id', json1.top_id);
    top_button.addClass('start_button');
    top_button.text(json1.next_content);
    top_button.attr('href', json1.top_href);
    //報告テンプレートリンク
    var route_div = $('<div>').appendTo(target1).addClass('top_item');
    var routea_link = $('<a>').appendTo(route_div);
    routea_link.text(json1.routea_link).addClass('top_link_content');
    routea_link.attr('href', json1.href01);
    var routeb_link = $('<a>').appendTo(route_div);
    routeb_link.text(json1.routeb_link).addClass('top_link_content');
    routeb_link.attr('href', json1.href02);
}

/**
 * 質問画面のHTMLを作成する
 * @param {*} target2 対象となる要素
 * @param {*} json2 コンテンツ情報
 */
function createQuestion(target2, json2, qNo) {
    // タイトルの作
    // 設問の作成
    var question_div = $('<div>').appendTo(target2).addClass('list_item');
    question = "Q0" + qNo + ".";
    $('<p>').appendTo(question_div).text(question).addClass('title');
    $('<p>').appendTo(question_div).text(json2.content).addClass('question_heasding');
    $('<p>').appendTo(question_div).text(json2.list01).addClass('question_list_content clear');
    $('<p>').appendTo(question_div).text(json2.list02).addClass('question_list_content');
    $('<p>').appendTo(question_div).text(json2.list03).addClass('question_list_content');
    $('<p>').appendTo(question_div).text(json2.list04).addClass('question_list_content');
    // ボタンBOXの作成
    var btn_box_div = $('<div>').appendTo(target2).addClass('button_box');
    var firstParams = getReqParams();
    if (firstParams.f == "1") {
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
    } else {
      var yes_button = $('<a>').appendTo(btn_box_div);
      yes_button.attr('id', json2.yes_id);
      yes_button.addClass('yes_button');
      yes_button.text(json2.yes_content);
      yes_button.attr('href', json2.yes_button_href + "&questionno=" + qNo);
      var no_button = $('<a>').appendTo(btn_box_div);
      no_button.attr('id', json2.no_id);
      no_button.addClass('no_button');
      no_button.text(json2.no_content);
      no_button.attr('href', json2.no_button_href + "&questionno=" + qNo);
      //戻るボタン作成
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
    var question_div = $('<div>').appendTo(target3).addClass('list_item');
    // 設問の作成
    $('<p>').appendTo(question_div).text(json3.title).addClass('title');
    $('<p>').appendTo(question_div).text(json3.content01).addClass('result_heading01');
    $('<p>').appendTo(question_div).text(json3.content02).addClass('result_heading01');
    $('<p>').appendTo(question_div).text(json3.list01).addClass('result_list_content01 clear');
    $('<p>').appendTo(question_div).text(json3.content03).addClass('result_heading01');
    $('<p>').appendTo(question_div).text(json3.list02).addClass('result_list_content01');
    $('<p>').appendTo(question_div).text(json3.list03).addClass('result_list_content01');
    $('<p>').appendTo(question_div).text(json3.list04).addClass('result_list_content01');
    //報告テンプレートリンク
    var report_link = $('<a>').appendTo(question_div);
    report_link.text(json3.link_list).addClass('result_list_content01');
    report_link.attr('href', json3.report_href);
    var routea_link = $('<a>').appendTo(question_div);
    routea_link.text(json3.routea_link).addClass('result_list_content02');
    routea_link.attr('href', json3.href01);
    var routeb_link = $('<a>').appendTo(question_div);
    routeb_link.text(json3.routeb_link).addClass('result_list_content02');
    routeb_link.attr('href', json3.href02);
    //選択した設問表示
    var result_div = $('<div>').appendTo(target3).addClass('list_item');
    var table = $('<table>').appendTo(result_div).addClass('table');
    table.attr('border', 1);
    var tr01 = $('<tr>').appendTo(table);
    $('<th>').appendTo(tr01).text('回答した質問');
    $('<th>').appendTo(tr01).text('YES');
    $('<th>').appendTo(tr01).text('NO');

    var paramAnswer = getReqParams();
    var ls = paramAnswer.list.split(',');
    var pA = paramAnswer.answer.split(',');
    for (i = 0; i < pA.length; i++) {
      var a = pA[i];
      if (a == "yes") {
        ls.forEach(function(qId) {
          json2.forEach(function(obj) {
            if (obj.id == qId) {
              console.log(obj.id + ":" + obj.content);
              var tr02 = $('<tr>').appendTo(table);
              $('<td>').appendTo(tr02).text(obj.id);
              $('<td>').appendTo(tr02).text(obj.content);
            }
          });
        });
      } else if (a == "no") {
        ls.forEach(function(qId) {
          json2.forEach(function(obj) {
            if (obj.id == qId) {
              console.log(obj.id + ":" + obj.content);
              var tr02 = $('<tr>').appendTo(table);
              $('<td>').appendTo(tr02).text(" ");
              $('<td>').appendTo(tr02).text(obj.id);
              $('<td>').appendTo(tr02).text(obj.content);
            }
          });
        });
      } else {

      }
    }
    return

    /*if (param.answer == "yes") {
      list.forEach(function(qId) {
        json2.forEach(function(obj) {
          if (obj.id == qId) {
            console.log(obj.id + ":" + obj.content);
            var tr02 = $('<tr>').appendTo(table);
            $('<td>').appendTo(tr02).text(obj.id);
            $('<td>').appendTo(tr02).text(obj.content);
          }
        });
      });
    } else if (param.answer == "no") {
      list.forEach(function(qId) {
        json2.forEach(function(obj) {
          if (obj.id == qId) {
            console.log(obj.id + ":" + obj.content);
            var tr02 = $('<tr>').appendTo(table);
            $('<td>').appendTo(tr02).text(" ");
            $('<td>').appendTo(tr02).text(obj.id);
            $('<td>').appendTo(tr02).text(obj.content);
          }
        });
      });
    } else {

    }*/
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
 * 報告テンプレートの設問のHTMLを作成する
 * @param {*} target4 対象となる要素
 * @param {*} json4 コンテンツ情報
 */
function createTemplate(target4, json4) {
    var template_css = {
      marginLeft: "20px"
    }
    // 設問の作成
    var template_div = $('<div>').appendTo(target4).addClass('template_content');
    $('<p>').appendTo(template_div).text(json4.title).addClass('template_title');
    $('<p>').appendTo(template_div).text(json4.item01).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item02).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item_to).addClass('template_itme');
    var mail_link01 = $('<a>').appendTo(template_div);
    mail_link01.attr('id', json4.to01);
    mail_link01.text(json4.item_mail01);
    mail_link01.attr('href', json4.href_to01);
    mail_link01.css(template_css);
    $('<p>').appendTo(template_div).text(json4.item_cc).addClass('template_itme');
    var mail_link02 = $('<a>').appendTo(template_div);
    mail_link02.attr('id', json4.cc01);
    mail_link02.text(json4.item_mail02);
    mail_link02.attr('href', json4.href_cc01);
    mail_link02.css(template_css);
    $('<br>').appendTo(template_div);
    var mail_link03 = $('<a>').appendTo(template_div);
    mail_link03.attr('id', json4.cc02);
    mail_link03.text(json4.item_mail03);
    mail_link03.attr('href', json4.href_cc02);
    mail_link03.css(template_css);
    $('<br>').appendTo(template_div);
    $('<span>').appendTo(template_div).text(json4.item03).css(template_css);
    $('<p>').appendTo(template_div).text(json4.item04).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item05).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item06).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item07).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item08).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item09).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item10).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item11).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item12).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item13).addClass('template_itme');
    $('<p>').appendTo(template_div).text(json4.item14).addClass('template_itme');
    // ボタンBOXの作成
    var btn_box_div = $('<div>').appendTo(target4).addClass('button_box');
    // topに戻るボタンの作成
    var exit_button = $('<a>').appendTo(btn_box_div);
    exit_button.attr('id', json4.exit_id);
    exit_button.addClass('start_button');
    exit_button.text(json4.exit_content);
    exit_button.attr('href', json4.href);
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
