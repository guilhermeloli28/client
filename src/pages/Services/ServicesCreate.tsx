import { Button, TableContainer } from '@mui/material';
import Page from '../../layouts/Page';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ServicesCreate() {
  return (
    <Page
      title='Novo serviço'
      breadcrumbs={[
        {
          label: 'Serviços',
          to: '/services',
        },
        {
          label: 'Novo serviço',
        },
      ]}
      actions={
        <Button
          component={Link}
          to='/services'
          color='primary'
          startIcon={<ArrowBackIcon fontSize='small' />}
          variant='contained'
        >
          Voltar
        </Button>
      }
    ></Page>
  );
}

export default ServicesCreate;
