import { useGetCurrentUser } from '@/lib/react-query/queries';
import Loader from '@/components/shared/Loader';
import { Models } from 'appwrite';
import GridPostList from '@/components/shared/GridPostList';

const Saved = () => {
  const { data: currentUser } = useGetCurrentUser()

  const postList = currentUser && currentUser.posts ? currentUser.posts.reduce((accumulator: any, currentValue: Models.Document) => ({ ...accumulator, [currentValue.$id]: true }), {}) : null

  const savePosts = currentUser?.save
    .map((savePost: Models.Document) => ({
      ...savePost.post,
      creator: {
        imageUrl: currentUser.imageUrl,
      },
      isEdit: postList && postList[savePost.post.$id]
    }))
    .reverse();

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  return (
    <div className='saved-container'>
      <div className="max-w-5xl flex-start gap-3 justify-start w-full">
        <img
          src="/assets/icons/people.svg"
          width={36}
          height={36}
          alt="Group"
          className="shadow-neutral-50"
        />
        <h2 className="h3-bold md:h2-bold w-full">Saved Post</h2>
      </div>
      <div className="flex-between w-full max-w-5xl mt-16 mb-7 gap-9">
        {savePosts.length === 0 ? (
          <p className="text-light-4 mt-10 text-center w-full">No available posts</p>
        ) : (
          <GridPostList posts={savePosts} />
        )}


      </div>

    </div>
  )
}

export default Saved