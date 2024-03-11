import { useGetCurrentUser } from '@/lib/react-query/queries';
import Loader from '@/components/shared/Loader';
import GridPostList from '@/components/shared/GridPostList';
import { Models } from 'appwrite';
import GridPostSavedList from '@/components/shared/GridSavedPostList';

const Saved = () => {
  const { data: currentUser } = useGetCurrentUser()
  

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  const shouldShowPosts = currentUser.save.length === 0;

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
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        {shouldShowPosts ? (
          <p className="text-light-4 mt-10 text-center w-full">End of posts</p>
        ) : (
<GridPostSavedList savedPost={currentUser.save} />
          // currentUser.save.map((item: Models.Document, index: number) => {
          //   console.log(currentUser);
            
          //   return (
          //     <div>{typeof(item.post)}</div>
          //   <GridPostList key={`page-${index}`} posts={item.post ?? []} />
          // )})
        )}


      </div>

    </div>
  )
}

export default Saved