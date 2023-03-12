import { Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import  { FC } from 'react'
import { UserGithub } from '../../services/getUser'
export interface IPaperInfoProps extends Pick<UserGithub, "public_repos" | "followers" | "following"> {

}
export const PaperInfo: FC<IPaperInfoProps> = ({ public_repos, followers, following }) => {

    const userInformation = [
        { title: 'Repos', value: public_repos },
        { title: 'Followers', value: followers },
        { title: 'Following', value: following },
    ]
    return (
        <Paper>
            <Stack direction={'row'} justifyContent={'space-evenly'} marginTop={2} spacing={1}>
                {userInformation.map(({ title, value }) => (
                    <Stack spacing={1} textAlign="center">
                        <Typography variant="h5">{title}</Typography>
                        <Typography  variant="h6">{value}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Paper>
    )
}
