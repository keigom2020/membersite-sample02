<template>
  <transition mode="out-in" name="fade" appear>
    <div id="policy" class="bg">
    <h2 class="heading__lv2">
      <span>サイトポリシー</span>
    </h2>
    <div class="column__wrapper inner">
      <div class="column">
        <p>
          会員サイト（以下、「会員サイト」といいます）のWebサイト（以下、「本サイト」といいます）のご利用に際しては、以下のご利用条件をお読みいただき、これらの条件にご同意の上ご利用ください。
        </p>
        <p>
          なお、サイトポリシーおよび関連する規定類は、予告なく内容を変更させていただく場合がございますので、あらかじめご了承ください。
        </p>
      </div>
      <div class="column">
        <h2 class="heading__lv3">
          2. 利用の範囲と利用条件について
        </h2>
        <p>
          本サイトに掲載されている文章、図版、画像、イラスト、音声、映像等、その他のすべての情報（以下、「著作物」といいます）は、特に明記されたものを除き、会員サイトが著作権を有しており、著作権の対象となっています。また、本サイト全体も編集著作物として著作権の対象となっており、ともに日本国著作権法及び国際条約により保護されています。 本サイト上の情報については、「私的使用のための複製や引用等」著作権法上、利用が認めらる場合を除き、会員サイトの事前の許可なく、これらの情報を利用（複製、改変、配布、公衆送信等を含む）することはお断りします。（引用等を行う場合には、適宜の方法により出所を明示してください。）利用する際は必ず「（ｃ） 会員サイト（または会員サイト）」のクレジットを表示してください。
        </p>
        <p>
          また、本サイトに掲載されている会員サイトロゴについては、会員サイトの日本およびその他の国における登録商標です。会員サイト以外のご利用はご遠慮ください。
        </p>
      </div>
      <div class="column">
        <h2 class="heading__lv3">
          3. 不正な利用について
        </h2>
        <p>
          利用者が利用規程に定める各事項を遵守したご利用を行っていないと会員サイトが合理的に判断した場合は、不正な利用に対して、当該利用を差し止める権利を有するものとします。
        </p>
        <p>
          また、本サイトに掲載されている会員サイトロゴについては、会員サイトの日本およびその他の国における登録商標です。会員サイト以外のご利用はご遠慮ください。
        </p>
      </div>
      <div class="column">
        <h2 class="heading__lv3">
          4. 本サイトへのリンクについて
        </h2>
        <p>
          本サイトへのリンク設定については全面的に禁止いたします。        
        </p>
      </div>
      <div class="column">
        <h2 class="heading__lv3">
          5. 法準拠及び管轄裁判所
        </h2>
        <p>
          本サイトのご利用ならびにここに記すご利用規程の解釈及び適用には、他に別段の定めのない限り、日本国法に準拠するものとします。<br>
          また本サイトのご利用に関わるすべての紛争については、東京地方裁判所を第一審の専属直轄裁判所といたします。    
        </p>
      </div>
      <div class="column">
        <h2 class="heading__lv3">
          6. プライバシーポリシー
        </h2>
        <p>
          (2)利用者情報の収集について
          (3)収集した情報・資料の利用範囲について
          (4)収集した情報・資料の第三者への開示について
          (5)セキュリティについて
          (8)プライバシーポリシーの変更について
        </p>
      </div>
      <div class="column">
        <h2 class="heading__lv3">
          7. アクセシビリティ
        </h2>
        <p>
          会員サイトウェブサイトを快適にご利用いただくために、以下のブラウザを推奨いたします。制作にあたってはお使いの環境によって体裁が崩れたり、情報が欠けたりしないよう努めていますが、一部の古いブラウザでは正しく表示されない場合があります。
        </p>
        <p>
          Windowsをお使いの場合
          推奨OS:
          Windows 7以降

          推奨ブラウザ:
          ・Microsoft Edge 最新版
          ・Google Chrome 最新版
          ・Mozilla FireFox 最新版
        </p>
        <p>
          Macintoshをお使いの場合
          推奨OS:
          Mac OS X 10.6以降

          推奨ブラウザ:
          ・Google Chrome 最新版
          ・Mozilla FireFox 最新版
          ・Safari 最新版

          各推奨ブラウザの最新バージョンについては、以下よりご確認ください。
        </p>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
#policy .column__wrapper {
  background-color:rgba(255,255,255,0.8);
  padding: 20px;
  border-radius: 8px;
}

p {
  color: #000;
}

#policy .column {
  width: 100%;
  margin: 0;
  border: none;
  text-align: left;
}

#policy {
  .heading__lv3 {
    color: #000;
    margin-top: 2rem;
    margin-bottom: 0rem;
  }
}

</style>