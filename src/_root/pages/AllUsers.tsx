import Loader from '@/components/shared/Loader'
import UserCard from '@/components/shared/UserCard'
import { useGetUser } from '@/lib/react-query/queries'
import { Models } from 'appwrite'
import React from 'react'

const AllUsers = () => {
  const { data: allUser, isFetching: isLoadingUser } = useGetUser()

  return (
    <div className='user-container'>
      <div className="max-w-5xl flex-start gap-3 justify-start w-full">
      <img
        src="/assets/icons/people.svg"
        width={36}
        height={36}
        alt="Group"
        className="shadow-neutral-50"
      />
      <h2 className="h3-bold md:h2-bold w-full">All User</h2>
      </div>
      {isLoadingUser ? <Loader /> : (
        <div className="user-grid ">
          {allUser?.documents.map((user: Models.Document) => <UserCard key={user.$id} user={user} />)}
        </div>
      )}
    </div>
  )
}

export default AllUsers