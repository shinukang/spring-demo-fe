<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api/user'

const router = useRouter()

const form = ref({
  email: '',
  password: '',
})

const handleLogin = async () => {
  await api.login({
    email: form.value.email,
    password: form.value.password,
  })
  router.push({ name: 'post-list' })
}
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans text-gray-800"
  >
    <!-- 페이지 헤더 -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md mb-8">
      <h2 class="text-center text-3xl font-bold text-indigo-600">로그인</h2>
      <p class="mt-2 text-center text-sm text-gray-500">
        계정에 로그인하여 서비스를 이용해 주세요.
      </p>
    </div>

    <!-- 로그인 폼 영역 -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div
        class="bg-white py-8 px-4 shadow-sm border border-gray-200 rounded-xl sm:px-10 relative overflow-hidden"
      >
        <form class="space-y-6" @submit.prevent="handleLogin">
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
              autocomplete="current-password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
            />
          </div>

          <!-- 부가 기능 (비밀번호 찾기 등) -->
          <div class="flex items-center justify-between mt-2">
            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </div>

          <!-- 제출 버튼 -->
          <div class="pt-2">
            <button
              type="submit"
              class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              로그인
            </button>
          </div>
        </form>

        <!-- 회원가입 페이지 이동 링크 -->
        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500"> 아직 계정이 없으신가요? </span>
            </div>
          </div>

          <div class="mt-6 text-center">
            <RouterLink
              :to="{ name: 'user-signup' }"
              class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors text-sm focus:outline-none"
            >
              회원가입하러 가기
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
