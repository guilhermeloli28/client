import { Button, Chip, IconButton, Tooltip } from '@mui/material';
import { Page } from '../../layouts';
import { Link } from 'react-router-dom';
import { Add as AddIcon } from '@mui/icons-material';
import { Table } from '../../components/index';
import { useEffect, useState } from 'react';
import ServicesService from '../../services/ServicesService';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { Services } from '../../@types';
import { useConfirm } from 'material-ui-confirm';

function ServicesList() {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const confirm = useConfirm();

  function removeService(service: Services) {
    confirm({
      title: `Tem certeza que deseja remover o serviço: ${service.name}?`,
      description: 'Essa ação é permanente!',
      confirmationText: 'Confirmar',
      confirmationButtonProps: {
        color: 'error',
      },
      cancellationButtonProps: {
        color: 'inherit',
      },
    })
      .then(async () => {
        await ServicesService.delete(service.id);

        const servicesUpdated = services.filter(
          (option) => option.id !== service.id
        );

        setServices(servicesUpdated);
      })
      .catch(() => {
        /* ... */
      });
  }

  const columns = [
    {
      columnName: 'Nome',
      columnValue: 'name',
    },
    {
      columnName: 'Preço',
      columnValue: 'price',
      render: ({ price }: Services) => (
        <Chip
          label={`R$ ${price}`}
          color='default'
          size='small'
          variant='outlined'
        />
      ),
      // we can call any type of component inside render
    },
    {
      columnName: 'Ações',
      //we can receive the row data ( render: ({ id }: Rows) => () )
      render: (service: Services) => (
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
              onClick={() => removeService(service)}
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
      <Table
        data={services}
        isLoading={isLoading}
        columns={columns}
        labelTotalCount='serviços'
      />
    </Page>
  );
}

export default ServicesList;
