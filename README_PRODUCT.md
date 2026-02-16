# プロダクトセクションへの追加方法

このファイルでは、ホームページの「Product」セクションに新しいYoutube動画や自作ツールを追加する方法を説明します。

## 1. Youtube動画を追加する

`index.html` の `<div class="product-grid youtube-grid">` 内に、以下のコード（`product-card`）を追加してください。
**複数の動画を並べたい場合は、この `product-card` 単位で複製して追加してください。**（自動的に3列程度のグリッドで並びます）

```html
<div class="product-card video-card">
    <div class="video-container">
        <!-- Youtubeの埋め込みコードのsrc属性を差し替えてください -->
        <iframe src="https://www.youtube.com/embed/動画ID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="product-info">
        <h4>動画のタイトル</h4>
        <p>動画の簡単な説明文を書きます。</p>
    </div>
</div>
```

**Youtubeの動画IDの取得方法:**
Youtube動画のURL（例：`https://www.youtube.com/watch?v=dQw4w9WgXcQ`）の `v=` 以降の文字列（この例では `dQw4w9WgXcQ`）が動画IDです。
埋め込み用のURLは `https://www.youtube.com/embed/動画ID` となります。

## 2. 自作ツールを追加する

`index.html` の `<div class="product-grid tools-grid">` 内に、以下のコードを追加してください。

```html
<div class="product-card tool-card">
    <div class="product-image">
        <!-- アイコンを変更する場合は Font Awesome のクラスを変更してください -->
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <!-- もし画像を使いたい場合は <img> タグに置き換えてもOKです -->
    </div>
    <div class="product-info">
        <h4>ツールの名前</h4>
        <p>ツールの機能や特徴を説明します。</p>
        <a href="ツールのURL" class="tool-link" target="_blank">View Project <i class="fa-solid fa-arrow-right"></i></a>
    </div>
</div>
```

## 注意点
- **レスポンシブ対応**: デザインは自動的に整列するように設定されています。
- **アイコン**: `fa-solid fa-code` や `fa-solid fa-rocket` など、[Font Awesome](https://fontawesome.com/search?o=r&m=free) のアイコンが自由に使えます。
- **画像**: `product-image` クラスの中に、自分で作成したスクリーンショットなどの `<img>` タグを入れると、より魅力的な紹介になります。
