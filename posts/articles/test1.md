---
title: FreshでMarkdownブログを構築する
overview: Denoのフロントエンドフレームワーク"Fresh"はいいぞ
publish: true
date: 2022/11/02
---

# Technical Stack

## Fresh

Freshの特徴はそのシンプルさにある。

### Islands Archetecture

ZeroJSとも呼ばれるアーキテクチャ。クライアントサイドにJSを極力送らない。Hydrationを要素全体ではなく、事前に指定された特定のコンポーネント(**Island**)にのみ行う。

ex. Astro

### Edge SSR

Edge
ServerでSSRを行う手法。CDNによる高速なレスポンスとコンテンツのリアルタイム性を両立できる。Edge上では使用できるリソースが非常に限られているため、Next.jsなどEdge用にチューニングされていないフレームワークは多くの場合動作しない。

ex. Remix

## Twind

CSS in JS。Utility Fastな記法、EmotionやStyled componentsのような記法もできる。Freshにはtwind
pluginがデフォルトで組み込まれているため、Tailwind CSSと全く同じ記法をゼロコンフィグで用いることができる。

```jsx
import {ts,css} from "twind/css"

<div className={tw("bg-gray-900 text-bold text-white")}>Styled Element</div>;

<div className="bg-gray-900 text-bold text-white">Styled Element</div>;

const style = {
  backgroundColor: "111111",
  color: "white"
}
<div className={tw(css(style))}>Styled Element<div/>
```
