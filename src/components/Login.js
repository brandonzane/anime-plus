import styled from "styled-components"

const Login = (props) => {
    return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/anime-plus-logo.svg" alt="anime+-logo" />
                <SignUp>GET IT ALL HERE</SignUp>
                <Description>
                    <p>Get Premier access to Bleach for an additional fee with an
                        Anime+ subscription. As of 03/26/21, the price of Anime + 
                        and The Anime Bundle will increase by $1</p>
                </Description>
                <CTALogoTwo src="/images/anime-logo-2.png" alt="" />
            </CTA>
            <BgImage />
        </Content>
    </Container>
    )
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height:100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

var BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/anime-logo.png");
opacity: 0.4;
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`;

const CTA = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
`;

const CTALogoOne = styled.img`
margin-top: 50px;
margin-left: auto;
margin-right: auto;
margin-bottom: 12px;
max-width: 300px;
min-height: 1px;
display: block;
width: 100%;
`;

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
}
`;

const Description = styled.p`
color: hsl(0, 0%, 95.3%, 1);
font-size: 16px;
margin: 0 0 12px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
margin-left: auto;
margin-right: auto;
max-width: 600px;
display: inline-block;
vertical-align: bottom;
width: 30%;
`;

export default Login
