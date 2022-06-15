import { Button } from '@mui/material';
import Page from '../../layouts/Page';
import { Link } from 'react-router-dom';
import { Add as AddIcon } from '@mui/icons-material';
import Table from '../../components/DataGrid/Table';
import { useEffect, useState } from 'react';
import ProfessionalsService from '../../services/ProfessionalsService';

function ProfessionalsList() {
  const [professionals, setProfessionals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const columns = [
    {
      columnName: 'Nome',
      columnValue: 'name',
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    async function loadProfessionals() {
      try {
        const services = await ProfessionalsService.get();

        setProfessionals(services);
      } catch {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    }

    loadProfessionals();
  }, []);

  return (
    <Page
      title='Profissionais'
      breadcrumbs={[
        {
          label: 'Profissionais',
          to: '/professionals',
        },
      ]}
      actions={
        <Button
          component={Link}
          to='create'
          color='primary'
          startIcon={<AddIcon fontSize='small' />}
          variant='contained'
        >
          Adicionar
        </Button>
      }
    >
      <Table data={professionals} isLoading={isLoading} columns={columns} />
    </Page>
  );
}

export default ProfessionalsList;
