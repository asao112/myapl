<template>
<div class="Question">  
  <h1 class="subText1">収入と金額を登録します。</h1>
  <form>
      <ul id="Q">
        <li class="Q1">
          <span></span>
          <label id="Q1"><span>収入源</span><br>Income</label>
          <table><input type="question1" id="question1" placeholder="収入カテゴリを入力してください" />
          <label>Asource of revenue&支出日と金額</label>
          <span></span>
          <label>
            <input type="date" name="calendar" id="calendar" max="2030-12-31">
            <input type="number" id="money" placeholder="金額"/>
          </label>
          </table>
        </li>
        <li class="Q2">
          <span></span>
          <label id="Q2"><span>収入源</span><br>Income</label>
          <table><input type="number" id="question2" placeholder="収入カテゴリを入力してください" />
          <label>source of revenue&支出日と金額</label>
          <span></span>
          <label>
            <input type="date" name="calendar" id="calendar" max="2030-12-31">
            <input type="number" id="money" placeholder="金額" />
          </label>
          </table>
        </li>
        <li class="Q3">
          <span></span>
          <label id="Q3"><span>収入源</span><br>Income</label>
          <table><input type="number" id="question3" placeholder="収入カテゴリを入力してください" />
          <label>source of revenue&支出日と金額</label>
          <span></span>
          <label>
            <input type="date" name="calendar" id="calendar" max="2030-12-31">
            <input type="number" id="money" placeholder="金額" />
          </label>
          </table>
        </li>
        <li class="Q4">
          <label id="Q4"><span>収入源</span><br>Income</label>
          <table><input type="number" id="question4" placeholder="収入カテゴリを入力してください"/>
          <label>Psource of revenue&支出日と金額</label>
          <label>
            <input type="date" name="calendar" id="calendar2" max="2030-12-31">
            <input type="number" id="money2" placeholder="金額" v-model="question1" />
          </label>
          </table>
        </li>
        <li class="Q5">
          <label id="Q5"><span>収入源</span><br>Income</label>
          <table><input type="question5" id="question5" placeholder="収入カテゴリを入力してください" />
          <label>source of revenue&支出日と金額</label>
          <label>
            <input type="date" name="calendar" id="calendar2" max="2030-12-31">
            <input type="number" id="money2" placeholder="金額"/>
          </label>
          </table>
        </li>
      </ul>
    </form>
    <router-link to="/graph2"><button class="button is-info is-outlined type6">NEXT</button></router-link>
</div>
</template>