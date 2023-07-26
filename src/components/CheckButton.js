import Form from 'react-bootstrap/Form';

export const CheckButton = () => {
  
  return (
    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={"Sim"}
            label={"Sim"}
          />
          <Form.Check // prettier-ignore
            type={type}
            id={"Não"}
            label={"Não"}
          />
        </div>
      ))}
    </Form>
  );
}

