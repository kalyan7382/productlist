import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

import Image from "next/image";


export default function Home(props) {
    return (
      <div>
        <h2>Welcome to our homepage.</h2>
        <p>This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.</p>
        <p>The weather: {props.forecast}</p>
        <div>
        <Grid.Container gap={2}>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Jeans</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
          <Image
                    src="/pages/images/shirt.png"
                    alt="TShirts"
                    height="100"
                    width="100"
                />
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Cancel
              </Button>
              <Button size="sm">Agree</Button>
            </Row>
          </Card.Footer>
        </Card> &nbsp;&nbsp;&nbsp;&nbsp;
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Tshirt</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
          <Image
                    src="/pages/images/shirt.png"
                    alt="Shirts"
                    height="100"
                    width="100"
                />
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Share
              </Button>
              <Button size="sm" color="secondary">
                Learn more
              </Button>
            </Row>
          </Card.Footer>
        </Card>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Shirt</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
          <Image
                    src="/pages/images/shirt.png"
                    alt="jeans"
                    height="100"
                    width="100"
                />
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Share
              </Button>
              <Button size="sm" color="secondary">
                Learn more
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container> 
        </div>
      </div>
    )
  }
  
  export async function getServerSideProps() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()
  
    return {
      props: {
        forecast: data.properties.periods[0].detailedForecast
      }
    }
  }