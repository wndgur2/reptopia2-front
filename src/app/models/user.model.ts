export interface User{
  id: string;
  name: string;
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
  dislikedPostIds: string[];
  likedCommentIds: string[];
  viewedPostIds: string[];
}
export const userA:User = {
  id: "...",
  name: "...",
  email: "...",
  password: "...",

  level: 0,
  achievements: [],
  reppi: 0,
  creatureIds: [],
  itemIds: [],

  postIds: [],
  commentIds: [],
  likedPostIds: [],
  dislikedPostIds: [],
  likedCommentIds: [],
  viewedPostIds: []
}
