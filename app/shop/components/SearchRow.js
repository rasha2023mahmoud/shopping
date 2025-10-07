"use client";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function SearchRow(){
    return(
        <>
         <div className='search-container'>
            <InputGroup size="sm" className="mb-3" style={{ width: "400px"}}>
        <InputGroup.Text id="inputGroup-sizing-sm" style={{cursor: "pointer", backgroundColor:"#D19C97"}}>Search</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          aria-placeholder='Search by name'
          style={{ width: "50px"}}
        />
      </InputGroup>

            <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:"#D19C97"}}>
            Sort by
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Latest</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Popularity</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Best Rating</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
         </div>
        </>
    )
}