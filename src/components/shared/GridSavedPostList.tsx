import { Models } from 'appwrite';
import { Link } from 'react-router-dom';

type GridSavedPostListProps = {
  savedPost: Models.Document[];
};

const GridPostSavedList = ({savedPost}: GridSavedPostListProps) => {
  return (
    <ul className="grid-container">
      {savedPost.map((savedPost) => (
        <li key={savedPost.$id} className="relative min-w-80 h-80">
          <Link to={`/posts/${savedPost.$id}`} className="grid-post_link">
            <img
              src={savedPost.post.imageUrl}
              alt="post"
              className="h-full w-full object-cover"
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default GridPostSavedList