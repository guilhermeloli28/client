import { Button, IconButton, Tooltip } from '@mui/material';
import Page from '../../layouts/Page';
import { Link } from 'react-router-dom';
import { Add as AddIcon } from '@mui/icons-material';
import Table, { Rows } from '../../components/DataGrid/Table';
import { useEffect, useState } from 'react';
import ServicesService from '../../services/ServicesService';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

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
    {
      columnName: 'Ações',
      //we can receive the row data ( render: ({ id }: Rows) => () )
      render: () => (
        <>
          <Tooltip title='Editar'>
            <IconButton
              // component={Link}
              // to={`${original.id}/edit`}
              sx={{ p: 0 }}
              aria-label='edit'
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Remover'>
            <IconButton
              // component={Link}
              // to={`${original.id}/edit`}
              sx={{ p: 0, ml: 2 }}
              aria-label='edit'
            >
              <DeleteIcon sx={{ color: 'rgba(187, 30, 14, 0.8)' }} />
            </IconButton>
          </Tooltip>
        </>
      ),
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
