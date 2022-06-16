import { Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';

interface Breadcrumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export const BreadcrumbsWrapper = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize='small' />}
      aria-label='breadcrumb'
    >
      <Link
        underline='hover'
        key='1'
        color='inherit'
        to='dashboard'
        component={RouterLink}
      >
        Ínicio
      </Link>
      {breadcrumbs.map((item) =>
        item.to ? (
          <Link
            underline='hover'
            key='1'
            color='inherit'
            to={item.to}
            component={RouterLink}
          >
            {item.label}
          </Link>
        ) : (
          <Typography key={item.label} color='text.primary'>
            {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsWrapper;
