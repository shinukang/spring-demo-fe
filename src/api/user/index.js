import api from '@/plugins/axiosinterceptor'
// 회원가입 api
const signup = async (req) => {
  return await api.post('/user/signup', req)
}

export default { signup }
