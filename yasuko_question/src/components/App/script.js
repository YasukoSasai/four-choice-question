export default {
  name: 'App',
  data(){
    return{
      questionNumber: 0,
      explanationFlag: false,
      resultFlag: null,
      numOfCorrect: 0,
      rateOfCorrect:0,
      questions:[
        {
          question: "私の出身地は？",
          choices: ["新潟", "大阪", "宮城", "アメリカ"],
          answer: 0,
          explanation: "新潟出身だからです。"
        },
        {
          question: "私の好きな食べ物は？",
          choices: ["油", "アイス", "刺身", "コーヒーゼリー"],
          answer: 2,
          explanation: "刺身はうまいからです。"
        },
        {
          question: "ITIL 2011 editionによれば，サービス・パッケージの説明として，適切なものはどれか。",
          choices: [
            "コアサービス，実現サービス及び強化サービスの組合せで構成された，特定の種類の顧客ニーズへのソリューションを提供する複数のサービスの集まりである。",
            "サービス・パイプライン，サービス・カタログ及び廃止済みサービスで構成された，サービス・プロバイダによって管理されている全てのサービスである。",
            "成果物，価格，連絡先などが内容として含まれた，稼働中の全てのITサービスに関する情報を格納するデータベース又は構造化された文書である。", 
            "ハードウェア，ソフトウェア，ライセンス，文書などで構成された，稼働中のITサービスに対して承認された変更を実施するためのコンポーネントの集合である。", 
            ],
          answer: 0,
          explanation: "<h3>分類：セキュリティ</h3><br><p>設問の例「10月31日の場合は、4月30日以降のデータについて、指定日の状態にファイルを復元できるようにする」ために何本の磁気テープが必要かを考えてみます。指定日のデータを復元するには、指定日の月初に取ったフルバックアップと、毎日記録する差分バックアップ用の磁気テープの2本が必要になります。4月，5月，…，10月までには全部で7つの月が存在します。各月についてフル用と差分用で2本の磁気テープが必要になるので、少なくとも(7×2＝)14本の磁気テープが必要になります。<p>"
        },
        {
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
      ]
    }
  },
  methods:{
    check(selected, answer){
      this.explanationFlag = true;
      if(selected === answer){
        this.numOfCorrect++
        this.resultFlag = true
      }else{
        this.resultFlag = false
      }
    },
    
    },
    
    nextQuestino(){
      this.explanationFlag = false;
      if (this.questionNumber == (this.questions.length - 1)){
        this.questionNumber = 0
        this.numOfCorrect = 0
        alert("もう問題はありません...はじめの問題に戻ります。")
      }else{
        this.questionNumber++
      }
    }
  }
