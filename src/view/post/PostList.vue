<script setup>
import { onMounted, ref } from 'vue'
import api from '@/api/post'
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = ref([])

const handleCreate = () => {
  router.push({ name: 'post-create' })
}

const handleRead = async (id) => {
  router.push({
    name: 'post-read',
    params: { postId: id },
  })
}

onMounted(async () => {
  const res = await api.list()
  posts.value = res.data.list
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans py-8">
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- 페이지 헤더 및 작성 버튼 영역 -->
      <header class="mb-8 border-b border-gray-200 pb-4 flex justify-between items-end">
        <div>
          <h1 class="text-3xl font-bold text-indigo-600">자유 게시판</h1>
          <p class="text-sm text-gray-500 mt-2">단일 페이지 구조로 구성된 게시글 목록</p>
        </div>
        <!-- 기능이 연결되지 않은 시각적 버튼 -->
        <button
          @click="handleCreate"
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm transition-colors text-sm font-medium flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path
              d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
            />
          </svg>
          게시글 작성
        </button>
      </header>

      <!-- 게시글 목록 영역 -->
      <main
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative min-h-[400px]"
      >
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr
                class="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider"
              >
                <th class="p-4 font-semibold text-center w-16 md:w-24">번호</th>
                <th class="p-4 font-semibold">제목</th>
              </tr>
            </thead>
            <tbody>
              <!-- 게시글이 없을 경우의 예외 처리 -->
              <tr v-if="posts.length === 0">
                <td colspan="2" class="p-12 text-center text-gray-500">
                  <div class="flex flex-col items-center justify-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-10 h-10 text-gray-300"
                    >
                      <path
                        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                      />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <p>등록된 게시글이 없습니다.</p>
                  </div>
                </td>
              </tr>

              <!-- 게시글 목록 렌더링 -->
              <tr
                v-for="post in posts"
                :key="post.id"
                @click="handleRead(post.id)"
                class="border-b border-gray-100 hover:bg-indigo-50 transition-colors cursor-pointer group"
              >
                <td class="p-4 text-center text-gray-500">{{ post.id }}</td>
                <td
                  class="p-4 font-medium text-gray-800 group-hover:text-indigo-600 transition-colors"
                >
                  {{ post.title }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>
