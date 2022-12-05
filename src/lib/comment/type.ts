export interface CommentData {
  id: number
  type: 'main' | 'replay'
  from_avatar: string
  from_auth: string
  to_auth: string
  content: string
  like_num: number
  dislike_num: number
  reply?: CommentData[]
  createdAt: string
  updatedAt: string
}
