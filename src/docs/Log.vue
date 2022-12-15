<template>
  <GuideContent>
    <template #content>
      <Typography>
        <Title :level="3">CHANGELOG</Title>
        <Paragraph style="margin-bottom: 40px">
          <p>版本变更</p>
        </Paragraph>
        <Title :level="4">V 1.0.7</Title>
        <Paragraph>Docs</Paragraph>
        <Paragraph>
          <ul>
            <li>
              <p>组件正式发布</p>
            </li>
          </ul>
        </Paragraph>
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
