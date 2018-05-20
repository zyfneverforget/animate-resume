
let result=`
/**您好!我叫温斯顿，来自美丽新世界，26岁。
于今年毕业于朝鲜挖煤大学，专业为美国文学鉴赏，我在真理部工作过，
对审问各种犯人，测谎非常有心得。我的英语基础良好，
已获得了亚洲第一元首颁发的英语特级证书，也在外贸皮包公司实习过。
我奉行态度决定一切的原则，战争即和平，自由即奴隶，无知即力量。
**/

*{transition: all 0.8s;}

body{
  background: #efefef;
  font-size: 16px;
}
/*来一点动画*/
#code{
  transform : rotate(360deg)
}
/*我需要一点代码高亮*/
.token.selector{
  color: #690;
}
.token.property{
  color:#905;
}
`

let result2 = `
  #paper{
    float: left;
    width: 50%;
    background: grey;
    height: 100vh;
  }
`
let markdown = `
## 大家好，一个小demo内容还没想好

电幕上的声音仍在没完没了地报告俘虏、战利品、杀戮的故事，但是外面的欢呼声已经减退了一些。
服务员们又回去工作了。温斯顿飘飘然坐在那里，也没有注意到酒杯里又斟满了酒。他现在不在跑，也不在叫了。
他又回到了友爱部，一切都已原谅，他的灵魂洁白如雪。他站在被告席上，什么都招认，什么人都咬。
他走在白色瓷砖的走廊里，觉得象走在阳光中一样，后面跟着一个武装的警卫。等待已久的子弹穿进了他的脑袋。
他抬头看着那张庞大的脸。他花了四十年的功夫才知道那黑色的大胡子后面的笑容是什么样的笑容。
哦，残酷的、没有必要的误会！哦，背离慈爱胸怀的顽固不化的流亡者！
他鼻梁两侧流下了带着酒气的泪。但是没有事，一切都很好，斗争已经结束了。他战胜了自己。他热爱老大哥。
`
wireCode('',result,()=>{
  f2()
  wireCode(result,result2,()=>{
    wireMark(markdown)
  })
})

var rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});//基本设置




function wireCode(Pre,code,callback){
  let domCode = document.querySelector('#code')
  let pre = Pre || ''
  let n=0
  let id = setInterval(()=>{
    n +=1
    domCode.innerHTML= Prism.highlight(pre+code.substring(0,n), Prism.languages.css, 'css');   ///
    style.innerHTML=pre+code.substring(0,n)
    domCode.scrollTop = 10000
    if(n>=code.length){
      window.clearInterval(id)
      callback()
    }
  },20)
}

function wireMark(markdown){
  let content = document.createElement('div')
  content.id = 'content' 
  paper.appendChild(content)
  let n=0
  let id = setInterval(()=>{
    n +=1
    content.innerHTML= markdown.substring(0,n)
    content.innerHTML= marked(markdown.substring(0,n))
    content.scrollTop = 10000
    if(n>=markdown.length){
      window.clearInterval(id)
      
    }
  },20)
}

function f2 (){
  let paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
}
function f3(preresult){    //如何放入页面
  
  let n=0
  let id = setInterval(()=>{
    n +=1
    code.innerHTML= preresult + result.substring(0,n)   //
    code.innerHTML= Prism.highlight(code.innerHTML, Prism.languages.css, 'css') //
    style.innerHTML= style.innerHTML+result.substring(n-1,n)
    if(n>=result.length){
      window.clearInterval(id)
    }
  },30)
}