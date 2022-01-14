import React from 'react';
import Card from 'react-bootstrap/Card';

class Carta extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                <Card.Title>Card Title</Card.Title><Card.Title>Card Title</Card.Title>
                    <Card.Img variant="top" src="https://digitalninja.net.au/wp-content/uploads/2017/07/redninja.png" />
                    <Card.Body>
                        
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </>
        )
    }

}

export default Carta;