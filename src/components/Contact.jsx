import React, { useRef, useState } from 'react'
import { styled } from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;              //important! for left/right
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

const Title = styled.h1`
  font-weight: 200;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  `
  
  const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
}
`


const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k2nnf0e', 'template_k4ezwyb', form.current, 'QEmJXApzcSZ86edg8')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
          }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea rows={10} placeholder='Write your message' name="message"/>
            <Button type="submit">Send</Button>
            {success && 
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>    
      </Container>
    </Section>
  )
}

export default Contact
