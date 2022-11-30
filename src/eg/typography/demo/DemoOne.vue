<demo>
示例一
</demo>

<template>
  <Typography>
    <Title level="2">Introduction</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis dignissimos
      dolore, doloribus enim eveniet, explicabo fugiat id impedit iure laboriosam
      laborum nobis officia praesentium quasi sed sequi tempora, unde.
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore
      dolorem ducimus facilis hic possimus praesentium totam unde? Ipsa nam, soluta? Ad
      et quasi, ratione repudiandae sunt tempora temporibus veritatis.
      <Text strong>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, et, natus? Ad
        delectus deserunt doloribus, error explicabo id illum incidunt laborum minima,
        officiis, pariatur quasi reprehenderit sint? Dolores, tempora, vitae.
      </Text>
    </Paragraph>
    <Title level="2"> Lorem ipsum dolor sit amet,</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur commodi
      corporis debitis, doloribus ducimus error excepturi exercitationem facilis id iure
      maxime modi nostrum optio quas recusandae repellendus sed suscipit? (<Text code
        >Lorem</Text
      >
      and <Text code>Lorem</Text>), Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Aliquid, aspernatur consequuntur deserunt dolorum ex inventore ipsa ipsam
      magnam magni minus molestias nam natus numquam optio perspiciatis quos temporibus
      vel veniam?
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <a href="/docs/spec/proximity">Principles</a>
        </li>
        <li>
          <a href="/docs/spec/overview">Patterns</a>
        </li>
        <li>
          <a href="/docs/resources">Resource Download</a>
        </li>
      </ul>
    </Paragraph>

    <Paragraph> Press <Text keyboard>Esc</Text> to exit... </Paragraph>
  </Typography>
</template>

<script setup lang="ts">
import { Paragraph, Typography, Title, Text } from '@/lib'
</script>
