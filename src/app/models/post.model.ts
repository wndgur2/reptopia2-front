export interface Post{
  id: string;
  authorId: string;
  title: string;
  content: string;
  likes: number;
  views: number;
  commentIds: number[];
  date: string;
}
