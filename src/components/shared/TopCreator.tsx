import { useGetTopCreator } from '@/lib/react-query/queries'
import React from 'react'
import Loader from './Loader'
import { Models } from 'appwrite'
import CreatorCard from './CreatorCard'

const TopCreator = () => {
  const { data: topCreator, isFetching: isLoadingTopCreator } = useGetTopCreator()
  return (
    <div className='home-creators'>
      <h3 className="h3-bold text-left w-full">Top Creators</h3>
      {isLoadingTopCreator ? <Loader /> : (
        <div className="flex flex-wrap flex-1 gap-8 w-full ">
          {topCreator?.documents.map((creator: Models.Document) => (
            <>
            <CreatorCard key={creator.$id} creator={creator} />
            <CreatorCard key={creator.$id} creator={creator} />
            <CreatorCard key={creator.$id} creator={creator} />
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default TopCreator