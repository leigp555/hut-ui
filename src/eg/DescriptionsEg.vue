<template>
  <div class="ui-template-wrap">
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
  </div>
</template>

<script setup lang="ts">
import Descriptions from '@/lib/descriptions/Descriptions.vue'
import DesItemRow from '@/lib/descriptions/DesItemRow.vue'
import DesItemColumn from '@/lib/descriptions/DesItemColumn.vue'
</script>

<style lang="scss">
.ui-template-wrap {
  .status {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 10px;
    background-color: #1890ff;
    border-radius: 50%;
    border: 2px solid #ffffff;
    animation: status_action 250ms infinite alternate;
  }
}
@keyframes status_action {
  0% {
    box-shadow: 0 0 0 0 rgba(24, 144, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 4px rgba(24, 144, 255, 0.2);
  }
}
</style>
