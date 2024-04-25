export interface BlogPostData {
    title : string, 
    subtitle : string, 
    slug : string,
    category: string,
    date: string
}

export interface PageParams { 
    params: { 
        slug: string 
    } 
}