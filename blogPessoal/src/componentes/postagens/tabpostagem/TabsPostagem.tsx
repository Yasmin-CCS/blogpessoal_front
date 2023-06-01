import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ListaPostagem from '../listapostagem/ListaPostagem';
import ModalPostagem from '../modalpostagem/ModalPostagem';


function TabsPostagem() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} display={'flex'}  alignItems="center" justifyContent={"center"} >
          <TabList onChange={handleChange} >
            <Tab  label="Postagens" value="1"/>
            <Tab  label="Sobre" value="2"/>
            
        </TabList>

              <ModalPostagem/>
        </Box>
        <TabPanel value="1"><ListaPostagem/></TabPanel>
        <TabPanel value="2">Este é o Blog das suas viagens! Aqui a ideia é compartilhar as delícias e os desafios da aventura que você escolheu. Queremos mostrar que você não está sozinhe, e conectar com pessoas que também estão na estrada. Sinta-se livre para compartilhar suas experiências, dicas, sucessos aprendizados e fracassos hahaha. Escrever também será um exercício de reflexão, para que você compreenda cada vez mais sua trajetória e os impactos dela na pessoa que você está se tornando, além disso, serão um lindo registro dessa etapa tão importante da sua vida.</TabPanel>
        
      </TabContext>
    </Box>
      );
    }
export default TabsPostagem