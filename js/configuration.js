var json1 = [
  {
      "id" : "T00",
      "content" : "以下の場合に本判断フローを実施し、その結果に基づいて行動くださるようにお願い致します。",
      "list01" : "・身近に感染者が存在するまたは、存在した場合",
      "list02" : "・現在発熱がある場合",
      "list03" : "・現在発熱がある場合",
      "top_id" : "Q01",
      "next_content" : "診断開始",
      "href" : "test.html?questionid=0&beforeid=0",
  }
];

var json2 = [
    {
        "id" : "Q01",
        "title" : "Q01.",
        "content" : "周囲に新型コロナの疑いまたは、陽性の人物（感染可能性者）が近くに現れた。または、そのような情報を入手した。",
        "yes_id" : "Q02",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=1&beforeid=1",
        "no_id" : "A01",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=0"
    },
    {
        "id" : "Q02",
        "title" : "Q02.",
        "content" : "感染可能性者との接触があった。",
        "list01" : "・業務居室が同じである（あった）（現場等）",
        "list02" : "・共同生活である（あった）（家族等）",
        "list03" : "・対面での会話歴がある（あった）（顧客等）",
        "list04" : "・飲食・娯楽を共にする場面がある（あった）(友人等）",
        "yes_id" : "Q03",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=2&beforeid=1",
        "no_id" : "Q08",
        "no_content" : "NO",
        "no_button_href" : "test.html?questionid=7&beforeid=1",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q03",
        "title" : "Q03.",
        "content" : "感染可能性者の新型コロナウィルス感染が確定している（した）。",
        "yes_id" : "Q04",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=3&beforeid=2",
        "no_id" : "Q08",
        "no_content" : "NO",
        "no_button_href" : "test.html?questionid=7&beforeid=2",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html?questionid=1&beforeid=0"
    },
    {
        "id" : "Q04",
        "title" : "Q04.",
        "content" : "当事者の体調に以下の３つがすべて当てはまる。",
        "list01" : "・37.5℃以上の発熱が4日間以上継続している。",
        "list02" : "・一週間以上の咳が継続している。",
        "list03" : "・強い倦怠感・呼吸困難・味覚障害に陥るときがある。",
        "yes_id" : "Q05",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=4&beforeid=3",
        "no_id" : "Q08",
        "no_content" : "NO",
        "no_button_href" : "test.html?questionid=7&beforeid=3",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q05",
        "title" : "Q05.",
        "content" : "体調の不良に伴い通院を行った。",
        "yes_id" : "Q06",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=5&beforeid=4",
        "no_id" : "A04",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=3",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q06",
        "title" : "Q06.",
        "content" : "通院の結果、PCR検査の受検を指示された。",
        "yes_id" : "Q07",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=6&beforeid=5",
        "no_id" : "A05",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=4",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q07",
        "title" : "Q07.",
        "content" : "当事者が陽性であると判断された。",
        "yes_id" : "A06",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=5",
        "no_id" : "A05",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=4",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q08",
        "title" : "Q08.",
        "content" : "新型コロナウィルスに関する現場指示が存在する。",
        "yes_id" : "A03",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=1",
        "no_id" : "A02",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=2",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    }
];

var json3 = [
  {
      "id" : "A01",
      "title" : "A01.",
      "content01" : "○通常通りの生活・業務を行ってください。",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A02",
      "title" : "A02.",
      "content01" : "○まず、営業へ電話で状況を簡潔に伝えてください。",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、総務からの指示を仰いでください。",
      "list02" : "営業が起点となり今後の業務方針を契約先と相談し、後日情報連携します。",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A03",
      "title" : "A03.",
      "content02" : "○まず、営業へ電話で状況を伝えてください。",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、現場指示に従ってください。",
      "list02" : "営業が起点となり今後の業務方針を契約先と相談し、後日情報連携します。",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A04",
      "title" : "A04.",
      "content01" : "○医師の指示に従ってください。",
      "content02" : "○まず、営業へ電話で状況を伝えてください。",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、総務からの指示を仰いでください。",
      "list02" : "診察結果から、「ルートA」を参照してフローの確認を進めてください。",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A05",
      "title" : "A05.",
      "content01" : "○医師の指示に従ってください。",
      "content02" : "○まず、営業へ電話で状況を伝えてください。",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、総務からの指示を仰いでください。",
      "list02" : "・重大な疾患でない限り、自宅等で体調回復に努めてください。",
      "list03" : "・体調回復後は、「ルートB」を参照してフローの確認を進めてください。",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A06",
      "title" : "A06.",
      "content01" : "○医師の指示に従ってください。",
      "content02" : "○日々の体調・病状状況の報告※1を行ってください。",
      "list01" : "・体調回復後は、「ルートB」を参照してフローの確認を進めてください。",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  }
];
