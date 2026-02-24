import api from '@/plugins/axiosinterceptor'

// 게시글 작성 api
const create = async (req) => {
  return await api.post('/post/create', req)
}

// 게시글 목록 조회 api
const list = async () => {
  return await api.get('/post/list')
}

// 게시글 상세 조회 api
const read = async (id) => {
  return await api.get('/post/read/' + id)
}

// 게시글 삭제 api
const remove = async (id) => {
  return await api.get('/post/delete/' + id)
}

// 게시글 수정 api
const update = async (req) => {
  return await api.post('/post/update', req)
}

export default { create, list, read, remove, update }
