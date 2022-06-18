<template>
<div class="Question">  
  <h1 class="subText1">主な収入源・支出と金額を登録します</h1>
  <form>
      <ul id="Q">
        <li class="Q1">
          <span></span>
          <label id="Q1"><span>収入源</span><br>Income</label>
          <table><input type="question1" id="question1" placeholder="収入カテゴリを入力してください" v-model="question1" />
          <label>Asource of revenue&支出日と金額</label>
          <span></span>
          <label>
            <input type="date" name="calendar" id="calendar" max="2030-12-31">
            <input type="number" id="money" placeholder="金額" v-model="question1" />
          </label>
          </table>
        </li>
        <li class="Q2">
          <span></span>
          <label id="Q2"><span>貯金額</span><br>Saving amount</label>
          <table><input type="number" id="question2" placeholder="現在の貯金金額を数字で入力してください" v-model="question2" />
          <label>Enter your current savings</label>
          <span></span>
          </table>
        </li>
        <li class="Q3">
          <span></span>
          <label id="Q3"><span>目標貯金額</span><br>Target savings amount</label>
          <table><input type="number" id="question3" placeholder="目標貯金額を数字で入力してください" v-model="question3" />
          <label>Enter the target savings amount</label>
          <span></span>
          </table>
        </li>
        <li class="Q4">
          <label id="Q4"><span>現在の年齢</span><br>age</label>
          <table><input type="number" id="question4" placeholder="現在の年齢を入力してください" v-model="question4" />
          <label>Please enter your age</label>
          </table>
        </li>
        <li class="Q5">
          <label id="Q5"><span>支出</span><br>expenditure</label>
          <table><input type="question5" id="question5" placeholder="支出カテゴリを入力してください" v-model="question5" />
          <label>Please enter an expenditure category</label>
          <label>
            <input type="date" name="calendar" id="calendar2" max="2030-12-31">
            <input type="number" id="money2" placeholder="金額" v-model="question1" />
          </label>
          </table>
        </li>
      </ul>
    </form>
    <router-link to="/icon"><button class="button is-info is-outlined type6">NEXT</button></router-link>
    <h1 class="n_1">※支出・収入が他にもあればHOMEで追加できます</h1>
</div>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
    };
  },
};
</script>