<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api/post'

const router = useRouter()
const form = ref({
  title: '',
  contents: '',
})

const handleCreate = async () => {
  await api.create({
    title: form.value.title,
    contents: form.value.contents,
  })
  router.push({ name: 'post-list' })
}

const handleCancel = () => {
  router.push({ name: 'post-list' })
}
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative p-6 md:p-8"
  >
    <h2 class="text-xl font-bold mb-6 text-gray-800">새 게시글 작성</h2>
    <form @submit.prevent="submitForm" class="space-y-5">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">제목</label>
        <input
          v-model="form.title"
          type="text"
          required
          placeholder="제목을 입력하세요."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">내용</label>
        <textarea
          v-model="form.contents"
          required
          rows="8"
          placeholder="내용을 입력하세요."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow resize-y"
        ></textarea>
      </div>
      <div class="pt-4 flex justify-end gap-3">
        <button
          type="button"
          @click="handleCancel"
          class="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm"
        >
          취소
        </button>
        <button
          type="button"
          @click="handleCreate"
          class="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors font-medium text-sm"
        >
          등록하기
        </button>
      </div>
    </form>
  </div>
</template>
