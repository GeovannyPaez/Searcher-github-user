import { Grid, Skeleton } from '@mui/material'

export const UserCardSkeleton = () => {
  return (
    <Grid container >
        <Grid item xs={3}> 
            <Skeleton variant={'circular'} width={120} height={120}/>
        </Grid>
        <Grid item xs={9}>

        </Grid>
    </Grid>
  )
}
