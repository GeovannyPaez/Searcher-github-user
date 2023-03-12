import { useState, useEffect } from 'react'
import { getUserGitHub, UserGithub } from '../services/getUser';


export const useUserGithub = () => {
    const [valueSearch, setValueSearch] = useState<string>('octocat');
    const [userData, setUserData] = useState<UserGithub>();
    useEffect(() => {
        getUserGitHub(valueSearch)
            .then(user => {
                if (valueSearch === 'octocat') {
                    window.localStorage.setItem('octocat', JSON.stringify(user));
                }
                if(user?.message === 'Not Found'){
                    // console.log(user.message)
                    const userOctocat = JSON.parse(localStorage.getItem('octocat')as string);
                    setUserData(userOctocat);
                    return;
                }
                setUserData(user);
            });
    }, [valueSearch]);


    return (
        { userData, setValueSearch }
    )
}
