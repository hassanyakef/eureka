import React, {Fragment} from 'react';
import IdeasPageBodyIdea from './IdeasPageBodyIdea';

const IdeasPageBody = ({ideas}) => {

  return (
    <Fragment>
      {ideas.length > 0 ? (
        ideas.map(idea => (
           <IdeasPageBodyIdea idea={idea}/>
            ))
        ) : (
        <h4>No ideas posted yet...</h4>
        )}
    </Fragment>
  );
};

export default IdeasPageBody;