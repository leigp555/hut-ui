<demo>
基本用法
</demo>

<template>
  <Descriptions>
    <DesItemRow>
      <DesItemColumn label="Product">Cloud Database</DesItemColumn>
      <DesItemColumn label="Billing Mode">Prepaid</DesItemColumn>
      <DesItemColumn label="Automatic Renewal">YES</DesItemColumn>
    </DesItemRow>
    <DesItemRow>
      <DesItemColumn label="Order time">2018-04-24 18:00:00</DesItemColumn>
      <DesItemColumn label="Usage Time" :contentSpan="3"
        >2019-04-24 18:00:00</DesItemColumn
      >
    </DesItemRow>
    <DesItemRow>
      <DesItemColumn label="Status" :contentSpan="5">
        <span class="status" /> Running
      </DesItemColumn>
    </DesItemRow>
    <DesItemRow>
      <DesItemColumn label="Negotiated Amount">$80.00</DesItemColumn>
      <DesItemColumn label="Discount">$20.00</DesItemColumn>
      <DesItemColumn label="Official Receipts">$60.00</DesItemColumn>
    </DesItemRow>
    <DesItemRow>
      <DesItemColumn label="Config Info" :contentSpan="5">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </DesItemColumn>
    </DesItemRow>
  </Descriptions>
</template>

<script setup lang="ts">
import { Descriptions, DesItemRow, DesItemColumn } from '@/lib'
</script>
