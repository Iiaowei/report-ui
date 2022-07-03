<template>
  <a-table :columns="tableColumns" :data-source="tableData" bordered>
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
<script lang="ts">
import {SmileOutlined} from '@ant-design/icons-vue'
import {defineComponent, reactive, toRefs, onMounted, PropType} from 'vue'

export interface ColumnType {
  title?: string,
  dataIndex?: string,
  slots?: object
}

export default defineComponent({
  props: {
    columns: {
      type: Array as PropType<ColumnType>,
      default: () => [
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
        }
      ],
    },
    dataSource: {
      type: Array,
      default: () => [
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
    }
  },
  setup: function (props) {
    const handler = (key: string) => {
      console.log(key)
    }


    const applyColumns: Array<ColumnType> = [{
      title: '申请单号',
      dataIndex: 'applyNo'
    }]

    const processColumns: Array<ColumnType> = [
      {
        title: '流程状态',
        dataIndex: 'processState'
      },
      {
        title: '发起人',
        dataIndex: 'startUser'
      },
      {
        title: '发起时间',
        dataIndex: 'startTime'
      },
      {
        title: 'Action',
        slots: {customRender: 'action'}
      }
    ]
    const newColumns: Array<ColumnType>  = applyColumns.concat(props.columns).concat(processColumns)


    const defaultColumns = reactive({
      tableColumns: newColumns,
      tableData: props.dataSource
    })
    return {
      handler,
      ...toRefs(defaultColumns)
    }
  },
  components: {
    SmileOutlined
  },
});
</script>