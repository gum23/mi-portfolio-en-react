import styled from "styled-components";
import {v} from '../styles/Variables'
import { CertificationsItems } from '../components/CertificationsFront';
    
export function Certificaciones() {
    return (<Container>
        <h1>Certificaciones</h1>
        <Divider />
        <p className="titleFrontend">Frontend</p>
        <CertificationsItems />
    </Container>);
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    margin-top: 24px;
    .titleFrontend{
        font-size: 1.5rem;
    }
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props)=> props.theme.bg3};
    margin: ${v.lgSpacing} 0;

`;