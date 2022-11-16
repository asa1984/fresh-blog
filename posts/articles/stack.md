---
title: FreshでMarkdownブログを作った
overview: 臆病な自尊心と尊大な羞恥心、ついでに素晴らしきFresh
publish: true
date: 2022/11/16
---

> スタージョンの法則
>
> 「どんなものでも9割はガラクタだ」

プログラマーは積極的に技術記事を書くべきである、という言説は多くの技術に関わる人々が支持している考え方だろう。しかし、「つよつよエンジニア」たちが集う場所に拙い記事を投げ込むのはかなり勇気がいるし、技術記事投稿サービスの検索空間を汚すようなことはできれば避けたい。
かといって一切アウトプットしないままでは、山月記よろしく遠からず狂疾に飲まれて虎になってしまうだろう。

つよつよエンジニアのマサカリに怯えたり、検索汚染を気にすることなく自由にアウトプットできる手段は何か…

<br/>

**個人ブログを作ればいいじゃない！**

<br/>

ということでこのブログサイトの使用技術を紹介する。

# Deno

https://deno.land/

新進気鋭のRust製JavaScriptランタイム。Node.jsの開発者Ryan
Dahl氏が2018年に行った講演「Node.jsに関する10の反省点」で発表した。

特徴はなんといってもそのシンプルさ。

- TypeScriptを標準サポート
- リンタ、フォーマッタ、テストランナなどの開発ツール標準搭載
- ES Module仕様
- Web標準準拠
- node_module, package.jsonが無い
- URLインポート(`import { join } from "https://deno.land/std/path/mod.ts"`)

`tsconfig.json`や`.eslintrc`のような煩雑な設定ファイル無しにデフォルトで快適な開発環境を得ることができる。CommonJSとESModuleの差異に苦しむこともない。激重node_moduleが生成されることもない。素晴らしい。

Deno1.28でnpm対応がついに安定版に到達した。覇権を取る日は近いだろう。あなたもDenoを使いなさい。

# Fresh

https://fresh.deno.dev/

Deno製の最高にフレッシュなWebフレームワーク。Denoのシンプルさを存分に活かしたつくりになっている。

内部ではPreactが使用されていて常にSSRを行う。

```shell
deno run -A -r https://fresh.deno.dev my-project
```

これで初期化完了。Denoはリモートでホストされているスクリプトも実行できるのだ。

Next.jsのような感覚で開発しつつ、下記の特徴によって簡単に高パフォーマンスなWebアプリケーションを構築できる。

## No build step & No configuration

ビルド不要で設定ファイル無しに実行可能。Theシンプル。これ重要。

![No configuration](/posts/stack/fresh_no_configuration.png)

## Island archetecture

クライアントサイドにJSファイルを極力送らないアーキテクチャ。メリットを理解するにはまず通常のSSRの挙動について知る必要がある。

### 一般的なSSRの実行順序

1. サーバーサイドでJSXから静的なHTMLを生成
2. クライアントにJSファイルと共にHTMLを返す
3. 生成されたHTMLにJSでイベントハンドラを注入(**Hydration**)
4. アプリケーションとして機能するようになる

このHydrationという処理が重要で、生成されたHTMLファイルがクライアントに返ってきてからWebページがアプリケーションとして機能するようになるまでの間、どうしてもオーバーヘッドが生じてしまう。

対して、FreshはデフォルトではクライアントサイドにJSファイルを送らず、事前に指定された特定のコンポーネント(**Island**)にのみHydrationを行う(_Selective
Hydration_)。クライアントに送信されるファイルサイズが削減され、画面表示からUI有効化までのオーバーヘッドが最小限で済む。

### その他のIsland archetectureフレームワーク

- [Astro](https://astro.build/)

(「 Hydration？
Resumableな[Qwik](https://qwik.builder.io/)ならそんなの関係ないぜ！」とかいって新しいJSフレームワークが出てきた。~~新しいの多すぎだろどうなってんだ。~~)

## Edge SSR

Edge ServerでSSRを行う手法。CDNによる高速なレスポンスとコンテンツのリアルタイム性を両立できる。

|         | CRA | SSR | SSG | Edge SSR |
| :-----: | :-: | :-: | :-: | :------: |
|   SEO   |  △  |  ○  |  ○  |    ○     |
| リアルタイム性 |  ○  |  ○  |  ☓  |    ○     |
|  キャッシュ  |  ☓  |  △  |  ○  |    ○     |

Edgeではマシンリソースや実行環境の厳しい制限を受けるためエコシステムの多くはまだ発展途上だが、いずれプロダクションにおいても主流になると思われる。Freshは後述のDeno
Deploy上で実行されることを想定して作られている。

### その他のEdge SSRフレームワーク

- [Remix](https://remix.run/)

# Twind

https://twind.dev/

端的に言うとCSS in JS版Tailwind CSS。Utility
Fastな記法以外にも、styled-componentsのようなオブジェクト形式・テンプレートリテラル形式でもCSSを記述もできる(神)。また、オブジェクト形式で書く際も`h1: apply("text-blule-500")`といったようにTailwindの記法と混ぜて扱うこともできる(神)。非常に柔軟性が高いので思いつく限りの~悪どい~記法を試すことができる。

Freshの初期化スクリプト実行時にオプションでTwindのインストールが選択可能で、その場合Fresh用のTwind
pluginが自動で適用されるため、Tailwind
CSSと全く同じ記法をゼロコンフィグで用いることができる。VSCodeの拡張機能も用意されていて強力な補完が効く。

```jsx
import {ts, css, theme} from "twind/css"

// Twindのデフォルト記法
<div className={tw("text-bold text-blue-500")}>Styled element</div>;

// FreshのTwind plugin有効時
<div className="text-bold text-white">Styled element</div>;

// CSS object記法
const style = {
  fontStyle: "bold",
  color: theme("colors.blue.500"),
}
<div className={tw(css(style))}>Styled element<div/>
```

個人的には、CSS
moduleのようなWeb標準準拠でない方式でCSSファイルをインポートしたり、設定ファイルをゴニョゴニョしてビルドしたりするよりは、純粋なJSのオブジェクトとしてCSSを扱うアプローチの方が好み。

# React Markdown

https://github.com/remarkjs/react-markdown

MarkdownをパースしてJSXに変換するライブラリ。内部でRemarkとRehypeを使用しているのでそれらのプラグインをそのまま利用できる。

Markdownパーサーで得たHTML文字列をdengeroushtmlオプションに渡すのは生理的に受け付けなかったのでこれを選んだ。

通常のHTML要素の代わりに独自実装のJSXコンポーネントを渡すことも可能。例えばシンタックスハイライトはcode要素の代わりに[react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)をラップしたコンポーネントを渡すことで実現している、

<details>
<summary>PreactとReact用ライブラリの互換性</summary>

Deno1.28でnpm対応が安定版になったが、実はそれ以外にもnpmパッケージを読み込む方法がある。

[esm.sh](https://esm.sh/)はnpmパッケージをesbuildでESM形式に変換し配信しているCDNサービスである。ここからURLインポートすることでDenoのライブラリと同様にnpmパッケージを扱えるようになる。Freshで使われているPreactもesm.sh経由でインポートされている。

PreactでReact用フレームワークを扱う際、Node.jsの場合はpreact/compatというReactの型エイリアスを定義しているモジュールによって互換性が保たれるが、Denoではそれが効かない。esm.shはクエリパラメータでエイリアスの指定が可能で、`?alias=react:preact/compat`を指定することでFreshでもReact
Markdownが使えるようになっている。

</details>

# Deno Deploy

https://deno.com/deploy

Deno公式提供のホスティングサービス。流石ランタイムの開発元が提供しているサービスなだけあって、他のEdgeサービスのように考えることが少なく、ローカル環境で実装したコードはほとんどそのまま動く。CDNなので世界中にサーバーがあり、日本では東京・大阪リージョンがある。

デプロイするのも非常に簡単で、GitHubのリポジトリを指定するだけで完了する。Freshに関してはビルド不要なので本当にリポジトリにプッシュするだけで終わる。デプロイ画面で環境変数を設定したり、GitHub
Actionsでもっと複雑なことをしたりすることも勿論可能。素晴らしい。

Freeプランは10万リクエスト/日と1GB/月の制限と十分な量。あとは他のEdgeサービス同様、メモリとCPU仕様時間に厳しめの制限がかかる。

# まとめ

好奇心で技術選定したので新しめの技術スタックになったが予想以上に快適に書けた。なんといってもFreshのシンプルさが素晴らしい。

今回はGitHubリポジトリ上で記事データを静的なファイルとして管理し、記事を更新する際はプッシュして自動的にホスティング環境に反映する構成になった(これでも十分驚くべきシンプルさ)。今度はデータベースなども用いてバックエンド然とした処理を実装しつつ、FreshのEdge
SSRによるリアルタイム性を活かしたアプリケーションを書いてみたい。

Markdown部分のスタイリングにあたってはバリバリにZennを参考にした。汝、Zennを使いなさい。
