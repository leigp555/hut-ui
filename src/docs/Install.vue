<template>
  <GuideContent>
    <template #content>
      <Typography>
        <Title :level="3">安装</Title>
        <blockquote style="margin-bottom: 40px">
          注意，Hut UI 仅支持 Vue3。如果你在使用 Vue2，可以去看看别的库。
        </blockquote>
        <Title>npm安装</Title>
        <Paragraph>
          <pre class="language-bash scroll-container" v-html="npmInstall" />
        </Paragraph>
        <Title>yarn安装</Title>
        <Paragraph>
          <pre class="language-html scroll-container" v-html="yarnInstall" />
        </Paragraph>
        <Title>pnpm安装</Title>
        <Paragraph>
          <pre class="language-html scroll-container" v-html="pnpmInstall" />
        </Paragraph>
      </Typography>
    </template>
  </GuideContent>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib'
import GuideContent from '@/components/GuideContent.vue'

import { getSourceCode } from '@/eg/helper'

const npmInstall = getSourceCode('npm install hut-ui')
const yarnInstall = getSourceCode('yarn add hut-ui')
const pnpmInstall = getSourceCode('pnpm install hut-ui')
</script>
