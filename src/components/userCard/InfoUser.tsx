import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import  { FC } from 'react'
import { UserGithub } from '../../services/getUser'
interface IPropsInfoUser extends Pick<UserGithub, "name" | "created_at" | "login"> {

}
export const InfoUser: FC<IPropsInfoUser> = ({ name, created_at, login }) => {
    return (
        < >
            <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
                <Typography variant={'h4'}>{name}</Typography>
                <Typography variant={'subtitle2'}>{`${created_at}`}</Typography>
            </Stack>
            <Typography variant={'caption'}>{'@'+login}</Typography>
        </>
    )
}
