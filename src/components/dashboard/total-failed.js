import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';

export const TotalFailed = (props) => (
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
            TOTAL FAILED
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            2
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <SmsFailedIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
