<template>
  <div class="app">
  	<div class="c-tit">基础实例</div>
  	<div class="t-wrap">
			<div class="dragBox1">
			 	<draggable v-model="myList" class="dragList" :options="dragOptions"  @start="isDragging=true" @end="isDragging=false">
			    <transition-group tag="div" type="transition" :name="'flip-list'">
			        <div v-for="element in myList" :key="element.order" class="dragItem">
			            {{element.name}}
			        </div>
			    </transition-group>
				</draggable>
			  <div class="dragList"><pre>{{listString}}</pre></div>
			</div>
		</div>
		<div class="c-tit">列表交换</div>
		<div class="t-wrap">
			<div class="dragBox2">
				<Row :gutter="16">
	        <Col span="4">
	        	<draggable class="list-group" element="ul" v-model="list" :options="dragOptions1" :move="onMove" @start="isDragging=true" @end="isDragging=false"> 
			          <transition-group type="transition" :name="'flip-list'">
			            <li class="list-group-item" v-for="element in list" :key="element.order"> 
			              <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
			              {{element.name}}
			              <span class="badge">{{element.order}}</span>
			            </li> 
			          </transition-group>
			      </draggable>
	        </Col>
	        <Col span="4">
	        	<draggable element="span" v-model="list2" :options="dragOptions1" :move="onMove"> 
			          <transition-group name="no" class="list-group" tag="ul">
			            <li class="list-group-item" v-for="element in list2" :key="element.order"> 
			              <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
			              {{element.name}}
			              <span class="badge">{{element.order}}</span>
			            </li> 
			          </transition-group>
			      </draggable>
	        </Col>
	        <Col span="8">
	        	<div class="list2String"><pre>{{list2String}}</pre></div>
	        </Col>
	        <Col span="8">
	        	<div class="list3String"><pre>{{list3String}}</pre></div>
	        </Col>
	    	</Row>
			</div>
		</div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const message = [ 'vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based', 'on', 'Sortablejs' ]
export default {
  name: 'dome1',
  data () {
    return {
      msg: 'dome1',
      list: message.map((name, index) => { return {name, order: index + 1, fixed: false} }),
      list2: [{ 'name': 'vue-draggable1', 'order': 9, 'fixed': false }],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      dragOptions: {
        animation: 0,
        group: 'description',
        ghostClass: 'ghost'
      }
      // listString: null
    }
  },
  components: {
    draggable
  },
  methods: {
    orderList () {
      this.list = this.list.sort((one, two) => { return one.order - two.order })
    },
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  },
  computed: {
    myList: {
      get () {
        return this.$store.state.dragDt
      },
      set (value) {
        this.$store.commit('updateList', value)
      }
    },
    listString () {
      return JSON.stringify(this.$store.state.dragDt, null, 2)
    },
    list2String () {
      return JSON.stringify(this.list, null, 2)
    },
    list3String () {
      return JSON.stringify(this.list2, null, 2)
    },
    dragOptions1 () {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.dragList{
		float: left;
		margin-right: 20px;
		width: 80px;
	}
	div.dragList:nth-child(2){
		width: 45%;
	}
	.dragBox1{
		width: 80%;
		display: inline-block;
		padding:10px;	
	}
	.dragItem{
		width: 70px;
		padding:10px 0;
		text-align: center;
		border:1px solid #d7dde4;
		border-radius: 3px;
		margin-top: 10px;
		cursor: move;

	}
	.listString1{
		width: 30%;
		display: inline-block;
	}
	.flip-list-move {
	  transition: transform 0.5s;
	}

	.no-move {
	  transition: transform 0s;
	}

	.ghost {
	  opacity: .5;
	  background: #C8EBFB;
	}

	.list-group {
	  min-height: 20px;
	}

	.list-group-item {
	  cursor: move;
	  width: 100px;
	  border:1px solid #f0f0f0;
	  border-radius:3px;
	  padding: 5px 0;
	  text-align: center;
	  margin-top: 10px;
	}

	.list-group-item i{
	  cursor: pointer;
	}
</style>
