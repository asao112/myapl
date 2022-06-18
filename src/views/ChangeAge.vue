<template>
<div class="Question">  
  <h1 class="title5">変更後の年齢を入力してください</h1>
  <form>
      <ul id="newQ">
        <li class="newQ4">
          <label id="newQ4"><span>現在の年齢</span><br>age</label>
          <table><input type="number" id="question4" placeholder="現在の年齢を入力してください" v-model="question4" />
          <label>Please enter your age</label>
          </table>
        </li>
      </ul>
    </form>
    <router-link to="/mypage"><button class="button is-info is-outlined type6">登録</button></router-link>
    <br />
    <router-link to="/mypage"><button class="type11">キャンセル</button></router-link>
</div>
</template>
<style scoped>
.mediaViewInfo {
	--web-view-name: Home – 11;
	--web-view-id: Home__11;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;
}
:root {
	--web-view-ids: Home__11;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	border: none;
}
#Home__11 {
	position: absolute;
	width: 1920px;
	height: 1080px;
	background: linear-gradient(209.4deg, rgba(248,248,240,1) 0%, rgba(226,164,81,1) 100%);
	overflow: hidden;
	--web-view-name: Home – 11;
	--web-view-id: Home__11;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;
}
@keyframes fadein {

	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}

}
#n__ {
	left: 795px;
	top: 491px;
	position: absolute;
	overflow: visible;
	width: 1px;
	white-space: nowrap;
	text-align: left;
	font-family: Tsukushi B Round Gothic;
	font-style: normal;
	font-weight: bold;
	font-size: 35px;
	color: rgba(56,50,50,1);
}
#n_740 {
	fill: transparent;
	stroke: rgba(0,0,0,1);
	stroke-width: 7px;
	stroke-linejoin: bevel;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_740 {
	position: absolute;
	overflow: visible;
	width: 1685px;
	height: 1094px;
	left: 138px;
	top: 0px;
}
#n_9 {
	fill: transparent;
	stroke: rgba(160,155,155,1);
	stroke-width: 3px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_9 {
	overflow: visible;
	position: absolute;
	width: 3px;
	height: 1080px;
	left: 973.5px;
	top: 0.5px;
	transform: matrix(1,0,0,1,0,0);
}
#n_741 {
	fill: rgba(98,87,87,0.341);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_741 {
	position: absolute;
	overflow: visible;
	width: 1671px;
	height: 99px;
	left: 138px;
	top: 0px;
}
#Text {
	left: 325px;
	top: 18px;
	position: absolute;
	overflow: visible;
	width: 449px;
	white-space: nowrap;
	text-align: center;
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 64px;
	color: rgba(255,255,255,1);
}
#Text_bc {
	left: 1175px;
	top: 18px;
	position: absolute;
	overflow: visible;
	width: 449px;
	white-space: nowrap;
	text-align: center;
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 64px;
	color: rgba(255,255,255,1);
}
#Light__Text_fields1_Filled_A_N {
	position: absolute;
	width: 448px;
	height: 64px;
	left: 325px;
	top: 141px;
	overflow: visible;
}
#n_Container_l_Color {
	fill: rgba(110,110,111,0.11);
	stroke: rgba(50,255,2,1);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.n_Container_l_Color {
	position: absolute;
	overflow: visible;
	width: 462px;
	height: 78px;
	left: 0px;
	top: 0px;
}
#Indicator {
	fill: rgba(255,255,255,0.6);
	stroke: rgba(0,0,0,0.122);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.Indicator {
	position: absolute;
	overflow: visible;
	width: 448px;
	height: 1px;
	left: 0px;
	top: 63px;
}
#Cursor {
	fill: rgba(0,0,0,0.871);
}
.Cursor {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 116px;
	top: 20px;
}
#n_Label {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 19px;
	display: none;
	overflow: visible;
}
#Boundary {
	fill: transparent;
}
.Boundary {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color {
	fill: rgba(0,0,0,0.6);
}
.n_Color {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Light__Text_fields1_Filled_A_N_bl {
	position: absolute;
	width: 448px;
	height: 64px;
	left: 325px;
	top: 285px;
	overflow: visible;
}
#n_Container_l_Color_bm {
	fill: rgba(110,110,111,0.11);
	stroke: rgba(50,255,2,1);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.n_Container_l_Color_bm {
	position: absolute;
	overflow: visible;
	width: 462px;
	height: 77.169px;
	left: 0px;
	top: 0px;
}
#Indicator_bn {
	fill: rgba(255,255,255,0.6);
	stroke: rgba(0,0,0,0.122);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.Indicator_bn {
	position: absolute;
	overflow: visible;
	width: 448px;
	height: 1px;
	left: 0px;
	top: 63px;
}
#Cursor_bo {
	fill: rgba(0,0,0,0.871);
}
.Cursor_bo {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 116px;
	top: 33px;
}
#n_Label_bp {
	display: none;
	left: 16px;
	top: 20px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_bq {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 24.151px;
	display: none;
	overflow: visible;
}
#Boundary_br {
	fill: transparent;
}
.Boundary_br {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_bs {
	fill: rgba(0,0,0,0.6);
}
.n_Color_bs {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Light__Text_fields1_Filled_A_N_bt {
	position: absolute;
	width: 448px;
	height: 64px;
	left: 325px;
	top: 429px;
	overflow: visible;
}
#n_Container_l_Color_bu {
	fill: rgba(110,110,111,0.11);
	stroke: rgba(50,255,2,1);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.n_Container_l_Color_bu {
	position: absolute;
	overflow: visible;
	width: 462px;
	height: 78px;
	left: 0px;
	top: 0px;
}
#Indicator_bv {
	fill: rgba(255,255,255,0.6);
	stroke: rgba(0,0,0,0.122);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.Indicator_bv {
	position: absolute;
	overflow: visible;
	width: 448px;
	height: 1px;
	left: 0px;
	top: 63px;
}
#Cursor_bw {
	fill: rgba(0,0,0,0.871);
}
.Cursor_bw {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 116px;
	top: 20px;
}
#n_Label_bx {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_by {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 19px;
	display: none;
	overflow: visible;
}
#Boundary_bz {
	fill: transparent;
}
.Boundary_bz {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_b {
	fill: rgba(0,0,0,0.6);
}
.n_Color_b {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Light__Text_fields1_Filled_A_N_b {
	position: absolute;
	width: 448px;
	height: 64px;
	left: 325px;
	top: 573px;
	overflow: visible;
}
#n_Container_l_Color_b {
	fill: rgba(110,110,111,0.11);
	stroke: rgba(50,255,2,1);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.n_Container_l_Color_b {
	position: absolute;
	overflow: visible;
	width: 462px;
	height: 78px;
	left: 0px;
	top: 0px;
}
#Indicator_b {
	fill: rgba(255,255,255,0.6);
	stroke: rgba(0,0,0,0.122);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.Indicator_b {
	position: absolute;
	overflow: visible;
	width: 448px;
	height: 1px;
	left: 0px;
	top: 63px;
}
#Cursor_b {
	fill: rgba(0,0,0,0.871);
}
.Cursor_b {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 116px;
	top: 20px;
}
#n_Label_b {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_b {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 19px;
	display: none;
	overflow: visible;
}
#Boundary_b {
	fill: transparent;
}
.Boundary_b {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_ca {
	fill: rgba(0,0,0,0.6);
}
.n_Color_ca {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Light__Text_fields1_Filled_A_N_ca {
	position: absolute;
	width: 448px;
	height: 64px;
	left: 325px;
	top: 717px;
	overflow: visible;
}
#n_Container_l_Color_ca {
	fill: rgba(110,110,111,0.11);
	stroke: rgba(50,255,2,1);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.n_Container_l_Color_ca {
	position: absolute;
	overflow: visible;
	width: 462px;
	height: 78px;
	left: 0px;
	top: 0px;
}
#Indicator_cb {
	fill: rgba(255,255,255,0.6);
	stroke: rgba(0,0,0,0.122);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.Indicator_cb {
	position: absolute;
	overflow: visible;
	width: 448px;
	height: 1px;
	left: 0px;
	top: 63px;
}
#Cursor_cc {
	fill: rgba(0,0,0,0.871);
}
.Cursor_cc {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 116px;
	top: 20px;
}
#n_Label_cd {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_ce {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 19px;
	display: none;
	overflow: visible;
}
#Boundary_cf {
	fill: transparent;
}
.Boundary_cf {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_cg {
	fill: rgba(0,0,0,0.6);
}
.n_Color_cg {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Light__Text_fields1_Filled_A_N_ch {
	position: absolute;
	width: 448px;
	height: 64px;
	left: 324px;
	top: 861px;
	overflow: visible;
}
#n_Container_l_Color_ci {
	fill: rgba(110,110,111,0.11);
	stroke: rgba(50,255,2,1);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.n_Container_l_Color_ci {
	position: absolute;
	overflow: visible;
	width: 462px;
	height: 78px;
	left: 0px;
	top: 0px;
}
#Indicator_cj {
	fill: rgba(255,255,255,0.6);
	stroke: rgba(0,0,0,0.122);
	stroke-width: 7px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 10;
	shape-rendering: auto;
}
.Indicator_cj {
	position: absolute;
	overflow: visible;
	width: 448px;
	height: 1px;
	left: 0px;
	top: 63px;
}
#Cursor_ck {
	fill: rgba(0,0,0,0.871);
}
.Cursor_ck {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 116px;
	top: 20px;
}
#n_Label_cl {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_cm {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 19px;
	display: none;
	overflow: visible;
}
#Boundary_cn {
	fill: transparent;
}
.Boundary_cn {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_co {
	fill: rgba(0,0,0,0.6);
}
.n_Color_co {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Text_cp {
	left: 511px;
	top: 155px;
	position: absolute;
	overflow: visible;
	width: 77px;
	white-space: nowrap;
	text-align: left;
	font-family: Tsukushi B Round Gothic;
	font-style: normal;
	font-weight: bold;
	font-size: 38px;
	color: rgba(33,27,27,1);
}
#path5056_cr {
	fill: url(#path5056_cr);
}
.path5056_cr {
	overflow: visible;
	position: absolute;
	width: 146.782px;
	height: 68.236px;
	left: 900.109px;
	top: 138.882px;
	transform: matrix(1,0,0,1,0,0);
}
#path5056_ct {
	fill: url(#path5056_ct);
}
.path5056_ct {
	overflow: visible;
	position: absolute;
	width: 146.782px;
	height: 68.236px;
	left: 900.108px;
	top: 282.382px;
	transform: matrix(1,0,0,1,0,0);
}
#path5056_cv {
	fill: url(#path5056_cv);
}
.path5056_cv {
	overflow: visible;
	position: absolute;
	width: 146.782px;
	height: 68.236px;
	left: 900.109px;
	top: 426.882px;
	transform: matrix(1,0,0,1,0,0);
}
#path5056_cx {
	fill: url(#path5056_cx);
}
.path5056_cx {
	overflow: visible;
	position: absolute;
	width: 146.782px;
	height: 68.236px;
	left: 898.109px;
	top: 570.882px;
	transform: matrix(1,0,0,1,0,0);
}
#path5056_cz {
	fill: url(#path5056_cz);
}
.path5056_cz {
	overflow: visible;
	position: absolute;
	width: 146.782px;
	height: 68.236px;
	left: 898.109px;
	top: 714.882px;
	transform: matrix(1,0,0,1,0,0);
}
#path5056_da {
	fill: url(#path5056_da);
}
.path5056_da {
	overflow: visible;
	position: absolute;
	width: 146.782px;
	height: 68.236px;
	left: 900.108px;
	top: 858.882px;
	transform: matrix(1,0,0,1,0,0);
}
#n_253 {
	fill: rgba(38,153,251,0.522);
}
.n_253 {
	position: absolute;
	overflow: visible;
	width: 40px;
	height: 40px;
	left: 335px;
	top: 153px;
}
#Light__Text_fields1_Filled_A_N_c {
	position: absolute;
	width: 579px;
	height: 74px;
	left: 1110px;
	top: 141px;
	overflow: visible;
}
#Light_Elevation00dp {
	position: absolute;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Rectangle {
	fill: rgba(255,255,255,1);
}
.Rectangle {
	mix-blend-mode: multiply;
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#n_Container_l_Color_c {
	fill: rgba(110,110,111,0.11);
}
.n_Container_l_Color_c {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#States {
	fill: transparent;
}
.States {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#Indicator_c {
	fill: rgba(255,255,255,0.6);
}
.Indicator_c {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 1px;
	left: 0px;
	top: 55px;
}
#n_Assistive_text {
	left: 16px;
	top: 58px;
	position: absolute;
	overflow: visible;
	width: 212px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.3333333206176758px;
}
#Trailing_icon {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 543px;
	top: 16px;
	overflow: visible;
}
#Boundary_db {
	fill: transparent;
}
.Boundary_db {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#Cursor_dc {
	fill: rgba(0,0,0,0.871);
}
.Cursor_dc {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 151px;
	top: 20px;
}
#n_Input_text {
	left: 16px;
	top: 19px;
	position: absolute;
	overflow: visible;
	width: 80px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: rgba(0,0,0,1);
	letter-spacing: 0.09375px;
}
#n_Label_de {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_df {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 16px;
	display: none;
	overflow: visible;
}
#Boundary_dg {
	fill: transparent;
}
.Boundary_dg {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_dh {
	fill: rgba(0,0,0,0.6);
}
.n_Color_dh {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Light__Text_fields1_Filled_A_N_di {
	position: absolute;
	width: 579px;
	height: 74px;
	left: 1110px;
	top: 285px;
	overflow: visible;
}
#Light_Elevation00dp_dj {
	position: absolute;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Rectangle_dk {
	fill: rgba(255,255,255,1);
}
.Rectangle_dk {
	mix-blend-mode: multiply;
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#n_Container_l_Color_dl {
	fill: rgba(110,110,111,0.11);
}
.n_Container_l_Color_dl {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#States_dm {
	fill: transparent;
}
.States_dm {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#Indicator_dn {
	fill: rgba(255,255,255,0.6);
}
.Indicator_dn {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 1px;
	left: 0px;
	top: 55px;
}
#n_Assistive_text_do {
	left: 16px;
	top: 58px;
	position: absolute;
	overflow: visible;
	width: 212px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.3333333206176758px;
}
#Trailing_icon_dp {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 543px;
	top: 16px;
	overflow: visible;
}
#Boundary_dq {
	fill: transparent;
}
.Boundary_dq {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#Cursor_dr {
	fill: rgba(0,0,0,0.871);
}
.Cursor_dr {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 151px;
	top: 20px;
}
#n_Input_text_ds {
	left: 16px;
	top: 19px;
	position: absolute;
	overflow: visible;
	width: 290px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.09375px;
}
#n_Label_dt {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_du {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 16px;
	display: none;
	overflow: visible;
}
#Boundary_dv {
	fill: transparent;
}
.Boundary_dv {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_dw {
	fill: rgba(0,0,0,0.6);
}
.n_Color_dw {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Light__Text_fields1_Filled_A_N_dx {
	position: absolute;
	width: 579px;
	height: 74px;
	left: 1110px;
	top: 429px;
	overflow: visible;
}
#Light_Elevation00dp_dy {
	position: absolute;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Rectangle_dz {
	fill: rgba(255,255,255,1);
}
.Rectangle_dz {
	mix-blend-mode: multiply;
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#n_Container_l_Color_d {
	fill: rgba(110,110,111,0.11);
}
.n_Container_l_Color_d {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#States_d {
	fill: transparent;
}
.States_d {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#Indicator_d {
	fill: rgba(255,255,255,0.6);
}
.Indicator_d {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 1px;
	left: 0px;
	top: 55px;
}
#n_Assistive_text_d {
	left: 16px;
	top: 58px;
	position: absolute;
	overflow: visible;
	width: 212px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.3333333206176758px;
}
#Trailing_icon_d {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 543px;
	top: 16px;
	overflow: visible;
}
#Boundary_d {
	fill: transparent;
}
.Boundary_d {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#Cursor_d {
	fill: rgba(0,0,0,0.871);
}
.Cursor_d {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 151px;
	top: 20px;
}
#n_Input_text_d {
	left: 16px;
	top: 19px;
	position: absolute;
	overflow: visible;
	width: 290px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.09375px;
}
#n_Label_d {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_d {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 16px;
	display: none;
	overflow: visible;
}
#Boundary_ea {
	fill: transparent;
}
.Boundary_ea {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_eb {
	fill: rgba(0,0,0,0.6);
}
.n_Color_eb {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Light__Text_fields1_Filled_A_N_ec {
	position: absolute;
	width: 579px;
	height: 74px;
	left: 1110px;
	top: 573px;
	overflow: visible;
}
#Light_Elevation00dp_ed {
	position: absolute;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Rectangle_ee {
	fill: rgba(255,255,255,1);
}
.Rectangle_ee {
	mix-blend-mode: multiply;
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#n_Container_l_Color_ef {
	fill: rgba(110,110,111,0.11);
}
.n_Container_l_Color_ef {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#States_eg {
	fill: transparent;
}
.States_eg {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#Indicator_eh {
	fill: rgba(255,255,255,0.6);
}
.Indicator_eh {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 1px;
	left: 0px;
	top: 55px;
}
#n_Assistive_text_ei {
	left: 16px;
	top: 58px;
	position: absolute;
	overflow: visible;
	width: 212px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.3333333206176758px;
}
#Trailing_icon_ej {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 543px;
	top: 16px;
	overflow: visible;
}
#Boundary_ek {
	fill: transparent;
}
.Boundary_ek {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#Cursor_el {
	fill: rgba(0,0,0,0.871);
}
.Cursor_el {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 151px;
	top: 20px;
}
#n_Input_text_em {
	left: 16px;
	top: 19px;
	position: absolute;
	overflow: visible;
	width: 290px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.09375px;
}
#n_Label_en {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_eo {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 16px;
	display: none;
	overflow: visible;
}
#Boundary_ep {
	fill: transparent;
}
.Boundary_ep {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_eq {
	fill: rgba(0,0,0,0.6);
}
.n_Color_eq {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Light__Text_fields1_Filled_A_N_er {
	position: absolute;
	width: 579px;
	height: 74px;
	left: 1110px;
	top: 717px;
	overflow: visible;
}
#Light_Elevation00dp_es {
	position: absolute;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Rectangle_et {
	fill: rgba(255,255,255,1);
}
.Rectangle_et {
	mix-blend-mode: multiply;
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#n_Container_l_Color_eu {
	fill: rgba(110,110,111,0.11);
}
.n_Container_l_Color_eu {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#States_ev {
	fill: transparent;
}
.States_ev {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#Indicator_ew {
	fill: rgba(255,255,255,0.6);
}
.Indicator_ew {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 1px;
	left: 0px;
	top: 55px;
}
#n_Assistive_text_ex {
	left: 16px;
	top: 58px;
	position: absolute;
	overflow: visible;
	width: 212px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.3333333206176758px;
}
#Trailing_icon_ey {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 543px;
	top: 16px;
	overflow: visible;
}
#Boundary_ez {
	fill: transparent;
}
.Boundary_ez {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#Cursor_e {
	fill: rgba(0,0,0,0.871);
}
.Cursor_e {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 151px;
	top: 20px;
}
#n_Input_text_e {
	left: 16px;
	top: 19px;
	position: absolute;
	overflow: visible;
	width: 290px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.09375px;
}
#n_Label_e {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_e {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 16px;
	display: none;
	overflow: visible;
}
#Boundary_e {
	fill: transparent;
}
.Boundary_e {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_e {
	fill: rgba(0,0,0,0.6);
}
.n_Color_e {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Light__Text_fields1_Filled_A_N_e {
	position: absolute;
	width: 579px;
	height: 74px;
	left: 1110px;
	top: 861px;
	overflow: visible;
}
#Light_Elevation00dp_e {
	position: absolute;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Rectangle_e {
	fill: rgba(255,255,255,1);
}
.Rectangle_e {
	mix-blend-mode: multiply;
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#n_Container_l_Color_e {
	fill: rgba(110,110,111,0.11);
}
.n_Container_l_Color_e {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#States_fa {
	fill: transparent;
}
.States_fa {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 56px;
	left: 0px;
	top: 0px;
}
#Indicator_fb {
	fill: rgba(255,255,255,0.6);
}
.Indicator_fb {
	position: absolute;
	overflow: visible;
	width: 579px;
	height: 1px;
	left: 0px;
	top: 55px;
}
#n_Assistive_text_fc {
	left: 16px;
	top: 58px;
	position: absolute;
	overflow: visible;
	width: 212px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.3333333206176758px;
}
#Trailing_icon_fd {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 543px;
	top: 16px;
	overflow: visible;
}
#Boundary_fe {
	fill: transparent;
}
.Boundary_fe {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#Cursor_ff {
	fill: rgba(0,0,0,0.871);
}
.Cursor_ff {
	display: none;
	position: absolute;
	overflow: visible;
	width: 1px;
	height: 17px;
	left: 151px;
	top: 20px;
}
#n_Input_text_fg {
	left: 16px;
	top: 19px;
	position: absolute;
	overflow: visible;
	width: 290px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: rgba(0,0,0,0.38);
	letter-spacing: 0.09375px;
}
#n_Label_fh {
	display: none;
	left: 16px;
	top: 7px;
	position: absolute;
	overflow: visible;
	width: 32px;
	white-space: nowrap;
	line-height: 16px;
	margin-top: -2px;
	text-align: left;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	color: rgba(0,0,0,0.6);
	letter-spacing: 0.3333333206176758px;
}
#Leading_icon_fi {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 16px;
	top: 16px;
	display: none;
	overflow: visible;
}
#Boundary_fj {
	fill: transparent;
}
.Boundary_fj {
	position: absolute;
	overflow: visible;
	width: 24px;
	height: 24px;
	left: 0px;
	top: 0px;
}
#n_Color_fk {
	fill: rgba(0,0,0,0.6);
}
.n_Color_fk {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18px;
	left: 2px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Radio_Button {
	position: absolute;
	width: 73px;
	height: 73px;
	left: 172px;
	top: 136px;
	overflow: visible;
}
#n_2 {
	fill: rgba(255,255,255,1);
	stroke: rgba(100,100,100,1);
	stroke-width: 8px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_2 {
	position: absolute;
	overflow: visible;
	width: 73px;
	height: 73px;
	left: 0px;
	top: 0px;
}
#n_3 {
	fill: rgba(255,177,0,1);
}
.n_3 {
	position: absolute;
	overflow: visible;
	width: 39px;
	height: 39px;
	left: 17px;
	top: 17px;
}
#Radio_Button_fo {
	position: absolute;
	width: 73px;
	height: 73px;
	left: 172px;
	top: 280px;
	overflow: visible;
}
#n_2_fp {
	fill: rgba(255,255,255,1);
	stroke: rgba(100,100,100,1);
	stroke-width: 8px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_2_fp {
	position: absolute;
	overflow: visible;
	width: 73px;
	height: 73px;
	left: 0px;
	top: 0px;
}
#n_3_fq {
	fill: transparent;
}
.n_3_fq {
	position: absolute;
	overflow: visible;
	width: 39px;
	height: 39px;
	left: 17px;
	top: 17px;
}
#Radio_Button_fr {
	position: absolute;
	width: 73px;
	height: 73px;
	left: 172px;
	top: 424px;
	overflow: visible;
}
#n_2_fs {
	fill: rgba(255,255,255,1);
	stroke: rgba(100,100,100,1);
	stroke-width: 8px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_2_fs {
	position: absolute;
	overflow: visible;
	width: 73px;
	height: 73px;
	left: 0px;
	top: 0px;
}
#n_3_ft {
	fill: transparent;
}
.n_3_ft {
	position: absolute;
	overflow: visible;
	width: 39px;
	height: 39px;
	left: 17px;
	top: 17px;
}
#Radio_Button_fu {
	position: absolute;
	width: 73px;
	height: 73px;
	left: 172px;
	top: 568px;
	overflow: visible;
}
#n_2_fv {
	fill: rgba(255,255,255,1);
	stroke: rgba(100,100,100,1);
	stroke-width: 8px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_2_fv {
	position: absolute;
	overflow: visible;
	width: 73px;
	height: 73px;
	left: 0px;
	top: 0px;
}
#n_3_fw {
	fill: transparent;
}
.n_3_fw {
	position: absolute;
	overflow: visible;
	width: 39px;
	height: 39px;
	left: 17px;
	top: 17px;
}
#Radio_Button_fx {
	position: absolute;
	width: 73px;
	height: 73px;
	left: 172px;
	top: 712px;
	overflow: visible;
}
#n_2_fy {
	fill: rgba(255,255,255,1);
	stroke: rgba(100,100,100,1);
	stroke-width: 8px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_2_fy {
	position: absolute;
	overflow: visible;
	width: 73px;
	height: 73px;
	left: 0px;
	top: 0px;
}
#n_3_fz {
	fill: transparent;
}
.n_3_fz {
	position: absolute;
	overflow: visible;
	width: 39px;
	height: 39px;
	left: 17px;
	top: 17px;
}
#n_2_f {
	fill: rgba(255,255,255,1);
	stroke: rgba(100,100,100,1);
	stroke-width: 8px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_2_f {
	position: absolute;
	overflow: visible;
	width: 73px;
	height: 73px;
	left: 172px;
	top: 856px;
}
#n_3_f {
	fill: transparent;
}
.n_3_f {
	position: absolute;
	overflow: visible;
	width: 39px;
	height: 39px;
	left: 189px;
	top: 945px;
}
#A {
	left: 440px;
	top: 297px;
	position: absolute;
	overflow: visible;
	width: 220px;
	white-space: nowrap;
	text-align: left;
	font-family: Tsukushi B Round Gothic;
	font-style: normal;
	font-weight: bold;
	font-size: 38px;
	color: rgba(0,0,0,1);
}
#Text_f {
	left: 492px;
	top: 442px;
	position: absolute;
	overflow: visible;
	width: 114px;
	white-space: nowrap;
	text-align: left;
	font-family: Tsukushi B Round Gothic;
	font-style: normal;
	font-weight: bold;
	font-size: 38px;
	color: rgba(0,0,0,1);
}
#Text_ga {
	left: 493px;
	top: 586px;
	position: absolute;
	overflow: visible;
	width: 115px;
	white-space: nowrap;
	text-align: left;
	font-family: Tsukushi B Round Gothic;
	font-style: normal;
	font-weight: bold;
	font-size: 38px;
	color: rgba(0,0,0,1);
}
#Text_gb {
	left: 512px;
	top: 730px;
	position: absolute;
	overflow: visible;
	width: 77px;
	white-space: nowrap;
	text-align: left;
	font-family: Tsukushi B Round Gothic;
	font-style: normal;
	font-weight: bold;
	font-size: 38px;
	color: rgba(0,0,0,1);
}
#Text_gc {
	left: 491px;
	top: 874px;
	position: absolute;
	overflow: visible;
	width: 115px;
	white-space: nowrap;
	text-align: left;
	font-family: Tsukushi B Round Gothic;
	font-style: normal;
	font-weight: bold;
	font-size: 38px;
	color: rgba(0,0,0,1);
}
#n_255 {
	fill: rgba(95,251,38,0.522);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_255 {
	position: absolute;
	overflow: visible;
	width: 40px;
	height: 40px;
	left: 335px;
	top: 296px;
}
#n_256 {
	fill: rgba(188,224,253,0.522);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_256 {
	position: absolute;
	overflow: visible;
	width: 40px;
	height: 40px;
	left: 335px;
	top: 441px;
}
#n_259 {
	fill: rgba(38,153,251,0.522);
}
.n_259 {
	position: absolute;
	overflow: visible;
	width: 40px;
	height: 40px;
	left: 335px;
	top: 585px;
}
#n_260 {
	fill: rgba(95,251,38,0.522);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_260 {
	position: absolute;
	overflow: visible;
	width: 40px;
	height: 40px;
	left: 335px;
	top: 734px;
}
#n_262 {
	fill: rgba(188,224,253,0.522);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_262 {
	position: absolute;
	overflow: visible;
	width: 40px;
	height: 40px;
	left: 335px;
	top: 873px;
}
#n_1 {
	mix-blend-mode: normal;
	position: absolute;
	width: 297px;
	height: 90px;
	left: 1473px;
	top: 973px;
	overflow: visible;
	--web-animation: fadein 0.30000001192092896s ease-out;
	--web-action-type: page;
	--web-action-target: Mypage___2.html;
	cursor: pointer;
}
#n_1_gd {
	fill: transparent;
	stroke: rgba(188,224,253,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: round;
	stroke-dasharray: 2;
	stroke-dashoffset: 0;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.n_1_gd {
	position: absolute;
	overflow: visible;
	width: 297px;
	height: 90px;
	left: 0px;
	top: 0px;
}
#Text_ge {
	left: 86px;
	top: 14px;
	position: absolute;
	overflow: visible;
	width: 127px;
	white-space: nowrap;
	line-height: 75px;
	margin-top: -6px;
	text-align: center;
	font-family: Arial;
	font-style: normal;
	font-weight: bold;
	font-size: 63px;
	color: rgba(38,153,251,1);
}
</style>
