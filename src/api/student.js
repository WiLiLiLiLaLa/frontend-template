import request from '@/utils/request'

export function getById(id) {
  return request({
    url: `/student/${id}`,
    method: 'get'
  })
}

export function getAll() {
  return request({
    url: '/student/all',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/student',
    method: 'post',
    data
  })
}
