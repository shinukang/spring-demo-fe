<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '@/api/post'

const router = useRouter()
const route = useRoute()

const form = ref({
  title: '',
  contents: '',
})

// 수정 페이지 진입 시 기존 데이터를 불러오는 모의 로직을 추가하였다.
onMounted(async () => {
  const res = await api.read(route.params.postId)
  form.value.title = res.data.title
  form.value.contents = res.data.contents
})

const handleUpdate = async () => {
  await api.update({
    id: route.params.postId,
    title: form.value.title,
    contents: form.value.contents,
  })
  router.push({ name: 'post-read', params: { id: route.params.id } })
}

const handleCancel = () => {
  router.push({ name: 'post-read', params: { id: route.params.id } })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans py-8">
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- 페이지 헤더 -->
      <header class="mb-8 border-b border-gray-200 pb-4 flex justify-between items-end">
        <div>
          <h1 class="text-3xl font-bold text-indigo-600">자유 게시판</h1>
          <p class="text-sm text-gray-500 mt-2">단일 페이지 구조로 구성된 게시글 수정</p>
        </div>
      </header>

      <!-- 게시글 수정 폼 영역 (제공된 코드의 외관을 동일하게 적용) -->
      <main
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative p-6 md:p-8"
      >
        <h2 class="text-xl font-bold mb-6 text-gray-800">게시글 수정</h2>
        <form @submit.prevent="handleUpdate" class="space-y-5">
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
              @click="handleUpdate"
              class="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors font-medium text-sm"
            >
              수정하기
            </button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>
