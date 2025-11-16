import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Payment(){
    return(
        <>
         <div className="payment" style={{border:"2px solid #EDF1FF"}}>
            <h2>Payment</h2>
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
        <Button style={{backgroundColor:"#D19C97", width:"100%", outLine:"none", fontSize:"20px", fontWeight:"bold", border:"none"}}>Place Order</Button>
        </Form>
        
        </div>
        </>
    )
}