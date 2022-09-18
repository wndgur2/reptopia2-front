export interface User{
  id: string;
  email: string;
  password: string;

  level: number;
  achievements: string[];
  reppi: number;
  creatureIds: string[];
  itemIds: string[];

  postIds: string[];
  commentIds: string[];
  likedPostIds: string[];
  likedCommentIds: string[];
  viewedPostIds: string[];
}
