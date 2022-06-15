import { Button } from '@mui/material';
import Page from '../../layouts/Page';
import { Link } from 'react-router-dom';
import { Add as AddIcon } from '@mui/icons-material';
import Table from '../../components/DataGrid/Table';
import { useEffect, useState } from 'react';
import ServicesService from '../../services/ServicesService';

function ServicesList() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const columns = [
    {
      columnName: 'Nome',
      columnValue: 'nome',
    },
    {
      columnName: 'Preço',
      columnValue: 'price',
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    async function loadServices() {
      try {
        const services = await ServicesService.get();

        setServices(services);
      } catch {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    }

    loadServices();
  }, []);

  return (
    <Page
      title='Serviços'
      breadcrumbs={[
        {
          label: 'Serviços',
          to: '/services',
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
      <Table data={services} isLoading={isLoading} columns={columns} />
    </Page>
  );
}

export default ServicesList;
