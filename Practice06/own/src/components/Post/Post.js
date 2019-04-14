import React, { Component } from "react";

export default class Post extends Component {
  posts = [{
    title: '薛丁格的貓',
    date: '2019-04-12',
    body: <div><p>假如兩隻貓在台大黑森林裡交配，而沒有人在附近聽見，他有沒有交配？</p>
      <p>If a couple of cats copulate in the NTU black forest and no one is around to hear it, do they copulate ?</p>
      <p>#可以留言</p>
      <p>#形上學啦幹</p>
      <p>* 擷取自 NTU台大學生交流板</p></div>
  }, {
    title: 'SITCON 2019',
    date: '2019-03-24',
    body: <p className="post-body">今天是 SITCON 2019，小傑好帥！還吃了四個義美冰淇淋～</p>
  }, {
    title: '韓流發威，費氏數列決定跟著月亮走',
    date: '2019-01-28',
    body: <div><p>拜託各位同學，先把學校老師教的學好，大叔業界經驗20年了，每小時費用3000，等你們學校基礎功學好有機會再來我這學習～一會兒python語言，一會兒C語言，你講 Big-O 怎麼好像根我的不大一樣？不了解可以請教，你要 challenge 要有材料～各位同學，什麼叫做 Big-O？跟無理數任意次方什麼關係？</p>
    <p>那你們學校就教錯了，很簡單～十年前就建議人類在月球儲存E和PI的最精細數列，可以變成 constant time，如此所有NP問題都可以降階為 constant time~</p>
    <p>樓上，2&lt;&lt;1 和 2*1 哪個快？</p>
    <p>* 擷取自 python TW Benson Tan 教主</p></div>
  }];

  render() {
    const id = this.props.id;
    if (id >= this.posts.length)
      return (
        <article>
          <h1>Post #{id}</h1>
          <p>This is the {id}-th post</p>
        </article>
      );
    else
      return (
        <article>
          <div className="date-outer">
            <h2 className="date-header">{this.posts[id].date}</h2>
            <div className="date-posts">
              <h3>{this.posts[id].title}</h3>
              {this.posts[id].body}
            </div>
          </div>
          <hr />
        </article>
      );
  }
};
