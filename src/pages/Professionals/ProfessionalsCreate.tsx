import { Button } from '@mui/material';
import { Page } from '../../layouts';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ProfessionalsCreate() {
  return (
    <Page
      title='Novo profissional'
      breadcrumbs={[
        {
          label: 'Profissionais',
          to: '/professionals',
        },
        {
          label: 'Novo profissional',
        },
      ]}
      actions={
        <Button
          component={Link}
          to='/professionals'
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

export default ProfessionalsCreate;
