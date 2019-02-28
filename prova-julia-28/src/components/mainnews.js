import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const data = [
    {
        id: 1,
        title: 'Title one',
        image: 'https://picsum.photos/1200/500/?random',
        description: 'Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    }
]

class MainNews extends Component {

    render() {
        return (
            <Card>
                <CardImg  src={data[0].image} />
                <CardBody>
                    <CardTitle>{data[0].title}</CardTitle>
                    <CardText>{data[0].description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default MainNews;