
export interface UserGithub {
    message?:string,
    "login": string,
    "id": number,
    "node_id": string,
    "avatar_url": string,
    "gravatar_id": string,
    "url": string,
    "html_url": string,
    "followers_url": string,
    "following_url": string,
    "gists_url": string,
    "starred_url": string,
    "subscriptions_url": string,
    "organizations_url": string,
    "repos_url": string,
    "events_url": string,
    "received_events_url": string,
    "type": string,
    "site_admin": boolean,
    "name": string,
    "company": string,
    "blog": string,
    "location": string,
    "email": string,
    "hireable": string,
    "bio": string,
    "twitter_username": string,
    "public_repos": number,
    "public_gists": number,
    "followers": number,
    "following": number,
    "created_at": Date,
    "updated_at": Date
}

interface INotFound {
    message: string,
    documentation_url:string
}

export const getUserGitHub = async (userName: string = 'octocat'): Promise<UserGithub | undefined> => {
    try {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        return data;

    } catch (error) {
        console.log('error', error)

    }

}