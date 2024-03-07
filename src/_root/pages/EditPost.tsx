import PostForm from '@/components/forms/PostForm'
import { ACTION_POST } from '@/constants'
import { useGetPostById } from '@/lib/react-query/queries'
import { useParams } from 'react-router-dom'

const EditPost = () => {
  const {id} = useParams()
  const {data: post} = useGetPostById(id || '')
  
  
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.svg"
            width={36}
            height={36}
            alt="add"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Update Post</h2>
        </div>

        <PostForm action={ACTION_POST.UPDATE} post={post}/>
      </div>
    </div>
  )
}

export default EditPost