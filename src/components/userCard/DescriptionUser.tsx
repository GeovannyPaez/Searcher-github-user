import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { FC } from 'react'
import { UserGithub } from '../../services/getUser'
import { LocationInformation , ILocationInformationProps} from '../LocationInformation'
import { IPaperInfoProps, PaperInfo } from '../PaperInfo'

export interface IDescriptionUserProps extends Pick<UserGithub, "bio"| "public_repos" | "followers" | "following"| "company" | "blog" | "location" | "twitter_username"> {

}

export const DescriptionUser: FC<IDescriptionUserProps> = ({ bio,public_repos,followers,following, location,twitter_username,blog,company }) => {



    const PropsPaperInfo: IPaperInfoProps= {
        public_repos,
        followers,
        following
    }
    const PropsLocationInformation:ILocationInformationProps = {
        location,
        twitter_username,
        blog,
        company
    }
    return (
        <>
            <Stack justifyContent={'center'} >
                {bio
                    ? <Typography variant='body1'>{bio}</Typography>
                    : <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia cum excepturi cumque laboriosam quod recusandae eligendi autem?!</Typography>
                }
            </Stack>
            <PaperInfo {...PropsPaperInfo}/>
            <LocationInformation {...PropsLocationInformation}/>
        </>
    )
}
