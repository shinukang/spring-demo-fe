<script setup>
import { onMounted, ref } from 'vue'
import api from '@/api/post'
import { useRoute } from 'vue-router'

const route = useRoute()

// 페이지가 단독으로 렌더링될 수 있도록 내부 임시 데이터 선언
// 이전 요청에 따라 작성자 및 작성일 관련 속성은 제외함
const post = ref({})

onMounted(async () => {
  const postId = route.params.postId
  console.log(postId)
  try {
    const res = await api.read(postId)
    post.value = res.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans py-8">
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- 페이지 헤더 -->
      <header class="mb-8 border-b border-gray-200 pb-4 flex justify-between items-end">
        <div>
          <h1 class="text-3xl font-bold text-indigo-600">자유 게시판</h1>
          <p class="text-sm text-gray-500 mt-2">단일 페이지 구조로 구성된 게시글 상세 조회</p>
        </div>
      </header>

      <!-- 게시글 상세 영역 -->
      <main
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative p-6 md:p-8"
      >
        <div v-if="post">
          <!-- 게시글 제목 영역 (작성자, 작성일 제외) -->
          <div class="mb-6 pb-6 border-b border-gray-100">
            <h2 class="text-2xl font-bold text-gray-900">{{ post.title }}</h2>
          </div>

          <!-- 게시글 내용 영역 -->
          <div class="min-h-[200px] whitespace-pre-wrap text-gray-700 leading-relaxed">
            {{ post.contents }}
          </div>

          <!-- 하단 버튼 영역 (기능 연결 제외, 시각적 요소만 배치) -->
          <div class="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
            <button
              class="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              목록으로
            </button>
            <div class="flex gap-2">
              <button
                class="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-colors font-medium text-sm"
              >
                수정
              </button>
              <button
                class="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors font-medium text-sm"
              >
                삭제
              </button>
            </div>
          </div>
        </div>

        <!-- 게시글 데이터가 없을 경우의 예외 처리 -->
        <div v-else class="text-center py-12 text-gray-500">게시글을 불러올 수 없습니다.</div>
      </main>
    </div>
  </div>
</template>
