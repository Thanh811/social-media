import { useGetUser } from '@/lib/react-query/queries'
import Loader from './Loader'
import { Models } from 'appwrite'
import UserCard from './UserCard'

const TopCreator = () => {
  const { data: topCreator, isFetching: isLoadingTopCreator } = useGetUser()
  return (
    <div className='home-creators-container'>
      <h3 className="h3-bold text-left w-full">Top Creators</h3>
      {isLoadingTopCreator ? <Loader /> : (
        <div className="home-creators-grid">
          {topCreator?.documents.map((creator: Models.Document) => <UserCard key={creator.$id} user={creator} />)}
        </div>
      )}
    </div>
  )
}

export default TopCreator