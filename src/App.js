import './App.css'
import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Navbar, NavDropdown, Nav, Image, Form, Button } from 'react-bootstrap';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">هایپر مارکت امیر</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">صفحه اصلی</Nav.Link>
            <Nav.Link href="#pricing">گالری</Nav.Link>
            <NavDropdown title="درباره ما" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">اخبار</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                پشتیبانی
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ارتباط با ما</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                خبرنامه
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">فروشگاه</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              ثبت نام / ورود
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ادرس ایمیل</Form.Label>
        <Form.Control type="email" placeholder="ایمیل خود را وارد نمایید" />
        <Form.Text className="text-muted">
          به هیچ عنوان ایمیل شما را منتشر نخواهیم کرد
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='d-block'>جنسیت خود را انتخاب کنید</Form.Label>
        <Form.Select>
          <option>مرد</option>
          <option>زن</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>رمز عبور</Form.Label>
        <Form.Control type="password" placeholder="رمز عبور" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="من را به یاد داشته باش" />
      </Form.Group>
      <Button variant="primary" type="submit">
        ثبت نام
      </Button>
    </Form>
  );
}


export default class App extends Component {

  render() {
    return (
      <Container>

        <Row className='mt-2'>
          <CollapsibleExample />
        </Row>

        <Row>
          <Col className='my-3' xd={12} md={6}>
            <Image className='w-100' rounded fluid src='images.jpg' />
          </Col>
          <Col className='my-5' xd={12} md={6}>
            <BasicExample />
          </Col>
        </Row>

      </Container>
    )
  }
}



