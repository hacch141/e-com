import { Facebook, GitHub, Instagram, LinkedIn, MailOutline, Phone, Room } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Hacch</Logo>
            <Desc>There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color="0077b5" >
                    <LinkedIn />
                </SocialIcon>
                <SocialIcon color="333">
                    <GitHub />
                </SocialIcon>
                <SocialIcon color="E4405f">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight:"10px"}} /> Surat, Gujarat</ContactItem>
            <ContactItem> <Phone style={{marginRight:"10px"}} /> +91 9033200766</ContactItem>
            <ContactItem> <MailOutline style={{marginRight:"10px"}} /> harsh.j.chaudhari141@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer