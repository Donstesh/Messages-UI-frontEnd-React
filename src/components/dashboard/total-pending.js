import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import PendingIcon from '@mui/icons-material/Pending';

export const TotatPending = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
            TOTAL PENDING
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            5
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <PendingIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
