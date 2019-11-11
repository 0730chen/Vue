---
title: VueX使用初体验
data: 2019-9-30
tag: Vue VueX 
---

##### VueX使用
1. 下载安装vuex
```javascript
npm install vuex--save //npm 安装
yarn add vuex //yran 安装
```
2. 在项目中使用
```javascript
import vue from 'vue'
import Vuexfrom 'vuex'
Vue.use(Vuex)
```
3. Vuex是什么？
* Vuex是一个统一状态管理模式，就像一个仓库一样存放你需要的数据，各个组件可以通过引用Vuex来获取仓库中的数据
4. 仓库(Vuex)组成
    * state 仓库中存放粮食的部分(数据)，就相当于 data 是一个对象
	* Getter 是一个对象，用来处理对state中的数据，返回想要的数据，相当于Vue中的计算属性Computed
	* Mutation 是一个对象，存放所有的同步方法，里面不能存在异步操作
	* Action 是一个对象，存放所有的异步请求 ajax promise
5. 使用
    * state 
	1. 基本使用
	``` javascript
	//state
	this.$store.state获取state其中的数据
	//getter
	function add(state){}
	store.getters.state //getter会暴露为store。getters对象上通过属性访问
	//mutation是惟一可以改变state中状态，每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
	mutations:{
		add(state){
			//更改state中的数值
			state.count++
		}
		}
	store.commit('add')//在需要调用的地方调用，可以提交两个参数
	//Mutation中都是同步事件
	//Action中都是异步事件，一般为ajax
	Actions:{
		add2(){
			context.commit('add')//调用mutations中的方法
			//异步操作
			//Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation
			//action无法更改state中的数据，通过提交cmmit('add')提交mutation
		}
	}
	//action方法通过store.dispatch('add2')触发，也可以store.dispatch('add2').then()异步组合

	``` 
	2. module使用
	* 模块化使用VueX,将所有对象集中到一起会使store对象变得臃肿，可以将store分成模块，每一个模块都有自己的state，getters，mutations ,Actions方法
	```javascript
	const A ={
		state:{},
		getters:{},
		mutations:{},
		actions:{},
	}
	const B = {
		state:{},
		getters:{},
		mutations:{},
		actions:{},
	}
	//两个模块需要在Vuex中注册才可以使用
	const store = new Vuex({
		modules:{
			a:A,
			b:B,
		}
	})
	store.state.a //就是访问a仓库的
	store.state.b //就是访问b仓库
	//context是一个与store具有相同属性的对象，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
	//辅助函数使用
	computed{
		...mapState(['add'])//添加自定义仓库名
		//将this.add映射为this.$store.state.add仓库
		...mapState({add:'add'})//使用对象形式
		...mapGetters([])
		...mapGetters({'':''})
		......//每一个都存在辅助函数，
		
	}
	```
	3. 辅助函数是语法糖，可以形成一一对应的映射关系
	``` javascript
	this.add() //相当于this.$store.state.add
	```
	极大的方便调用对仓库的操作
	4. 使用经验
	 Vuex一般都在Vue中的计算属性中调用
	5. 在from表单中的问题 
	``` javascript
	<input v-model="value" @input="add">
	//计算属性
	computed:{
		...mapState({
			value:state=>{state.value}
		})
	},
	methods:{
		click(e){
			this.$store.commit('add',e.traget.value)
		}
	}
	//定义mutations函数
	mutations:{
		add(state,value){
			state.value = value
		}
	}
	//另一种方式
	computed:{
		message:{
			get(){
				returun this.$store.state.value
			},
			set(value){
				this.$sotre.commit('add',value)
			}
		}
	}
	```
	6. 因为表单和是双向数据绑定，每次更改都需要重新提交mutation更改对应state中的值
	7. 传参,需要将页面数据传入state仓库中，在调用函数时传入参数
	```javascript
	moutations:{
		getID:function(context,id){}
	}
	//在外部调用时
	this.getID(value)//此时的value值就是id的值
	```
