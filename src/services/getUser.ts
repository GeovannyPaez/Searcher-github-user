export const  getUserGitHub= async(userName:string='octocat')=>{

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    return data;

}