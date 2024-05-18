import styled from "styled-components";
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { certificacionesList } from '../utils/certificaciones';
import {v} from '../styles/Variables';
    
export function CertificationsItems() {
    return (<Container >
        {certificacionesList.map(({id, link, image, icon}) => (
            <Card sx={{ maxWidth: 345 }} key={id} className="cardBody">
                <CardActionArea>
                    <img src={image} alt="title" className="image"/>
                    <Link to={link} className="linkCertificado"><button><i>{icon}</i></button></Link>
                </CardActionArea>
            </Card>
        ))}
    </Container>);
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   .cardBody{
        margin: 8px;
        width: 250px;
        heght: 200px;
        &:hover{
            box-shadow: 0 0 8px grey;
        };
        .image{
            width: 250px;
            height: 200px;
            cursor: auto;
        }
        .linkCertificado{
            position: absolute;
            left: 200px;
            top: 30px;
            button{
                border: none;
                height: 28px;
                width: 28px;
                border-radius: 50%;
                background: ${v.gray500};
                &:hover{
                    box-shadow: 0 0 16px #9247FC;
                }
            }
        }
   };
`;