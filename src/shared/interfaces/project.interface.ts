export interface Project {
    id: number
    names: { farsi: string, eng: string }
    url: string
    image: string
    description: string | undefined,
    checkUrl: string,
    openSource: {
        supported: boolean,
        url?: string
    }
}