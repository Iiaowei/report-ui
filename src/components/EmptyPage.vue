<template>
  <a-empty
      :image="simpleImage"
  >
    <template #description>
      <span>
        Customize
        <a href="#API">Description</a>
      </span>
    </template>
    <a-button type="primary">发起流程</a-button>
  </a-empty>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Empty } from 'ant-design-vue'

export default defineComponent({
  setup() {
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
    };
  },
});
</script>