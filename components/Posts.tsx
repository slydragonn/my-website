import { ExternalLink } from 'components'

interface Post {
  date: string
  title: string
  id: string | number
  url: string
}

interface PostItemProps {
  post: Post
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <li className="mb-9">
      <article className="flex">
        <span className="text-[#767676] mr-2">{post.date}</span>
        <p className="text-gray-300">- {post.title}</p>
      </article>
      <ExternalLink message="Read" url={post.url} />
    </li>
  )
}

interface PostsSectionProps {
  posts: Post[]
}

const PostsSection = ({ posts }: PostsSectionProps) => {
  return (
    <ul className="list-disc text-[#767676]" id='posts'>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  )
}

export default PostsSection
