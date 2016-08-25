import React, { Component } from 'react'
import MenuBar from './MenuBar'

export default class About extends Component {
  render() {
    let styles = {
      about: {
        position: 'absolute',
        marginLeft: '2em',
      },
      div: {
        position: 'absolute',
        marginLeft: '4em',
        marginTop: '5em',
        fontWeight: 'bold',
        backgroundColor: 'white',
        // opacity: '.60',
      },
      bg: {
        backgroundColor: 'red',
        height: '100%',
        width: '100%'
      }
    }

    return (
      <div style={styles.bg}>
        <MenuBar/>
        <center>
          <h1 style={styles.about}>About PiZa!</h1>
          <div style={styles.div}>
            <p>What was once supposed to be a food taxi (the food already in the car ready to eat) has changed 180 degrees and we don't mean temperature.  </p>
            <p>Human beings need healthier food. The more pizza we get the more fat and sick we get. God I love pizza!!!! <a href="https://www.youtube.com/watch?v=iCvmsMzlF7o&amp;feature=youtu.be&amp;t=15m34s">https://www.youtube.com/watch?v=iCvmsMzlF7o&amp;feature=youtu.be&amp;t=15m34s</a></p>
            <p>PiZa has pivoted into a database of foods. We are going to work with commercial kitchens finding the downtime (probably Sunday Mornings in most cases) for commercial kitchens. Then groups of people will come together and select their food choices from a database. I.E. if you hate Beets put them on your red list. If you love oysters, put them on your green list. Need to eat more Kale but absolutely don't love it? Guess what color you assign to it? Yellow buddy!</p>
            <p>You'll then be able to formulate recipes and shopping lists from them. You can do this on your own too for free. We won't pressure you to join any groups.</p>
            <p>If you do want to join a group, you'll get buying power galore. You'll also get to cook together as a community. When you buy 20 chickens at Costco this time they won't lay in your freezer forever. Want to order a gaylord of corn from that farm your family owns in Iowa? Now you can.</p>
            <p>We get together once week and prepare food together for the entire week. That's the plan more to come. </p>
          </div>
          <img src={'https://img.grouponcdn.com/deal/eLgUrAUAHV7cyQPhNBbE/jZ-1280x768/v1/c700x420.jpg'}/>
        </center>
      </div>
    )
  }
}
