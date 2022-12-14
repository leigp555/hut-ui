<script setup lang="ts">
import { withDefaults, defineProps, ref, onMounted, watch } from 'vue'
import {
  Icon_eyeShow,
  Icon_turnLeft,
  Icon_smaller,
  Icon_biger,
  Icon_cha
} from '@hut-ui/icons-vue'

import { bodyAddClass } from '../common/bodyAddClass'

withDefaults(defineProps<{ src: string }>(), {})

const imgOpen = ref<boolean>(false)
const imgRef = ref<HTMLImageElement | null>(null)
const rotate = ref<number>(0)
const scale = ref<number>(1)
const portal = () => {
  rotate.value = 0
  scale.value = 1
  imgRef.value!.style.transform = `translate3d(0,0,0) rotate(${rotate.value}deg) scale(${scale.value})`
  imgOpen.value = !imgOpen.value
}
const onClickLeft = () => {
  rotate.value -= 90
  imgRef.value!.style.transform = `translate3d(0,0,0) rotate(${rotate.value}deg) scale(${scale.value})`
}
const onClickRight = () => {
  rotate.value += 90
  imgRef.value!.style.transform = `translate3d(0,0,0) rotate(${rotate.value}deg) scale(${scale.value})`
}
const onClickSmall = () => {
  scale.value -= 0.1
  imgRef.value!.style.transform = `translate3d(0,0,0) scale(${scale.value}) rotate(${rotate.value}deg)`
}
const onClickBig = () => {
  scale.value += 0.1
  imgRef.value!.style.transform = `translate3d(0,0,0) scale(${scale.value}) rotate(${rotate.value}deg)`
}
const onClickClose = () => {
  imgOpen.value = false
  rotate.value = 0
  scale.value = 1
  imgRef.value!.style.transform = `translate3d(0,0,0) scale(1) rotate(0)`
}

onMounted(() => {
  watch(imgOpen, () => {
    if (imgOpen.value) {
      bodyAddClass(imgOpen.value)
    } else {
      setTimeout(() => {
        bodyAddClass(imgOpen.value)
      }, 300)
    }
  })
})
</script>

<template>
  <div class="ui-image-wrap" @click="portal">
    <img :src="src" alt="图片" />
    <div class="ui-image-mask">
      <span class="ui-image-eye">
        <Icon_eyeShow name="eye_show" width="1.5em" height="1.5em" fill="#FFFFFF" />
        <span>预览</span>
      </span>
    </div>
    <Teleport to="body">
      <div class="ui-body-image-wrap" :class="{ imgOpen }">
        <div class="action">
          <span @click="onClickLeft">
            <Icon_turnLeft
              name="turnLeft"
              width="1.5em"
              height="1.5em"
              fill="#FFFFFF"
            />
          </span>
          <span @click="onClickRight" :style="{ transform: 'rotateY(180deg)' }">
            <Icon_turnLeft
              name="turnLeft"
              width="1.5em"
              height="1.5em"
              fill="#FFFFFF"
            />
          </span>
          <span @click="onClickSmall">
            <Icon_smaller name="smaller" height="1.4em" width="1.4em" fill="#FFFFFF" />
          </span>
          <span @click="onClickBig">
            <Icon_biger name="biger" height="1.4em" width="1.4em" fill="#FFFFFF" />
          </span>
          <span @click="onClickClose">
            <Icon_cha name="cha" height="1.2em" width="1.2em" fill="#FFFFFF" />
          </span>
        </div>
        <div class="ui-body-image-content">
          <img class="ui-body-image" ref="imgRef" :src="src" alt="图片" />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style lang="scss">
.ui-image-wrap {
  display: inline-block;
  position: relative;
  cursor: default;
  .ui-image-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000073;
    opacity: 0;
    transition: opacity 250ms;
    > .ui-image-eye {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      gap: 2px;
      > span {
        color: white;
        font-size: 14px;
      }
    }
  }
  &:hover {
    border-color: transparent;
    box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
    > .ui-image-mask {
      opacity: 1;
    }
  }
  img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: bottom;
  }
}

.ui-body-image-wrap {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
  user-select: none;
  top: 0;
  left: 0;
  transition: all 250ms;
  transform: scale(0);
  opacity: 0;
  &.imgOpen {
    transform: scale(1);
    opacity: 1;
  }
  > .action {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: end;
    width: 100%;
    gap: 30px;
    z-index: 10;
    background-color: #00000073;
    padding: 12px 50px;
    @media (max-width: 500px) {
      justify-content: center;
    }
    > span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  > .ui-body-image-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > .ui-body-image {
      max-width: 100%;
      max-height: 100%;
      transition: all 500ms;
    }
  }
}
</style>
