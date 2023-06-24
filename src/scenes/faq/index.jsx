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
        title="FAQ & DOCs"
        subtitle="Frequently Asked Questions and Documentation"
      />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Github
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href="https://github.com" target="blank">
              github.com
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            System Diagram
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
