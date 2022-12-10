<template>
  <GuideContent>
    <template #content>
      <Typography>
        <Title :level="3">按需导入</Title>
        <Paragraph style="margin-bottom: 40px">
          <p>Hut UI 支持 tree shaking</p>
        </Paragraph>
        <Title :level="4">引入示例：</Title>
        <pre class="language-html scroll-container" v-html="demoHtml"></pre>
      </Typography>
    </template>
  </GuideContent>
</template>

<script lang="ts" setup>
import ButtonDemo from '@/eg/button/demo/DemoOne.vue'
import { getSourceCode } from '@/eg/helper'
import { Typography, Paragraph, Title } from '@/lib'
import GuideContent from '@/components/GuideContent.vue'

const demoHtml = getSourceCode(ButtonDemo.__sourceCode)
</script>
