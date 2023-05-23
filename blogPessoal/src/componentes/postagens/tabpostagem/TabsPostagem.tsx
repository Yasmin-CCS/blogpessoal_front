import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ListaPostagem from '../listapostagem/ListaPostagem';


function TabsPostagem() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} display={'flex'} justifyContent={"center"}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab  label="Postagens" value="1"/>
            <Tab label="Sobre" value="2"/>
        </TabList>
        </Box>
        <TabPanel value="1"><ListaPostagem/></TabPanel>
        <TabPanel value="2">Sobre</TabPanel>
      </TabContext>
    </Box>
      );
    }
export default TabsPostagem