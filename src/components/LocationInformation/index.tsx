import { Grid, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { FC } from "react"
import { UserGithub } from "../../services/getUser"
import { LocationOn, Twitter, Business, Language } from '@mui/icons-material'
export interface ILocationInformationProps extends Pick<UserGithub, 'location' | 'twitter_username' | 'blog' | 'company'> {

}
export const LocationInformation: FC<ILocationInformationProps> = ({ location, twitter_username, blog, company }) => {
    return (
        <Grid container spacing={2} marginTop={3}>
            <Grid item xs={6}>
                <Stack direction={'row'} spacing={2}>
                    <LocationOn />
                    <Typography>{location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction={'row'} spacing={2}>
                    <Twitter />
                    <Typography>{twitter_username ? `@${twitter_username}` : 'Not Available'}</Typography>
                </Stack>
            </Grid  >
            <Grid item xs={6}>
                <Stack direction={'row'} spacing={2}>
                    <Language />
                    <Typography>{blog ? <a target={'_blank'} href={blog}>{blog}</a> : 'Not Available'} </Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction={'row'} spacing={2}>
                    <Business />
                    <Typography>{company ? company : 'Not Available'}</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}
