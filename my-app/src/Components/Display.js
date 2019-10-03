import React from "react";
import { Grid, Divider} from "semantic-ui-react";

function Display(props) {
  return (
    <div>
      <div class="ui hidden divider"></div>
      <h1>Scoreboard</h1>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <div className='strikes'>
      <Grid columns={2}>
      <Grid.Column>
      <h3>Strikes: {props.strikes}</h3>
      </Grid.Column>
      <Grid.Column>
      <h3>Balls: {props.balls}</h3>
      </Grid.Column>
      <div class="ui hidden divider"></div>
      </Grid>
      </div>

    </div>
  );
}

export default Display;