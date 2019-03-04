# Comment
## 完程度(0~100%)
100%，有達成 baseline

- [x] Baseline - 至少完成可左右觀看不同圖片
- [x] Optional - Preview Window
- [ ] Optional - 觀看影片
- [ ] Optional - 其他 fancy 功能

## coding quality(自由作答)
styles.css 第 103, 116 行有全形空白，會導致瀏覽器解析錯誤。

main.js 第 19 行會有 TypeError，因為當 button 都非 disable 時會取到 null。

## 正確性
如上，從瀏覽器中就可以看到的錯誤訊息可以試著減少，多檢查就可以避免這些錯誤了。

## 值得學習的地方
有做 preview window，效果看起來也還不錯。

## 建議改進的地方
setTimeout 60 毫秒幾乎是看不到任何效果，就算把時間拉長也不太了解原本是想要怎麼樣的效果。

而且因為有延遲，使用者連點時，可以在 ban() 執行前連續加減 i ，導致 i 超出陣列的範圍。

沒有用到老師精心準備的 loading.gif 有點可惜，可以再增加載入圖片時的效果。

## 其他心得
看許多人的 html 在寫 tag's attribute 與 value 之間不會加入空白，因為 html 本來就比其他語言還要長，

個人也是習慣`<div id="id"></div>`這種寫法，不過每個人 coding style 本來就不一樣，用自己順眼的就行了。
