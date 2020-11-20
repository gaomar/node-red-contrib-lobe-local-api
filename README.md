## 概要

Lobeの結果を返すNode-REDのノードです。

## インストール

```
npm i node-red-contrib-lobe-local-api
```

or

AdminタブからInstall

## 利用イメージ

### lobe-local
Lobeの結果を返すNode-REDのノードです。
プロパティ画面のBase64を指定すると対象画像を結果を取得することができます。

LobeのLocal APIにかかれているURLを指定してください。
Base64が空白の場合はPayloadの情報を取得します。

Base64はMustache形式の記述が可能です。`{{{payload}}}`と書くこともできます。

## LINK

* [NodeRED](https://flows.nodered.org/node/node-red-contrib-lobe-local-api)
* [Libraries.io](https://libraries.io/npm/node-red-contrib-lobe-local-api)
* [npm](https://www.npmjs.com/package/node-red-contrib-lobe-local-api)

## release

* 2020/11/20: 必要パッケージ追加
* 2020/11/09: 初回リリース
