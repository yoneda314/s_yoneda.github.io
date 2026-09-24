# 米田 俊祐 / Shunsuke Yoneda

教育データマイニング・連合学習を中心とした研究活動をまとめる、個人ポートフォリオのリポジトリです。研究テーマ、論文・学会発表、開発・技術経験、学歴・受賞歴、スキルを掲載しています。

[GitHub プロフィール](https://github.com/yoneda314)

## サイトの構成

HTML と CSS を中心とした静的サイトです。フレームワークやビルドは不要で、JavaScript はフッターの年表示の更新にのみ使用しています。

| ファイル | 内容 |
| --- | --- |
| `index.html` | プロフィール、研究内容、発表実績、開発・技術経験、外部リンク |
| `style.css` | 配色、文字、レイアウト、スマートフォン向けの表示 |

フォントは Google Fonts の Inter / Noto Sans JP を使用しています。読み込めない場合はシステムフォントで表示します。

## ローカルで確認する

このリポジトリのディレクトリで、次のコマンドを実行します（Python 3 が必要です）。

```sh
python3 -m http.server 8000
```

ブラウザで [localhost:8000](http://localhost:8000) を開きます。終了するときはターミナルで `Ctrl+C` を押します。簡単な確認であれば `index.html` を直接開くこともできます。

## 内容を更新する

- **プロフィール・研究内容**：`index.html` の `about`、`research` セクションを編集します。
- **論文・学会発表**：`publication-list` 内の `article` を追加・編集します。著者、発表年、採択状況、論文やコードへのリンクを記載し、新しい順に並べます。採択済みで未発表の場合は、その状態も明記します。
- **開発・技術経験**：`experience` セクションを編集します。各事例に担当内容と使用技術をまとめています。
- **学歴・受賞歴・スキル**：`timeline`、`award-panel`、`skills` 内を編集します。資格・語学は `qualification-list` 内に「年月：資格名・級やスコア」を新しい順の箇条書きで記載します。
- **配色・余白**：`style.css` を編集します。基本色は冒頭の `:root` にまとめています。
- **ページ名・概要**：`index.html` の `title` と `meta name="description"` を編集します。

画像などを追加する場合は相対パスを使うと、リポジトリ名を含む GitHub Pages の URL でも参照できます。

## GitHub Pages で公開する

このリポジトリ `yoneda314/s_yoneda.github.io` をそのまま使えます。

1. 変更を `main` ブランチへ push します。
2. リポジトリの **Settings → Pages** を開きます。
3. **Build and deployment → Source** で **Deploy from a branch** を選びます。
4. **Branch** を `main`、フォルダーを `/(root)` にして **Save** を押します。
5. デプロイ完了後、Pages 設定画面に表示される URL から確認します。

カスタムドメインを設定していない場合、このリポジトリの公開先は `https://yoneda314.github.io/s_yoneda.github.io/` です。以降は `main` への push で更新されます。
