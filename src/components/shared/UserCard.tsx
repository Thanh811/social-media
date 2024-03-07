import { Models } from 'appwrite'
import { Button } from '../ui/button'

type UserCardProps = {
  user: Models.Document
}
const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className='user-card'>
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="profile"
        className="h-12 w-12 rounded-full"
      />
        <p className="body-bold">{user.name}</p>
        <p className="small-regular text-light-3">@{user.username}</p>
      
      <Button className="shad-button_primary">Follow</Button>
    </div>
  )
}

export default UserCard