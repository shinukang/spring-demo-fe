import api from '@/plugins/axiosinterceptor'

// 회원가입 api
const signup = async (req) => {
  return await api.post('/user/signup', req)
}

// 로그인 api
const login = async (req) => {
  return await api.post('/user/login', req)
}

export default { signup, login }
