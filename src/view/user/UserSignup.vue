<script setup>
import { ref } from 'vue'
import api from '@/api/user'

// 폼 데이터 상태 관리
const form = ref({
  name: '',
  email: '',
  password: '',
})

// 회원가입 처리 로직
const handleSignup = async () => {
  await api.signup({
    name: form.value.name,
    email: form.value.email,
    password: form.value.password,
  })
}
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans text-gray-800"
  >
    <!-- 페이지 헤더 -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md mb-8">
      <h2 class="text-center text-3xl font-bold text-indigo-600">회원가입</h2>
      <p class="mt-2 text-center text-sm text-gray-500">
        서비스 이용을 위해 새 계정을 생성해 주세요.
      </p>
    </div>

    <!-- 회원가입 폼 영역 -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div
        class="bg-white py-8 px-4 shadow-sm border border-gray-200 rounded-xl sm:px-10 relative overflow-hidden"
      >
        <form class="space-y-6" @submit.prevent="handleRegister">
          <!-- 이름 입력 란 -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">이름</label>
            <input
              id="name"
              v-model="form.name"
              name="name"
              type="text"
              autocomplete="name"
              required
              placeholder="홍길동"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
            />
          </div>

          <!-- 이메일 입력 란 -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1"
              >이메일 주소</label
            >
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required
              placeholder="example@domain.com"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
            />
          </div>

          <!-- 비밀번호 입력 란 -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1"
              >비밀번호</label
            >
            <input
              id="password"
              v-model="form.password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
            />
          </div>

          <!-- 제출 버튼 -->
          <div class="pt-2">
            <button
              type="button"
              @click="handleSignup"
              class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              가입하기
            </button>
          </div>
        </form>

        <!-- 로그인 페이지 이동 링크 -->
        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500"> 이미 계정이 있으신가요? </span>
            </div>
          </div>

          <div class="mt-6 text-center">
            <!-- 실제 구현 시 router-link 또는 @click을 통한 라우팅 적용 -->
            <button
              class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors text-sm focus:outline-none"
            >
              로그인하러 가기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
