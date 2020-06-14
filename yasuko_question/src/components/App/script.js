export default {
  name: 'App',
  data(){
    return{
      questionNumber: 0,
      explanationFlag: false,
      resultFlag: null,
      numOfCorrect: 0,
      isPush: false,
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
          explanation: "<h2>分類：セキュリティ</h2><br><p>設問の例「10月31日の場合は、4月30日以降のデータについて、指定日の状態にファイルを復元できるようにする」ために何本の磁気テープが必要かを考えてみます。指定日のデータを復元するには、指定日の月初に取ったフルバックアップと、毎日記録する差分バックアップ用の磁気テープの2本が必要になります。4月，5月，…，10月までには全部で7つの月が存在します。各月についてフル用と差分用で2本の磁気テープが必要になるので、少なくとも(7×2＝)14本の磁気テープが必要になります。<p>"
        }
      ]
    }
  },
  methods:{
    check(selected, answer){
      this.explanationFlag = true;
      if(selected === answer){
        this.resultFlag = true
        if(!this.isPush) this.numOfCorrect++
        this.isPush = true
      }else{
        this.resultFlag = false
        this.isPush = true
      }
    },
    nextQuestino(){
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
    }
  }
}