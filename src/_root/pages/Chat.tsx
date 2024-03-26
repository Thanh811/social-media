import { Divider } from '@/components/shared'
import React from 'react'

const Chat = () => {
  return (
    <div className="flex flex-1">
      <div className="chat-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/chat.svg"
            width={36}
            height={36}
            alt="add"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">All Chats</h2>

        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-3'>
            <div className="flex gap-3 items-center w-[345px]">
              <img
                src={"/assets/icons/profile-placeholder.svg"}
                alt="profile"
                className="h-12 w-12 rounded-full"
              />
              <div className="flex flex-col">
                <p className="body-bold">Name </p>
                <p className="small-regular text-light-3">@Username</p>
              </div>
            </div>
            <Divider />

          </div>

          <div className="flex gap-3 items-center w-[345px]">
            <img
              src={"/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col">
              <p className="body-bold">Name </p>
              <p className="small-regular text-light-3">@Username</p>
            </div>

          </div>
        </div>



      </div>
      <div className='message-container'>
        <div className="flex gap-3 items-center">
          <img
            src={"/assets/icons/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">Name </p>
            <p className="small-regular text-light-3">@Username</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Chat