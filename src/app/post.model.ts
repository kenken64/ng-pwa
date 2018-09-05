export interface Post {
    _id: string,
    description: string,
    publishedAt: Date,
    title: string,
    url: string,
    source: Source,
    originalImageUrl: string
}

export interface Source {
    _id: string,
    name: string,
    url: string
}