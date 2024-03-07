import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import TopCreator from "@/components/shared/TopCreator";
import { useGetRecentPosts } from "@/lib/react-query/queries";
import { Models } from "appwrite";
import React from "react";

const Home = () => {
  const { data: posts, isPending: isPostLoading,
  } = useGetRecentPosts()
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
            
          )}
        </div>
      </div>
      <TopCreator />
    </div>
  );
};

export default Home;
