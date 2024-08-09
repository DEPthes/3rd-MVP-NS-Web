
export type TTopic = {
	id: string;
	title: string;
	publishDate: string;
	likes: number;
	posts: TPost[];
	text: string;
};

export type TPost = {
	id: string;
	title: string;
	text: string;
	author: string;
	date: string;
	likes: number;
};

export type TTopicData = {
	topic: string;
	title: string;
};

export type TLikeState = { [key: string]: boolean };
export type TLikeDates = { [key: string]: Date };

