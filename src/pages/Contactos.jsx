import styled from "styled-components";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

import {v} from '../styles/Variables';
import { redes } from '../utils/redes';

    
export function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_lzqcyvj', 'template_h3qj00i', form.current, {
            publicKey: '8Zhkhcfnnum5lwaiT',
            })
            .then(
            () => {
                location.reload();
                alert("Message send!");
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
    };

    return (<Container>
        <div className="formContainer">
            <div className="titleContainer">
                <h1>Contacto</h1>
            </div>
            <form ref={form} onSubmit={sendEmail}>

                <div className="inputContainer">
                    <input type="email" placeholder="Example@email" className="input" name="user_email" required />
                </div>
                <div className="inputContainer">
                    <input type="text" placeholder="Name" className="input" name="user_name" required />
                </div>
                <div className="inputContainer">
                    <input type="text" placeholder="Subject" className="input" name="user_asunto" required />
                </div>
                <div className="messageContainer">
                    <textarea className="message" name="message" id="message" required cols={26} rows={6} placeholder="Message" aria-multiline>

                    </textarea>
                </div>
                <div className="buttonContainer">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
        <div className="redesContainer">
        {redes.map(({id, icon, to, redName}) => (
            <div key={id}>
                <Link to={to}>
                    <button className={`redesButton ${redName}`}>{icon}</button>
                </Link>
            </div>
        ))}
            
        </div>
    </Container>);
}

const Container = styled.div`
    height: 100vh;
    .formContainer{
        box-shadow: 0 0 8px grey;
        border-radius: 4px;
        width: 500px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px auto 0;

    };
    .inputContainer{
        margin-bottom: 16px; 
        .input{
            border-radius: 5px;
            width: 285px;
            padding: 4px;
            &:hover{
                background: ${v.gray200};
                cursor: auto;
            }
        }
    };
    .messageContainer{
        width: max-content;
        height: max-content;
        .message{
            resize: none;
            border-radius: 4px;
            padding: 4px;
            &:hover{
                background: ${v.gray200};
                cursor: auto;
            }
        }
    };
    .buttonContainer{
        width: 300px;
        display: flex;
        justify-content: center;
        padding: 4px;
        button{
            padding: 4px;
            border-radius: 8px;
            &:hover{
                background: ${v.gray500};
                color: ${v.colorHover};
            };
            &:active{
                background: ${v.buttonSubmit};
                color: ${v.colorHover};
            }
        }
    };
    .redesContainer{
        width: max-content;
        display: flex;
        margin: 40px auto 0;
        .redesButton{
            width: 44px;
            height: 38px;
            margin: 8px;
            border-radius: 8px;
            box-shadow: 0 0 4px grey;
            &.linkedin{
                background: #0A66C2;
                svg{
                    color: #fff;
                    font-size: 28px;
                }
            };
            &.github{
                background: #000;
                svg{
                    color: #fff;
                    font-size: 28px;
                }
            }
        }
    }
`