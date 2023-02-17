import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

export const Messages = (props) => (
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
            SENT MESSAGES
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            20
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <CommentIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
