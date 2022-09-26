import { Button, Form } from "react-bootstrap";

type IProps = { onHandleLoad: (e: any) => void };
export function SearchForm(props: IProps) {
  const { onHandleLoad } = props;

  return (
    <Form onSubmit={onHandleLoad}>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>Miesto pavadinimas</Form.Label>
        <Form.Control type="text" placeholder="Įveskite pavadinimą" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
