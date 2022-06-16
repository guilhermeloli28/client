import { Box, Grid, Typography } from '@mui/material';

import { ReactNode } from 'react';
import BreadcrumbsWrapper from './BreadcrumbsWrapper';

export interface BreadcrumbsProps {
  label: string;
  to?: string;
}

interface PageProps {
  title: string;
  actions?: ReactNode;
  breadcrumbs?: BreadcrumbsProps[];
  children?: ReactNode;
}

export const Page = ({ title, actions, breadcrumbs, children }: PageProps) => {
  return (
    <Box sx={{ pt: 8, pl: 5, pr: 5 }}>
      {breadcrumbs && <BreadcrumbsWrapper breadcrumbs={breadcrumbs} />}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item>
          <Typography variant='h5'>{title}</Typography>
        </Grid>
        <Grid item display='flex'>
          {actions}
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }}>{children}</Box>
    </Box>
  );
};

export default Page;
