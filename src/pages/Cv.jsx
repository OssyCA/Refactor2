import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import MyCv from "../assets/myData.json";

const Cv = () => {
  return (
    <CardGroup>
      {MyCv.arbetsplats.map((arbetsplats, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{arbetsplats.namn || "Arbetsplats"}</Card.Title>
            <Card.Text>{arbetsplats.adress || "Adress saknas"}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};

export default Cv;
