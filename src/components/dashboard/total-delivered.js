import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';

export const TotalDelivered = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL DElIVERED
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            24
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <MarkChatReadIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
