import Form from 'react-bootstrap/Form';
export default function Payment(){
    return(
        <>
                         <div className="payment">
        <Form>
        <Form.Group className="mb-3" style={{ fontWeight:"bold"}}>
          <Form.Check
            required
            label="Paypal"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
         </Form.Group>
         <Form.Group className="mb-3" style={{ fontWeight:"bold"}}>
          <Form.Check
            required
            label="Direct check"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
         <Form.Group className="mb-3" style={{ fontWeight:"bold"}}>
          <Form.Check
            required
            label="Bank transfer"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        </Form>
        </div>
        </>
    )
}