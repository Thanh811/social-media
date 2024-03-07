import { Models } from 'appwrite'
import { Button } from '../ui/button'
import { Divide } from 'lucide-react'

type CreatorCardProps = {
  creator: Models.Document
}
const CreatorCard = ({ creator }: CreatorCardProps) => {
  return (
    <div className='user-card'>
      <img
        src={creator.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="profile"
        className="h-12 w-12 rounded-full"
      />
        <p className="body-bold">{creator.name}</p>
        <p className="small-regular text-light-3">@{creator.username}</p>
      
      <Button className="shad-button_primary">Follow</Button>
    </div>
  )
}

export default CreatorCard