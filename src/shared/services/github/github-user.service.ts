import axios, {AxiosInstance} from 'axios'
import {GithubProfile} from "../../interfaces/github.interface";

export class GithubUserService {
    private userAxios: AxiosInstance;

    constructor(private username: string) {
        this.userAxios = axios.create({
            baseURL: `https://api.github.com/users/${this.username}`
        })
    }

    async getProfile(): Promise<GithubProfile> {
        try {
            const result = await this.userAxios.get('/');
            return result.data as GithubProfile
        } catch (e) {
            throw e
        }
    }

    async getRepos() {
        try {
            const result = await this.userAxios.get('/repos')
            return result.data
        } catch (e) {
            throw e
        }
    }
}