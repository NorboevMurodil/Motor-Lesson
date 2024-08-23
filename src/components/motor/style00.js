import styled from "styled-components";

// ustatetrmenu
export const RightMenu = styled.div`
display: grid;
grid-template-areas: " a a a a ";
align-items: center;
justify-content: center;
gap: 30px 30px;
padding: 20px 0px;
width: 100%;
`;
export const CarWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 223px;
height: 307px;
padding: 5px 10px;
border-radius: 20px;
box-shadow:
      0 0 0 2px white,
      0em 0em 0.5em rgba(123, 111, 111, 0.6);



.Menus-and {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 130px;
    width: 100%;
} .Brand {
    display: flex;
    width: 100%;
    justify-content: space-between;
} .Menus-and h4 {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
} .Menus-and h5 {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
} .Menus-and h2 {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    color: #006DAB;
}
.img0 {
    width: 202.42px;
    height: 137.433px;
} .bottom h3 {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 5px;
} .h5 {
    display: flex;
    justify-content: space-between;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 18px;
} .bottom h4 {
    display: flex;
    gap: 3px;
} .bottom h2 {
    color: var(--blue, #006DAB);
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 700;
    padding-bottom: 13px;
} .Button0 {
    display: flex;
    gap: 15px;
} .Button0 :hover {
    background-color: #006DAB;
    color: white;
} 
.Car0 {
    width: 202.42px;
    height: 137.433px;
    background-color: white;
}
`;
export const Button1 = styled.button`
height: ${(props)=> (props.$second ?  "35px" : "35px")};
width: ${(props)=> (props.$second ? "94px" : "94px")};
border-radius: ${(props)=> (props.$second ? "10px" : "10px")};
background-color: white;
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
color: var(--blue, #006DAB);
cursor: pointer;

`;

// ustat
export const RightNavbarRow = styled.div`
display: grid;
grid-template-areas: " i ";
align-items: center;
justify-content: center;
padding: 20px 0px;
width: 100%;
row-gap: 20px;
.tuzatish {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
} 
@media only screen and (max-width: 960px) {
    .Lengmenus {
        display: grid;
        grid-template-areas: " a ";
        justify-content: center;
        align-items: center;
        width: 90vw;
        padding-right: 0px;
        padding-left: 0px; 
        padding-bottom: 10px;
    } 
}
`;
export const Lengmenus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    width: 130vmin;
    min-width: 100px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.30);
    padding: 0px 40px 0px 18px;
    border-radius: 20px;
    

    .menu-wrap {
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        justify-content: center;
    } .to-wrap {
        display: flex;
        width: 100%;
        justify-content: space-between;
    } .menu-wrap h3 {
        color: var(--text, #373737);
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        padding-top: 32px;
    } .menu-wrap h2 {
        color: var(--blue, #006DAB);
        font-family: Montserrat;
        font-size: 22px;
        font-weight: 700;
        padding-top: 28px;
    } .menu-wrap h5 {
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: var(--text, #373737);
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 400;
        padding-top: 5px;
    } .Button0 {
        display: flex;
        justify-content: space-between;
        padding-top: 30px;
        width: 100%;
        gap: 14.68px;
    } .Car0 {
    width: 280px;
    height: 143.853px;
    padding-right: 40px;
}
.Button0 :hover{
    background-color:  #006DAB;
    color: white;
}
@media only screen and (max-width: 850px){
    .Button0 {
        display: flex;
        justify-content: center;
        width: 100%;
    }
}
`;
export const ButtonBig = styled.button`
    width: 40vmin;
    max-width: 340px;
    height: 35px;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #006DAB;
    border: 1px solid var(--blue, #006DAB);
    cursor: pointer;
.ButtonBig :hover {
    background-color:  #006DAB;
}
`;