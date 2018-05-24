import React, { Component } from 'react';
import { Container, 
    Header,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body 
} from 'native-base';
import { inject } from 'mobx-react';

@inject("stores")
export default class Recommendation extends Component {
    constructor(props) {
        super(props)
      }
    render() {
        const {stores} = this.props
    return (
        
          <List>
            <ListItem>
              <Thumbnail  size={8} source={stores.config.Spire} />
              <Body>
                <Text>Spire</Text>
                <Text note>The Spire of Dublin, alternatively titled the Monument of Light, is a large, 
                    stainless steel, pin-like monument in height, located on the site of the former Nelson's
                    Pillar on O'Connell Street in Dublin, Ireland.</Text>
              </Body>
            </ListItem>
            <ListItem>
            <Thumbnail size={280} source={stores.config.Temple} />
              <Body>
                <Text>Temple Bar</Text>
                <Text note>Dublin's cultural quarter and has a lively nightlife that is popular 
                    with tourists. Popular venues include The Palace Bar, The Temple Bar Pub, 
                    Oliver St. John Gogarty's and The Auld Dubliner.</Text>
              </Body>
            </ListItem>
            <ListItem>
            <Thumbnail  size={280} source={stores.config.HalfPenny} />
              <Body>
                <Text>Ha'Penny Bridge</Text>
                <Text note>The Ha'penny Bridge, known later for a time as the Penny Ha'penny
                    Bridge, and officially the Liffey Bridge, is a pedestrian bridge built in May
                    1816 over the River Liffey in Dublin, Ireland. Made of cast iron, the bridge
                    was cast in Shropshire, England.</Text>
              </Body>
            </ListItem>
            <ListItem>
            <Thumbnail  size={280} source={stores.config.Library} />
              <Body>
                <Text>Trinity College</Text>
                <Text note>Holy and Undivided Trinity of Queen Elizabeth near Dublin, 
                    is the sole constituent college of the University of Dublin, a research
                    university located in Dublin, Ireland. The college was founded in 1592
                    by Queen Elizabeth I as the "mother" of a new university, modelled after
                    the collegiate universities of Oxford and Cambridge</Text>
              </Body>
            </ListItem>
            <ListItem>
            <Thumbnail  size={280} source={stores.config.DubCastle} />
              <Body>
                <Text>Dublin Castle</Text>
                <Text note>Dublin Castle off Dame Street, Dublin, Ireland, was until 1922 the 
                    seat of the United Kingdom government's administration in Ireland, and is now 
                    a major Irish government complex. Most of it dates from the 18th century, though 
                    a castle has stood on the site since the days of King John, the first Lord of Ireland.</Text>
              </Body>
            </ListItem>
          </List>
       
    );
  }
}