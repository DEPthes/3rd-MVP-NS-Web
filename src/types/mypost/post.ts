export type TPost = {
  postId: number;
  title: string;
  date: string;
  postUserId: string;
  isTemporary: boolean;
  likes: number;
  postLikedUserId: string[];
  postLikedDate: string[];
};

export type TTopic = {
  topicId: number;
  topic: string;
  publishDate: string;
  topicLikes: number;
  topicLikedUserId: string[];
  topicLikedDate: string[];
  posts: TPost[];
};

export type SortType =
  | 'likedDate'
  | 'date'
  | 'likes'
  | 'topicLikes'
  | 'topicDate'
  | 'postCount';
