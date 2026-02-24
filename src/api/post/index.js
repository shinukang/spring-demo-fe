import api from '@/plugins/axiosinterceptor'

// 게시글 작성 api
const create = async (req) => {
  return await api.post('/post/create', req)
}

// 게시글 목록 조회 api
const list = async () => {
  return await api.get('/post/list')
}

export default { create, list }
