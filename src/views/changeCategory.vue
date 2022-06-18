<template>
<div class="chanePage">
  <div class="before_after">
    <div class="before">
      <span>変更前カテゴリ名</span>
    </div>
    <div class="after">
      <span>変更後カテゴリ名</span>
    </div>
  </div>
  <div class="beforeList">
    <ul> 
      <li>
        <input type="radio" name="category" class="bef">
        <span class="c-1">{{category}}例：給料----------------</span>
        <span class="right" />
        <input type="text" name="category" class="change" placeholder="カテゴリ名を入力してください">
        <router-link to="mypage" class="link"><button class="button is-info is-outlined">登録</button></router-link>
      </li>
    </ul>
  </div>
</div>
</template>
<style scoped>
.change {
  width:  370px;
  height: 60px;
  position: relative;
  left: 290px;
  top: -57px;
  background: rgba(172, 172, 172, 0.399);
  border: solid 3px #0f0;
  font-size: 38px;
  font-family: "Tsukushi B Round Gothic";
  font-weight: bold;
  white-space: nowrap;
  overflow-x: scroll;
}
.change::placeholder {
  font-size: 25px;
  font-family: "Tsukushi B Round Gothic";
  color: rgb(0, 0, 0);
  position: relative;
  top: -4px;
}
.right {
  display: inline-block;
  vertical-align: middle;
  color: #0f0;
  position: relative;
  width: 100px;
  height: 20px;
  left: 260px;
  top: -69px;
  background: currentColor;
}
.right::before {
  content: '';
  width: 3em;
  height: 3em;
  border: 1em solid currentColor;
  border-left: 0;
  border-bottom: 0;
  transform: rotate(45deg);
  transform-origin: top right;
  position: absolute;
  top: 50%;
  right: -0.65em;
  box-sizing: border-box;
}
.beforeList > ul > li > .bef {
  transform: scale(3);
  position: relative;
  right: 445px;
  top: 42px;
}
.beforeList > ul > li > .c-1 {
  font-family: "Tsukushi B Round Gothic";
  font-weight: bold;
  font-size: 38px;
  line-height: 38px;
  text-align: center;
  color: #211b1b;
  background: rgba(172, 172, 172, 0.399);
  border: 3px solid #32ff02;
  padding: 8px;
  display: block;
  position: relative;
  left: 46px;
  width: 370px;
  height: 60px;
  white-space: nowrap;
  overflow-x: scroll;
}
.beforeList > ul  {
  overflow: scroll;
  height: 900px;
}
.beforeList > ul > li > .link > button{
  height: 40px;
  width: 120px;
  position: relative;
  left: 169px;
  top: 5px;
}
.chanePage {
  margin-left: auto;
  margin-right: auto;
  height: 1000px;
  width: 970px;
  padding: 0.5em 1em;
  border-left: double 5px #4ec4d3;
  border-right: double 5px #4ec4d3; 
}
.before_after {
  font-family: Poppins;  
  font-weight: 600;  
  font-size: 45px;  
  line-height: 64px;  
  text-align: center;
  color: #fff;
  -webkit-text-stroke: 1.0px #050505;
  display: flex;
  text-align: center;
  width: 970px;
  height: 85px;
  background: rgba(98, 87, 87, 0.34);
  border: 2px solid #000000;
  position: relative;
  top: -7.6px;
  right: 20px;
}
.before {
  height: 100px;
  flex: 1;
  color: white;
  margin-right: 1rem;
  position: relative;
}
.before:after {
  margin: 0 1rem;
  content: "";
  width: 4px;
  height: 1000px;
  background-color: #000;
  position: absolute;
  left: 100%;
}
.after {
  position: relative;
  height: 100px;
  flex: 1;
  color: white;
  margin-left: 1rem;
}
</style>