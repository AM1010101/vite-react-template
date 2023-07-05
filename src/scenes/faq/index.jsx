import { Box, useTheme } from '@mui/material';
import Header from '../global/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="ABOUT"
        subtitle="About and Frequently Asked Questions"
      />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How am I charged?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <p>
                You are charged based on the number of cards you have
                in your deck. The first 100 cards are free. After
                that, you are charged $0.01 per card per month.
              </p>
              <p>
                you are also charged for generating a new deck. The
                first deck is free. After that, you are charged $0.01
                per deck per month.
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How does the system work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              alt="profile-user"
              width="auto"
              height="650px"
              src={`../../assets/system_overview.png`}
              style={{ cursor: 'pointer', borderRadius: '5%' }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
