export interface Post{
  id: number;
  authorId: number;
  title: string;
  content: string;
  likes: number;
  views: number;
  commentIds: number[];
}
