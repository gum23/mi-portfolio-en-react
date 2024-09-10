import styled from "styled-components";
import {v} from '../styles/Variables';
import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

    
export function Skills() {
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
    };
    return (<Container>
        <h1>Skills</h1>
        <Divider />
        <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slotProps={{ transition: { timeout: 400 } }}
            className="accordion"
        >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Typography className="accordTitle">FrontEnd</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion slotProps={{ transition: { timeout: 400 } }} className="accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography className="accordTitle">BackEnd</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion slotProps={{ transition: { timeout: 400 } }} className="accordion">
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            >
            <Typography className="accordTitle">Others Tools</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
    </Container>);
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    margin: 32px auto;
    .accordion{
        background: ${(props)=> props.theme.accorBackground}
    }
    .accordTitle{
        color: #fff;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
    }
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props)=> props.theme.bg3};
    margin: ${v.lgSpacing} 0;
`;