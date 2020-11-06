<template>
  <div class="drag-list-wrapper">
    <div class="drag-list-con con1">
      <slot name="left-title"></slot>
      <draggable class="drop-box1" :class="dropConClass.left" :options="options"
                 @input="handleListChange($event, 'left')" @end="handleEnd($event, 'left')">
        <div class="drag-list-item" v-for="(itemLeft, index) in list1" :key="`drag_li1_${index}`">
          <slot name="left" :itemLeft="itemLeft">{{ itemLeft }}</slot>
        </div>
      </draggable>
    </div>
    <div class="drag-list-con con2">
      <slot name="right-title"></slot>
      <draggable class="drop-box2" :class="dropConClass.right" :options="options"
                 @input="handleListChange($event, 'right')" @end="handleEnd($event, 'right')">
        <div class="drag-list-item" v-for="(itemRight, index) in list2" :key="`drag_li2_${index}`">
          <slot name="right" :itemRight="itemRight">{{ itemRight }}</slot>
        </div>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  name: 'DragList',
  components: {
    draggable
  },
  data() {
    return {
      options: {group: 'drag_list'},
      list1: [
        {
          "name": "消对物空精空海其事员何。",
          "id": 10
        },
        {
          "name": "月使车设人容该拉社号需。",
          "id": 30
        },
        {
          "name": "治受局长响维研你共花社而。",
          "id": 50
        },
        {
          "name": "们写转周每本便参办没第及华。",
          "id": 40
        },
        {
          "name": "全任一步由万产命劳切算。",
          "id": 20
        },
        {
          "name": "消对物空精空海其事员何。",
          "id": 10
        }
      ],
      list2: [],
      dropConClass: {
        left: ['drop-box', 'left-drop-box'],
        right: ['drop-box', 'right-drop-box']
      },
    }
  },
  methods: {
    handleListChange(value, type) {
      console.log(value)
      console.log(type)
      if (type === 'left') this.$emit('update:list1', value)
      else this.$emit('update:list2', value)
    },
    handleEnd(event, type) {
      console.log(event)
      console.log(type)
      const srcClassName = (event.srcElement || event.target).classList[0]
      const targetClassName = event.to.classList[0]
      let src = ''
      let target = ''
      if (srcClassName === targetClassName) {
        if (type === 'left') {
          src = 'left'
          target = 'left'
        } else {
          src = 'right'
          target = 'right'
        }
      } else {
        if (type === 'left') {
          src = 'left'
          target = 'right'
        } else {
          src = 'right'
          target = 'left'
        }
      }
      this.$emit('on-change', {
        src: src,
        target: target,
        oldIndex: event.oldIndex,
        newIndex: event.newIndex
      })
    }
  }
}
</script>
<style>
.drag-list-wrapper {
  height: 100%;
}

.drag-list-con {
  width: 50%;
  float: left;
}
.drop-box{
  border: 1px solid #eeeeee;
  height: 455px;
  border-radius: 5px;
}
.left-drop-box{
  margin-right: 10px;
}
</style>
