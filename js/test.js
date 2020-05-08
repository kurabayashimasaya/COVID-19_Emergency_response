function arrayFunction021() {
//配列オブジェクトの作成
  var q = ['1', '2', '3', '4', '5', '6', '7', '8'];

  for (var i = 0; i < q.length; i++) {
    questionList.innerHTML = '<h1>'+ '質問' + q[i] + '</h1>'
  }
  document.getElementById("Q0").innerHTML = questionList;
}
