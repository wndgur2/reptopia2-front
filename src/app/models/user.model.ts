export interface User{
  id: number;
  identifier: string;
  password: string;

  level: number;
  achievements: string[];
  reppi: number;
  creatureIds: number[];
  itemIds: number[];

  postIds: number[];
  commentIds: number[];
  likedPostIds: number[];
  likedCommentIds: number[];
  viewedPostIds: number[];
}
