'use client'
import Form from 'react-bootstrap/Form';
export default function OrderTotal(){
    return(
        <>
        <div className="orderTotsal-container">
        <h2>Order Total</h2>
        <div className="side-info">
            <h4>Products</h4>
            <div className="stylish">
                <p>Colorful stylish shirt1</p>
                <span>150$</span>
            </div>
            <div className="stylish">
                <p>Colorful stylish shirt2</p>
                <span>150$</span>
            </div>
            <div className="stylish">
                <p>Colorful stylish shirt3</p>
                <span>150$</span>
            </div>
        </div>
        <div className="sub-info">
            <div className="stylish">
                <p>Subtotal</p>
                <span>150$</span>
            </div>
            <div className="stylish">
                <p>Shipping</p>
                <span>10$</span>
            </div>
        </div>
        <h2>Total</h2>
        </div>
        <div className="payment">
        <Form>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Paypal"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
         </Form.Group>
         <Form.Group className="mb-3">
          <Form.Check
            required
            label="Direct check"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
         <Form.Group className="mb-3">
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