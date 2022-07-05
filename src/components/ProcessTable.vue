<template>
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #customTitle>
      <span>
        <smile-outlined/>
        Name
      </span>
    </template>
    <template #tags="{ text: tags }">
      <span>
        <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template #action="{ record }">
      <span>
        <a-button type="link" @click="handler(record.key)">办理</a-button>
        <a-button type="link">流转历史</a-button>
        <a-button type="link">废弃</a-button>
      </span>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import {SmileOutlined} from '@ant-design/icons-vue'
import {
  defineEmits,
  reactive,
  toRefs,
  PropType,
  ref,
  watch,
  withDefaults,
  defineProps,
  computed,
  nextTick,
  onMounted
} from 'vue'

export interface Model {
  columns?: Array<object>,
  dataSource?: object[],
}

export interface ColumnType {
  title?: string,
  dataIndex?: string,
  slots?: object
}

const props = withDefaults(defineProps<Model>(), {
  columns: () => [
    {
      dataIndex: 'name',
      key: 'name',
      slots: {title: 'customTitle', customRender: 'name'}
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      slots: {customRender: 'tags'}
    },
    {
      title: 'Action',
      slots: {customRender: 'action'}
    }
  ],
  dataSource: () => [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]
})

const {columns, dataSource} = toRefs(props)

const emits = defineEmits<{
  (e: 'selected'): void
}>()
const numberRef = ref(0)
const number = computed(() => numberRef.value)

const handler = (key: string) => {
  console.log(key);
}
onMounted(() => {
  console.log(111)
})
watch(numberRef, () => {
  console.log(`111`)
})

nextTick(() => {
  console.log(111)
})
</script>