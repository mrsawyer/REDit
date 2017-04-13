import React from 'react';
import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';

import {data} from '../../mock-data.js';


const Post = ({post, updateVote}) => {
  return (
      <Card style={{width: '98%', margin: '15px auto' }} key={post.id}>
        <CardTitle 
          style={{padding:'8px 15px'}}
          titleColor='#551A8B' 
          titleStyle={{fontSize: '1.25rem', fontWeight:'bold', padding:'0px'}} 
          title={post.title} />
        <CardText style={{fontSize:'1rem', padding:'8px 15px'}}>
          {post.description}
        </CardText>
        <CardActions>
          <FlatButton 
            label={'Vote ' + post.votes}
            labelPosition="after"
            icon={<NavigationArrowDropUp />}
          />
        </CardActions>
        {post.categories.map((cats) => (
          <Chip
            style={{}}
          >
            {cats}
          </Chip>
        ))}
      </Card>
  );
};

export default Post;