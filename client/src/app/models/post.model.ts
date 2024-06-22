export interface Post {
    id: string;
    authorId: string;
    title: string;
    content: string;
    likes: number;
    views: number;
    commentIds: number[];
    createdAt: string;
    authorName: string;
}

export const postA = {
    id: "",
    authorId: "",
    authorName: "",
    title: "",
    content: "",
    likes: 0,
    views: 0,
    commentIds: [],
    createdAt: "",
};
