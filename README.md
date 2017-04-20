# simple-sns
simple sns SPA using react&amp;redux

# Development

    yarn install

    # ホットリスタートによる開発
    yarn run server

    # 各種環境に向けたdistの作成
    yarn build-dev
    yarn build-stg
    yarn build-prd

    # APIサーバの起動
    node server.js

# Architecture

    src----/actions イベントが発火した時のコアロジックを全てココに記述する
        |
        |
        ---/components 画面の描画だけに集中したコンポーネントを配置(css, html系のマークアップ) reduxの記述をココには一切書きません
        |
        |
        ---/containers 画面の描画以外のメインロジックを配置(イベントの発火, 遷移操作) reduxとの接続を必ずここで行います
        |
        |
        ---/reducers actionsの次に必ず呼ばれるstoreの変更処理 基本はactionsと 1 : 1 対応
        |
        |
        ---index.jsx アプリケーションのメインスクリプト ミドルウェアの定義やredux,materialUIの宣言など
        ---routes.jsx 大きく画面が変わる際はreact-routerを使うが、そのルーティングの定義。


基本的なreduxの構造を変えないでベストプラクティスで作成されています。
記述量の割には読みやすいはずです。メタプログラムにより記述量を減らすのは最後の段階がいいかなと思います。


/containers/layout.jsx では画面一覧を列挙します。どのような構造をしているかは、routes.jsxと比較するといい感じです。
ここでは例として/profile, /feed と二つの画面を用意しています。
/login はログインの専用画面で、セッションが無い場合必ずこの画面に到達するようにします。逆にセッションがあればすぐさまメインの画面に遷移します。
その他のルートは404画面で表示します。


localState, globalStateについて、localStateはメニューのドロップダウンや
テキストの入力、エフェクトの有無などの状態で、他のコンポーネントに依存
しないもの、globalStateはAPIの結果、エラーハンドリングの有無、ローディング
画面の有無など、全てのコンポーネントに依存する状態を管理します。
localStateはcomponentで管理、globalStateはreduxで管理し、処理はcontainers
