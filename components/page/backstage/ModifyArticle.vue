<template>
  <div class="p-4 m-4 text-gray-500 card">
    <CommonBaseInput
      v-model="name.value"
      label="標題"
      :is-valid.sync="name.isValid"
    />
    <div class="text-sm">分類</div>
    <CommonBaseCheckbox v-model="checked" :options="options" />
    <div class="text-sm">內容</div>
    <div class="flex my-4">
      <div
        :class="[
          'btn',
          'btn-primary',
          'hover:btn-primary',
          'mr-4',
          { 'btn-primary-active': contentTab === 'html' },
        ]"
        @click="changeTab('html')"
      >
        HTML
      </div>
      <div
        :class="[
          'btn',
          'btn-secondary',
          'hover:btn-secondary',
          ,
          { 'btn-secondary-active': contentTab === 'editor' },
        ]"
        @click="changeTab('editor')"
      >
        文本編輯
      </div>
    </div>
    <textarea
      v-if="contentTab === 'html'"
      v-model="content"
      placeholder="請輸入內容"
      class="p-4 w-full focus:outline-none shadow focus:ring-1 bg-gray-200 rounded resize-none transition-shadow dark:bg-gray-700 dark:text-gray-200"
      rows="10"
    />
    <quill-editor
      v-else
      v-model="content"
      :options="editorOption"
    ></quill-editor>
    <div class="btn btn-primary hover:btn-primary w-20 my-4" @click="submit">
      送出
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ModifyArticle',
  props: {
    target: {
      type: String,
      default: '',
    },
    article: {
      type: Object,
      default: () => ({}),
    },
    sortList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      name: {
        value: '',
        isValid: false,
      },
      content: '',
      checked: [],
      // checkList: [],
      contentTab: 'html',
      editorOption: {
        bounds: 'app',
        placeholder: '',
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ header: 1 }, { header: 2 }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ direction: 'rtl' }],
              [{ size: ['small', false, 'large', 'huge'] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ['clean'],
              ['link', 'image'],
            ],
          },
        },
      },
    }
  },
  computed: {
    options() {
      return this.sortList.map((item: any) => {
        return { label: item.name, value: item.name }
      })
    },
  },
  mounted() {
    if (this.target) {
      this.name.value = this.article.name
      this.name.isValid = true
      this.content = this.article.content
      this.checked = this.article.sorts ? this.article.sorts : []
    }
  },
  methods: {
    changeTab(target: string) {
      this.contentTab = target
    },
    submit() {
      if (!this.name.isValid) {
        this.$message.error('請填寫標題')
        return
      } else if (!this.content) {
        this.$message.error('請填寫內容')
        return
      }
      const now = Date.now()
      const params: any = {
        name: this.name.value,
        content: this.content,
        createTime: this.target ? this.article.createTime : now,
        updateTime: now,
        sorts: this.checked,
      }
      if (!this.target) {
        this.$emit('createArticle', params)
      } else {
        params._id = this.$route.params.article
        this.$emit('updateArticle', params)
      }
    },
  },
})
</script>
