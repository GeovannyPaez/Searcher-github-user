import { CardMedia, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React, { FC } from 'react'
import { UserGithub } from '../../services/getUser'
import { DescriptionUser, IDescriptionUserProps } from './DescriptionUser';
import { InfoUser } from './InfoUser';
import { UserCardSkeleton } from './UserCardSkeleton';
interface PropsUserCard {
  user?: UserGithub
}
export const UserCard: FC<PropsUserCard> = ({ user }) => {
  if (!user) {
    return <UserCardSkeleton />
  }
  const { avatar_url, bio,
    public_repos,
    followers,
    following,
    company,
    blog,
    location,
    twitter_username,
    created_at,
    login,
    name } = user;

  const PropsDescriptionUser: IDescriptionUserProps = {
    bio,
    public_repos,
    followers,
    following,
    company,
    blog,
    location,
    twitter_username
  }
  return (
    <Grid marginTop={3} justifyContent={'center'} container={true} >

      <Grid item xs={3}>
        <CardMedia
          sx={{ borderRadius: '50%', marginLeft: '5px' }}
          alt='Image Github User'
          component={'img'}
          image={avatar_url} />
      </Grid>

      <Grid xs={9} >
        <Stack marginLeft={2} direction={'column'} spacing={1}>
          <InfoUser
            name={name}
            created_at={created_at}
            login={login} />
          <DescriptionUser {...PropsDescriptionUser} />

        </Stack>
      </Grid>
    </Grid>
  )
}
