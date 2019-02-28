import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';



class SecondaryNews extends Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
      };

  render() {
    return (
      <div className="news">
        <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>News Secondarie</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Text</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default SecondaryNews;
