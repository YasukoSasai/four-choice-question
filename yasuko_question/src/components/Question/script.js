// import firebase from '@/firebase/firestore'
import firebase from "firebase";

export default {
  data(){
    return{
      colref: null,
      questionNumber: 0,
      explanationFlag: false,
      resultFlag: null,
      numOfCorrect: 0,
      rateOfCorrect:0,
      numOfClick: 0,
      isPush: false,
      questions:[
        // G検定
        {          
          questionNumber: 1,
          question: "（ア）に最もよくあてはまる選択肢を 1 つ選べ。ニューラルネットワークは高い表現力を持つ反面,過学習をしやすいという性質を持つため,それを改善させる方法が多数考考案されている。例えば,学習の際に一部のノードを無効化する（ア）,一部の層の出力を正規化する（イ）,データの水増しをしてデータの不足を補う（ウ）,パラメータのノルムにペナルティを課す（エ）などがそれに当たる。",
          choices: ["バッチ正規化", "ドロップアウト", "データ拡張", "L2正則化"],
          answer: 1,
          explanation: "<p>正解は2である。</P><br><p>バッチ正規化：一部の層の出力を正規化する。</p><br><p>ドロップアウト：学習の際に一部のノードを無効化する。</p><br><p>データ拡張：データの水増しをしてデータの不足を補う。</p><br><p>L2正則化：パラメータのノルムにペナルティを課す。</p>"
        },
        {
          questionNumber: 2,
          question: "（イ）に最もよくあてはまる選択肢を 1 つ選べ。ニューラルネットワークは高い表現力を持つ反面,過学習をしやすいという性質を持つため,それを改善させる方法が多数考考案されている。例えば,学習の際に一部のノードを無効化する（ア）,一部の層の出力を正規化する（イ）,データの水増しをしてデータの不足を補う（ウ）,パラメータのノルムにペナルティを課す（エ）などがそれに当たる。",
          choices: ["バッチ正規化", "ドロップアウト", "データ拡張", "L2正則化"],
          answer: 0,
          explanation: "<p>正解は1である。</P><br><p>バッチ正規化：一部の層の出力を正規化する。</p><br><p>ドロップアウト：学習の際に一部のノードを無効化する。</p><br><p>データ拡張：データの水増しをしてデータの不足を補う。</p><br><p>L2正則化：パラメータのノルムにペナルティを課す。</p>"
        },
        {
          questionNumber: 3,
          question: "（ウ）に最もよくあてはまる選択肢を 1 つ選べ。ニューラルネットワークは高い表現力を持つ反面,過学習をしやすいという性質を持つため,それを改善させる方法が多数考考案されている。例えば,学習の際に一部のノードを無効化する（ア）,一部の層の出力を正規化する（イ）,データの水増しをしてデータの不足を補う（ウ）,パラメータのノルムにペナルティを課す（エ）などがそれに当たる。",
          choices: ["バッチ正規化", "ドロップアウト", "データ拡張", "L2正則化"],
          answer: 2,
          explanation: "<p>正解は3である。</P><br><p>バッチ正規化：一部の層の出力を正規化する。</p><br><p>ドロップアウト：学習の際に一部のノードを無効化する。</p><br><p>データ拡張：データの水増しをしてデータの不足を補う。</p><br><p>L2正則化：パラメータのノルムにペナルティを課す。</p>"
        },
        {
          questionNumber: 4,
          question: "（エ）に最もよくあてはまる選択肢を 1 つ選べ。ニューラルネットワークは高い表現力を持つ反面,過学習をしやすいという性質を持つため,それを改善させる方法が多数考考案されている。例えば,学習の際に一部のノードを無効化する（ア）,一部の層の出力を正規化する（イ）,データの水増しをしてデータの不足を補う（ウ）,パラメータのノルムにペナルティを課す（エ）などがそれに当たる。",
          choices: ["バッチ正規化", "ドロップアウト", "データ拡張", "L2正則化"],
          answer: 3,
          explanation: "<p>正解は4である。</P><br><p>バッチ正規化：一部の層の出力を正規化する。</p><br><p>ドロップアウト：学習の際に一部のノードを無効化する。</p><br><p>データ拡張：データの水増しをしてデータの不足を補う。</p><br><p>L2正則化：パラメータのノルムにペナルティを課す。</p>"
        },        
        {
          questionNumber: 5,
          question: "学習率の値は学習の進み方に大きな影響を与える.例えば,学習率が過度に（ア）いとコスト関数の高い局所的最適解から抜け出せなくなることがある.また,大域的最適解に向かって収束している場合でも,学習率が（イ）いと,収束は速いがコスト関数の最終的な値が高く,逆に（ウ）くすると収束は遅いが最終的にはより最適解に近いパラメータになるため,コスト関数は小さな値に収束する。",
          choices: ["大き・小さ・小さ", "小さ・大き・小さ", "大き・小さ・大き", "小さ・大き・大き"],
          answer: 1,
          explanation: "正解は2である。学習率が小さいと,収束に時間がかかり,コスト関数の最終的な値は小さくなる.また,局所的最適解から抜け出せずそのまま収束してしまうことがある。反対に学習率が大きい場合は,収束するのが早くなるが,コスト関数は大きな値になりやすい。"
        },
        {
          questionNumber: 6,
          question: "生成モデル（generative model）の一つであり,生成ネットワークと識別ネットワークの 2 つのネットワークを対抗させるように学習させることで,得られる生成モデル（generative model）の名称として最も適切なものを 1 つ選べ。",
          choices: ["ResNet", "VGG16", "VAE", "GAN"],
          answer: 3,
          explanation: "<p>正解は4である。</P><br><p>GANは生成ネットワーク,識別ネットワークの二つを競い合わせることで生成モデルを獲得する。画像生成分野でよく使用される。</p><p>ResNet：画像分類タスクで用いられるCNNモデルである。</p><br><p>VGG16：画像分類タスクで用いられるCNNモデルである。</p><br><p>VAE：平均や分散などを求める生成モデルである。</p>"
        },
        {
          questionNumber: 7,
          question: "データが少量しかないなどの理由で,対象のタスクを学習させることが困難なときに,関連する別のタスクで学習し,その学習済みの特徴やパラメータなどを利用することで効率的に対象のタスクを学習することができる.これを（ア）という。",
          choices: ["強化学習", "アンサンブル学習", "転移学習", "マルチタスク学習"],
          answer: 2,
          explanation: "<p>正解は3である。</P><br><p>強化学習は行動を学習する手法のことである。</p><br><p>アンサンブル学習は複数の学習器を組み合わせて予測する手法のことである。</p><br><p>問題文のとおりである。</p><br><p>同時に複数の識別問題に対応できるように学習する手法のことである。</p>"
        },
        {
          questionNumber: 8,
          question: "（ア）に最もよくあてはまる選択肢を 1 つ選べ。ディープラーニングは,ニューラルネットワークを多層化したものであり,観測データから本質的な情報である（ア）を自動的に抽出できる点が特徴である.また,従来の機械学習手法と比べると,（イ）という性質も持っている。",
          choices: ["特徴量", "潜在変数", "モデル", "訓練データ"],
          answer: 0,
          explanation: "<p>正解は1である。</P>"
        },
        {
          questionNumber: 9,
          question: "（イ）にあてはまらない選択肢を 1 つ選べ。ディープラーニングは,ニューラルネットワークを多層化したものであり,観測データから本質的な情報である（ア）を自動的に抽出できる点が特徴である.また,従来の機械学習手法と比べると,（イ）という性質も持っている。",
          choices: ["学習に必要なパラメータ数が多い", "結果の解釈性・説明性に優れている", "計算量が多い", "より複雑な関数を近似できる"],
          answer: 1,
          explanation: "<p>正解は2である。</P>"
        },
        {
          questionNumber: 10,
          question: "機械学習の２値分類問題における性能指標について、「適合率」と「再現率」がトレードオフ関係にあるために導入されたこれらの調和平均の名称は？",
          choices: ["正解率", "適合", "F値", "偽陽性"],
          answer:2,
          explanation: "<p>正解は3である。</p>"
        },
        {
          questionNumber: 11,
          question: "教師あり学習の問題は出力値の種類によって､大きく２種類に分けられる。(A) 問題は出力が離散値であり､カテゴリーを予測したいときに利用される。一方､(B) 問題は出力が連続値であり､その連続値そのものを予測したいときに利用される。",
          choices: ["(A) 限定 (B) 一般", "A) 部分 (B) 完全", "A) 分類 (B) 回帰", "A) 線形 (B) 非線形"],
          answer:2,
          explanation: "<p>正解は3である。</P><br><p>「分類」はあらかじめ設定されたカテゴリにデータを分けたい、つまりカテゴリ（離散値）を予測したい時の手法で、「回帰」は、データから何らかの数値（連続値）を予測したい時の手法です。</p><br><p>分類：カテゴリ（離散値）を予測。例：画像分類、スパム判定など</p><br><p>回帰：数値（連続値）を予測。例：売上予測、家賃予測など</p>"
        },
        {
          questionNumber: 12,
          question: "あるニューラルネットワークのモデルを学習させた際､テストデータに対する誤差を観測していた｡そのとき､学習回数が100を超えるまでは誤差が順調に下がり続けていたが､それ以降は誤差が徐々に増えるようになってしまった｡その理由として最も適切なものを1つ選べ｡",
          choices: ["学習回数が増えるほど、誤差関数の値が更新されにくくなるため。", "学習回数が増えるほど、学習データにのみ最適化されるようになってしまうため", "学習回数が増えるほど、一度に更新しなければならないパラメータの数が増えていくため。", "学習回数が増えるほど､計算処理にかかる時間が増えてしまうため。"],
          answer:1,
          explanation: "<p>正解は2である。</P><br><p>機械学習では、学習データに対する予測の誤差（訓練誤差）は小さいにもかかわらず、テストデータでの予測の誤差（＝汎化誤差）は小さくならないことがあり、これを「過学習」と呼びます。モデルが学習データにのみ最適化され、未知のデータに対する精度が落ちているという状態です。</p><br><p>正則化：誤差関数にモデルの重みがとり得る値の範囲を制限する項（正則化項）を追加することで、モデルが複雑になりすぎることを防ぐ</p><br><p>ドロップアウト:ランダムにニューロンを非活性化することで、毎回異なるネットワークで学習を行う。</p><br><p>Early Stopping（早期打ち切り）:誤差関数の値が上がり始めた時点で学習を止める</p>"
        },



        // 応用情報
        {
          questionNumber: 13,
          question: "次の図の作成で用いられている表記法はどれか。",
          image:require("@/assets/questionImage.gif"),
          choices: [
            "流れ図", 
            "ペトリネット", 
            "状態遷移図", 
            "DFD"],
          answer: 3,
          explanation: "<h3>テクノロジ系 » システム開発技術 » ソフトウェア要件定義</h3><br><p>DFD(Data Flow Diagram)は、データの流れに着目して、その対象となる業務のデータの流れと処理の関係をわかりやすく図式化する構造化分析の手法です。「○」処理・プロセス，「□」データの吸収先，「→」データの流れ，「〓」データストアの4つの記号を用いて対象業務のモデル化を行います。</p>",
          image2:require("@/assets/questionImage.gif")
        },
        {
          questionNumber: 14,
          question: "ITIL 2011 editionによれば，サービス・パッケージの説明として，適切なものはどれか。",
          choices: [
            "コアサービス，実現サービス及び強化サービスの組合せで構成された，特定の種類の顧客ニーズへのソリューションを提供する複数のサービスの集まりである。",
            "サービス・パイプライン，サービス・カタログ及び廃止済みサービスで構成された，サービス・プロバイダによって管理されている全てのサービスである。",
            "成果物，価格，連絡先などが内容として含まれた，稼働中の全てのITサービスに関する情報を格納するデータベース又は構造化された文書である。", 
            "ハードウェア，ソフトウェア，ライセンス，文書などで構成された，稼働中のITサービスに対して承認された変更を実施するためのコンポーネントの集合である。", 
            ],
          answer: 0,
          explanation: "<h3>分類：セキュリティ</h3><br><p>設問の例「10月31日の場合は、4月30日以降のデータについて、指定日の状態にファイルを復元できるようにする」ために何本の磁気テープが必要かを考えてみます。指定日のデータを復元するには、指定日の月初に取ったフルバックアップと、毎日記録する差分バックアップ用の磁気テープの2本が必要になります。4月，5月，…，10月までには全部で7つの月が存在します。各月についてフル用と差分用で2本の磁気テープが必要になるので、少なくとも(7×2＝)14本の磁気テープが必要になります。</p>"
        },
      ]
    }
  },
  mounted(){
    console.log(this.questions)
    this.colref = firebase.firestore().collection("memos"); // "memos"という名前のコレクションへの参照を作成
    this.questionsDB = firebase.firestore().collection("questionsDB"); // "memos"という名前のコレクションへの参照を作成
  },
  methods:{

    addQuestions(){
      for(var i=0; i<this.questions.length; i++){

        var data = this.questions[i]
        // addの引数に保存したいデータを渡す
        this.questionsDB.add(data).then(function(docRef) {
         // 正常にデータ保存できた時の処理
         console.log("Document written with ID: ", docRef.id);
     }).catch(function(error) {
         // エラー発生時の処理
         console.error("Error adding document: ", error);
     });
      }
    },
    readQuestions(){
      this.questionsDB.onSnapshot(function (querySnapshot) {
        var todos = [];
        querySnapshot.forEach(function (doc) {
          var data = doc.data();
          data.id = doc.id;
          // firestoreの内のデータをtodosに格納
          todos.push(data);
        });
        this.questions = todos
        console.log(this.questions)
    });
  },

    sendItem(data){
      // addの引数に保存したいデータを渡す
      this.colref.add(data).then(function(docRef) {
           // 正常にデータ保存できた時の処理
           console.log("Document written with ID: ", docRef.id);
       }).catch(function(error) {
           // エラー発生時の処理
           console.error("Error adding document: ", error);
       });
    },
    readItem(){
      this.colref.onSnapshot(function (querySnapshot) {
        var todos = [];
        querySnapshot.forEach(function (doc) {
          var data = doc.data();
          data.id = doc.id;
          // firestoreの内のデータをtodosに格納
          todos.push(data);
        });
        console.log(todos)
      });
    },
    scrollToElement() {  
      var element = document.getElementById("target");
      element.scrollIntoView();
      element.scrollIntoView(false);
      element.scrollIntoView({block: "end"});
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 
    check(selected, answer){
      if(!this.isPush) this.numOfClick++
      this.explanationFlag = true;
      if(selected === answer){
        this.resultFlag = true
        if(!this.isPush) this.numOfCorrect++
        this.isPush = true
      }else{
        this.resultFlag = false
        this.isPush = true
      }
      this.scrollToElement()

      const data = {
        questionNumber: this.questionNumber + 1,
        answerNumber: answer,
        selectedNumber: selected,
        result: this.resultFlag
      }

      this.sendItem(data)
    },
    nextQuestion(){
      this.explanationFlag = false;
      if (this.questionNumber == (this.questions.length - 1)){
        this.questionNumber = 0
        this.numOfCorrect = 0
        alert("もう問題はありません...はじめの問題に戻ります。")
        this.isPush = false
      }else{
        this.questionNumber++
        this.isPush = false
      }
      window.scrollTo( 0, 0 );
    }
  },
  filters: {
    rounding(value){
      return Math.round(value)
    }
  }
}