import styled from "styled-components";
import image from '../assets/perfil.jpeg';
import {v} from '../styles/Variables';
import { links } from '../utils/listLinksSidebar';
import { AiOutlineLeft } from "react-icons/ai";
import { NavLink } from 'react-router-dom';    
import { useContext } from "react";
import { ThemeContext } from '../App';

export function SideBar({sidebarOpen, setSidebarOpen}) {
    const handleSideBar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const {setTheme, theme} = useContext(ThemeContext);
    
    const hangleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    }

    return (<Container isOpen={sidebarOpen} themeUse={theme}>
        <button onClick={handleSideBar} className="sideBarButton">
            <AiOutlineLeft />
        </button>
        <div className="photoContent">
            <div className="imgContent" >
                <img src={image} className="image" />
            </div>
            <h2>Gum-23</h2>
        </div>
        {links.map(({id, label, icon, to}) => (
            <div className="linkContainer" key={id}>
                <NavLink to={to} className={({isActive}) => `links${isActive ? ` active` : ``}`}> 
                    <div className="linkIcon">
                        {icon}
                    </div>
                    {sidebarOpen && (<span>{label}</span>)}
                </NavLink>
            </div>
        ))}
        <Divider />
        <div className="themeContent">
            {sidebarOpen && <span className="titleTheme">Dark mode</span>}
            <div className="toggleContent">
                <div className="grid themeContainer">
                    <div className="content">
                        <div className="demo">
                            <label className="switch">
                                <input type="checkbox" className="themeSwitcher" onClick={hangleTheme} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>);
}

const Container = styled.div`
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.bg};
    position: sticky;
    padding-top: 20px;
    top: 0;
    height: 100vh;
    .sideBarButton{
        position: absolute;
        top: ${v.xxlSpacing};
        right: -18px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${(props) => props.theme.bgtgderecha};
        box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        transform: ${({isOpen}) => (isOpen ? `initial` : `rotate(180deg)`)};
        border: none;
        letter-spacing: inherit;
        color: inherit;
        font.size: inherit;
        padding: 0;
        font-family: inherit;
        outline: inherit; 
    };
    .photoContent{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: ${v.lgSpacing};
        .imgContent{
            display: flex;
            width: 80px;
            height: 80px;
            margin-right: 16px;
            img{
                max-width: 100%;
                height: auto;
                border-radius: 50%;
                box-shadow: 0 0 8px grey;
            };
            cursor: pointer;
            transition: all 0.3s;
            transform: ${({isOpen}) =>isOpen ? `scale(1.2)` : `scale(0.7)`}
        };
        h2{
            display: ${({isOpen}) => (isOpen ? `block` : `none`)};
            white-space: nowrap;
            overflow: hidden;
        }
    };
    .linkContainer{
        margin: 8px 0;
        padding: 0 15%;
        :hover{
            background: ${(props)=> props.theme.bg3};
        };
        .links{
            display: flex;
            align-item: center;
            text-decoration: none;
            padding: calc(${v.smSpacing} - 2px) 0;
            span{
                display: flex;
                align-items: center;
                color: ${(props) => props.theme.color};
                white-space: nowrap;
                overflow: hidden;
            };
            .linkIcon{
                padding: ${v.smSpacing} ${v.mdSpacing};
                display: flex;
                svg{
                    font-size: 25px;
                }
            };
            &.active{
                .linkIcon{
                    svg{
                        color: ${(props) => props.theme.bg4};
                    }
                }
            }
        }
    };
    .themeContent{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .titleTheme{
            display: block;
            padding: 10px;
            font-weight: 700;
            opacity: ${({isOpen}) => (isOpen ? `1` : `0`)};
            transition: all 0.3s;
            white-space: nowrap;
            overflow: hidden;
        };
        .toggleContent{
            margin: ${({isOpen}) => (isOpen ? `auto 15px` : `auto 40px` )};
            width: 36px;
            height: 20px;
            border-radius: 10px;
            transition: all 0.3s;
            position: relative;
            .themeContainer{
                background-blend-mode: multiply, multiply;
                transition: 0.4s;
                .grid{
                    display: grid;
                    justify-items: center;
                    align-content: center;
                    height: 100vh;
                    width: 100vw;
                    font-family: "lato", sans-serif;
                };
                .demo{
                    font-size: 32px;
                    .switch{
                        display: inline-block;
                        width: 60px;
                        height: 34px;
                        .themeSwitcher{
                            opacity: 0;
                            width: 0;
                            height: 0;
                            &:checked +.slider:before{
                                left: 8px;
                                content: "🌑";
                                transform: translatex:(26px);
                            }
                        };
                        .slider{
                            position: absolute;
                            cursor: pointer;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: ${({themeUse}) => (themeUse === "light" ? v.lightcheckbox : v.checkbox)};
                            transition: 0.4s;
                            &::before{
                                position: absolute;
                                content: "🌞";
                                height: 0px;
                                width: 0px;
                                left: -16px;
                                top: 10px;
                                line-height: 0px;
                                transition: 0.4s;
                            };
                            &.round{
                                border-radius: 34px;
                                &::before{
                                    border-radius: 50%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props)=> props.theme.bg3};
    margin: ${v.lgSpacing} 0;

`;