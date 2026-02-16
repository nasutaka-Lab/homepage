# プロダクトセクションへの追加方法

このファイルでは、ホームページの「Product」セクションに新しいYoutube動画や自作ツールを追加する方法を説明します。

## 1. Youtube動画を追加する

`index.html` の `<div class="product-grid youtube-grid">` 内に、以下のコード（`product-card`）を追加してください。

```html
<div class="product-card video-card">
    <a href="https://www.youtube.com/watch?v=動画のID" class="video-thumbnail-link" target="_blank" rel="noopener noreferrer">
        <div class="video-thumbnail-container">
            <!-- 自分で用意した画像（サムネイル）を指定してください -->
            <img src="images/ご自身の画像.jpg" alt="動画のタイトル">
            <div class="play-overlay">
                <i class="fa-solid fa-play"></i>
            </div>
        </div>
    </a>
    <div class="product-info">
        <h4>動画のタイトル</h4>
        <p>動画の簡単な説明文を書きます。</p>
    </div>
</div>
```

**画像の挿入方法:**

1.  **画像を準備する:**
    動画のサムネイルとして表示したい画像（推奨サイズ 1280x720 など 16:9 の比率）を用意します。
2.  **フォルダに保存:**
    用意した画像をプロジェクト内の `images` フォルダなどに保存します。
3.  **HTMLを書き換える:**
    上記のコードの `<img>` タグの `src` 属性に、保存した画像へのパス（例: `images/thumb.jpg`）を記述してください。

**ポイント:**
- サムネイル形式にすることで、ページの読み込みが軽くなります。
- ホバーすると再生ボタンが表示されるリッチなデザインになっています。
- リンク先 (`href`) には `https://www.youtube.com/watch?v=動画のID` 形式で動画URLを設定してください。

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
