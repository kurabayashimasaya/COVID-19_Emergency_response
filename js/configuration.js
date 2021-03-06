/**
 * index.html
 * id...HTML上のdiv要素のidと紐づき、DOMの作成に使用
 * content...タイトル
 * list01~list03...一覧
 * roota_link...ルートAのテキスト
 * roota_href...ルートAのリンク
 * rootb_link...ルートBのテキスト
 * rootb_href...ルートBのリンク
 * top_id...ボタンのid
 * next_content...topボタンのテキスト
 * top_href...topボタンのリンク
 */
var json1 = [
  {
      "id" : "T00",
      "content" : "以下の場合に本判断フローを実施し、その結果に基づいて行動くださるようにお願い致します。",
      "list01" : "・身近に感染者が存在するまたは、存在した場合",
      "list02" : "・現在発熱がある場合",
      "list03" : "",
      "roota_link" : "ルートAはこちら",
      "roota_href" : "test.html?questionid=10&questionno=0&f=0",
      "rootb_link" : "ルートBはこちら",
      "rootb_href" : "test.html?questionid=12&questionno=0&f=0",
      "top_id" : "Q01",
      "next_content" : "診断開始",
      "top_href" : "test.html?questionid=0&questionno=0&f=0"
  }
];
/**
 * test.html
 * id...HTML上のdiv要素のidと紐づき、DOMの作成に使用
 * content...タイトル
 * list01~list04...一覧
 * yes_id...YESボタンのid
 * yes_content...YESボタンのテキスト
 * yes_button_href...YESボタンのリンク
 * no_id...NOボタンのid
 * no_content...NOボタンのテキスト
 * no_button_href...NOボタンのリンク
 * return_id...returnボタンのid
 * return_content...returnボタンのテキスト
 * return_button_href...returnボタンのリンク
 */
var json2 = [
    {
        "id" : "Q01",
        "content" : "周囲に新型コロナの疑いまたは、陽性の人物（感染可能性者）が近くに現れた。または、そのような情報を入手した。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "Q02",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=1&beforeid=0&f=1",
        "no_id" : "A01",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=0&list=Q01&answer=no"
    },
    {
        "id" : "Q02",
        "content" : "感染可能性者との接触があった。",
        "list01" : "・業務居室が同じである（あった）（現場等）",
        "list02" : "・共同生活である（あった）（家族等）",
        "list03" : "・対面での会話歴がある（あった）（顧客等）",
        "list04" : "・飲食・娯楽を共にする場面がある（あった）(友人等）",
        "yes_id" : "Q03",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=2&beforeid=1&f=2",
        "no_id" : "Q03_q",
        "no_content" : "NO",
        "no_button_href" : "test.html?questionid=7&beforeid=1&f=2",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q03",
        "content" : "感染可能性者の新型コロナウイルス感染が確定している（した）。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "Q04",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=3&beforeid=2&f=3",
        "no_id" : "Q04_q",
        "no_content" : "NO",
        "no_button_href" : "test.html?questionid=8&beforeid=2&f=3",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q04",
        "content" : "当事者の体調に以下の３つがすべて当てはまる。",
        "list01" : "・37.5℃以上の発熱が4日間以上継続している。",
        "list02" : "・一週間以上の咳が継続している。",
        "list03" : "・強い倦怠感・呼吸困難・味覚障害に陥るときがある。",
        "list04" : "",
        "yes_id" : "Q05",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=4&beforeid=3&f=4",
        "no_id" : "Q05_q",
        "no_content" : "NO",
        "no_button_href" : "test.html?questionid=9&beforeid=3&f=4",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q05",
        "content" : "体調の不良に伴い通院を行った。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "Q06",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=5&beforeid=4&f=5",
        "no_id" : "A04",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=3&list=Q01,Q02,Q03,Q04,Q05&answer=yes,yes,yes,yes,no",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q06",
        "content" : "通院の結果、PCR検査の受検を指示された。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "Q07",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=6&beforeid=5&f=6",
        "no_id" : "A05",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=4&list=Q01,Q02,Q03,Q04,Q05,Q06&answer=yes,yes,yes,yes,yes,no",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q07",
        "content" : "当事者が陽性であると判断された。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A06",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=5&list=Q01,Q02,Q03,Q04,Q05,Q06,Q07&answer=yes,yes,yes,yes,yes,yes,yes",
        "no_id" : "A05",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=4&list=Q01,Q02,Q03,Q04,Q05,Q06,Q07&answer=yes,yes,yes,yes,yes,yes,no",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q03_q",
        "content" : "新型コロナウイルスに関する現場指示が存在する。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A02",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=1&list=Q01,Q02,Q03_q&answer=yes,no,yes&re=1",
        "no_id" : "A03",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=2&list=Q01,Q02,Q03_q&answer=yes,no,no&re=1",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q04_q",
        "content" : "新型コロナウイルスに関する現場指示が存在する。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A02",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=1&list=Q01,Q02,Q03,Q04_q&answer=yes,yes,no,yes&re=1",
        "no_id" : "A03",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=2&list=Q01,Q02,Q03,Q04_q&answer=yes,yes,no,no&re=1",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q05_q",
        "content" : "新型コロナウイルスに関する現場指示が存在する。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A02",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=1&list=Q01,Q02,Q03,Q04,Q05_q&answer=yes,yes,yes,no,yes&re=1",
        "no_id" : "A03",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=2&list=Q01,Q02,Q03,Q04,Q05_q&answer=yes,yes,yes,no,no&re=1",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q01_a",
        "content" : "通院の結果、PCR検査の受検を指示された。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "Q07",
        "yes_content" : "YES",
        "yes_button_href" : "test.html?questionid=11&beforeid=10&f=1",
        "no_id" : "A05",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=4&list=Q01_a&answer=no&re=1",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q02_a",
        "content" : "当事者が陽性であると判断された。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A06",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=5&list=Q01_a,Q02_a&answer=yes,yes&&re=1",
        "no_id" : "A05",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=4&list=Q01_a,Q02_a&answer=yes,no&&re=1",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    },
    {
        "id" : "Q01_b",
        "content" : "新型コロナウイルスに関する現場指示が存在する。",
        "list01" : "",
        "list02" : "",
        "list03" : "",
        "list04" : "",
        "yes_id" : "A02",
        "yes_content" : "YES",
        "yes_button_href" : "result.html?resultid=1&list=Q01_b&answer=yes&re=1",
        "no_id" : "A03",
        "no_content" : "NO",
        "no_button_href" : "result.html?resultid=2&list=Q01_b&answer=no&re=1",
        "return_id" : "backAnchorLink",
        "return_content" : "return",
        "return_button_href" : "test.html"
    }
];
/**
 * result.html
 * id...HTML上のdiv要素のidと紐づき、DOMの作成に使用
 * number...質問番号
 * content01~content03...見出し１
 * list01~list03...一覧
 * link_list...template.htmlのテキスト
 * report_href...template.htmlのリンク
 * exit_id...top画面に戻るボタンのid
 * exit_content...top画面に戻るボタンのテキスト
 * href...index.htmlのリンク
 * roota_link...ルートAのテキスト
 * roota_href...ルートAのリンク
 * rootb_link...ルートBのテキスト
 * rootb_href...ルートBのリンク
 */
var json3 = [
  {
      "id" : "A01",
      "number" : "A01",
      "content01" : "○通常通りの生活・業務を行ってください。",
      "content02" : "",
      "list01" : "",
      "content03" : "",
      "list02" : "",
      "list03" : "",
      "link_list" : "",
      "report_href" : "",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A03",
      "number" : "A03",
      "content01" : "○まず、営業へ電話で状況を簡潔に伝えてください。",
      "content02" : "",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、総務からの指示を仰いでください。",
      "list02" : "営業が起点となり今後の業務方針を契約先と相談し、後日情報連携します。",
      "list03" : "",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A02",
      "number" : "A02",
      "content01" : "",
      "content02" : "○まず、営業へ電話で状況を伝えてください。",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、現場指示に従ってください。",
      "list02" : "営業が起点となり今後の業務方針を契約先と相談し、後日情報連携します。",
      "list03" : "",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A04",
      "number" : "A04",
      "content01" : "○通院・診察を受け、医師の指示に従ってください。",
      "content02" : "○まず、営業へ電話で状況を伝えてください。",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、総務からの指示を仰いでください。",
      "list02" : "診察結果から、「ルートA」を参照してフローの確認を進めてください。",
      "list03" : "",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "roota_link" : "ルートAはこちら",
      "roota_href" : "test.html?questionid=10&beforeid=0&questionno=0&f=0",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A05",
      "number" : "A05",
      "content01" : "○医師の指示に従ってください。",
      "content02" : "○まず、営業へ電話で状況を伝えてください。",
      "list01" : "・優先順位：今井＞小鹿または高橋の順番で電話してください。",
      "content03" : "○状況の報告※1を行い、総務からの指示を仰いでください。",
      "list02" : "・重大な疾患でない限り、自宅等で体調回復に努めてください。",
      "list03" : "・体調回復後は、「ルートB」を参照してフローの確認を進めてください。",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "rootb_link" : "ルートBはこちら",
      "rootb_href" : "test.html?questionid=12&questionno=0&f=0",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  },
  {
      "id" : "A06",
      "number" : "A06",
      "content01" : "○医師の指示に従ってください。",
      "content02" : "○日々の体調・病状状況の報告※1を行ってください。",
      "list01" : "・体調回復後は、「ルートB」を参照してフローの確認を進めてください。",
      "content03" : "",
      "list02" : "",
      "list03" : "",
      "link_list" : "※1状況の報告についてはこちら",
      "report_href" : "template.html",
      "rootb_link" : "ルートBはこちら",
      "rootb_href" : "test.html?questionid=12&questionno=0&f=0",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  }
];
/**
 * template.html
 * id...HTML上のdiv要素のidと紐づき、DOMの作成に使用
 * title...タイトル
 * item01~item15...一覧、リスト、項目
 * item_to...toのテキスト
 * id01...toのid
 * id02~id03...ccのid
 * href_mail...mailリンク
 * item_mail01~item_mail03...mailアドレス
 * exit_id...topのid
 * exit_content...topに戻るテキスト
 * href...index.html
 */
var json4 = [
  {
      "id" : "tmp",
      "title" : "※１：報告のテンプレートについて",
      "item01" : "・フローの随所に報告を必要とする場面があります。その報告には以下の事項を含めて報告をお願いします。",
      "item02" : "※自身をはじめとする、社員・ご家族の命を守る活動として認識し、迅速なご対応をお願いいたします。",
      "item_to" : "・TO:",
      "id01" : "to01",
      "href_mail" : "mailto:sales@brave-heart.co.jp?subject=【報告】新型コロナウイルス感染症判断フロー報告_氏名_YYYYMMDD&amp;&body=※CCに所属のチームリーダーを追加してください。&amp;&&cc=imai@brave-heart.co.jp,hiratsuka@brave-heart.co.jp",
      "item_mail01" : "sales@brave-heart.co.jp;",
      "item_cc" : "・CC:",
      "id02" : "cc01",
      "id03" : "cc02",
      "item_mail02" : "imai@brave-heart.co.jp;",
      "item_mail03" : "hiratsuka@brave-heart.co.jp;",
      "item03" : "所属チームリーダー",
      "item04" : "・件名：【報告】新型コロナウイルス感染症 判断フロー 報告_氏名_YYYYMMDD",
      "item05" : "・内容：以下の内容を含めてください。",
      "item06" : "①４日間以上続く37.5℃以上の発熱がある（YES/NO）",
      "item07" : "②1週間以上続く、咳、くしゃみの症状がある（YES/NO）",
      "item08" : "③強い全身のだるさ、呼吸がしにくい息苦しさ、味覚障害がある（YES/NO）",
      "item09" : "④感染者（疑いを含む）との関係性（現場社員、家族、友人、ほか）",
      "item10" : "⑤感染者（疑いを含む）発生報告を受けた日からさかのぼって14日以内に接触した社内メンバーの報告",
      "item11" : "⑥現場責任者からの指示情報連携",
      "item12" : "⑦上位会社等の現場外からの情報である（YES/NO）",
      "item13" : "⑧現時点のアローアンス下限値を下回る可能性（YES/NO）",
      "item14" : "⑨現場の新型コロナウイルスに対応する進捗状況説明報告",
      "item15" : "⑩リモートワーク対応の可否（YES/NO）",
      "exit_id" : "T00",
      "exit_content" : "topに戻る",
      "href" : "index.html"
  }
];
/**
 * overview.html
 * id...HTML上のdiv要素のidと紐づき、DOMの作成に使用
 * title...タイトル
 * content01~content04...見出し
 * item01~item10...一覧、リスト
 * li01~li03...項目
 * exit_id...topのid
 * exit_content...topに戻るテキスト
 * href...index.html
 */
var json5 = [
  {
      "id" : "view",
      "title" : "初めに",
      "content01" : "本フローは、株式会社ブレイブハートの従業員を対象とした、新型コロナウイルスの感染が発生または、疑わしい症状が発生した場合に行動を判断するガイドラインとして利用します。",
      "item01" : "※ あくまでガイドラインであり、本フローに沿わない事態や状況に関しては、臨機応変な対応及び円滑なコミュニケーションで対応をお願いいたします。",
      "item02" : "※ 国内での新型コロナウイルスに関する情報が錯綜し刻々と変化している状況です。事前通知なく内容が変更になる可能性があります。",
      "item03" : "※ 本フローに関する問い合わせは、「management@brave-heart.co.jp」へご連絡お願いいたします。",
      "content02" : "○情報統制に関する理解とお願い",
      "item04" : "・いろいろなデマや憶測が錯綜する中で、不用意な発言による雇用機会の損失売り上げ低下が発生することで事業が維持できなくなる可能性が非常高いです。",
      "item05" : "・今後の皆様の生活基盤維持にも大きくかかわってくる内容なので深刻に受け止めていただき、ご理解とご協力をお願いします。",
      "content03" : "原則：感染に関する情報を一社員から発信しない。",
      "item06" : "・然るべき責任部門から正式にお客様へ告知することを第一に考えてください。",
      "content04" : "○影響範囲",
      "li01" : "１．会社間の信頼関係",
      "item07" : "・一社員からの情報漏洩による企業イメージのマイナス",
      "item08" : "・非感染者の感染疑いによる出勤停止、休暇強要、契約解消の可能性",
      "li02" : "２．誤情報によるパニック",
      "item09" : "・会社責任部門以外からの社内外へ向けての情報発信で不安を煽る可能性",
      "li03" : "３．コロナハラスメント被害",
      "item10" : "・非感染者であるのに、花粉症や風邪症状に起因する咳・くしゃみで新型コロナウイルス感染者として扱われる可能性",
      "exit_id" : "T00",
      "exit_content" : "YES/NOフローに進む",
      "href" : "index.html"
  }
];
