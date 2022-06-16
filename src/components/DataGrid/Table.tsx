import {
  Box,
  InputAdornment,
  LinearProgress,
  Paper,
  Table as TableMUI,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { ReactNode, useMemo, useState } from 'react';
import { GlobalFilter } from './GlobalFilter';

interface ColumnsProps {
  columnName: string;
  columnValue?: string;
  render?: (item: any) => ReactNode;
}

interface TableProps {
  isLoading: boolean;
  columns: ColumnsProps[];
  data: any;
  labelTotalCount: string;
}

interface CellProps {
  rowValue: string | number;
  render?: ReactNode | null;
}

export const Table = ({
  isLoading,
  columns,
  data,
  labelTotalCount,
}: TableProps) => {
  const [search, setSearch] = useState('');

  const dataFiltered = useMemo(() => {
    return data.filter((item: any) =>
      item.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, data]);

  return (
    <>
      <TableContainer component={Paper}>
        <GlobalFilter
          value={search}
          setSearch={setSearch}
          isLoading={isLoading}
          labelTotalCount={labelTotalCount}
          dataFiltered={dataFiltered}
        />
        <TableMUI size='medium'>
          <TableHead>
            <TableRow>
              {columns.map((item) => (
                <TableCell key={item.columnName}>{item.columnName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading &&
              dataFiltered.map((item: any) => {
                const cells = columns.map((column: ColumnsProps) => {
                  return {
                    rowValue: item[column.columnValue as keyof any],
                    render: column?.render ? column.render(item) : null,
                  };
                });

                return (
                  <TableRow key={item.id} hover>
                    {cells.map((row: CellProps) => (
                      <>
                        {row.render ? (
                          <TableCell key={item.id}>{row.render}</TableCell>
                        ) : (
                          <TableCell key={item.id}>{row.rowValue}</TableCell>
                        )}
                      </>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
          {dataFiltered.length === 0 && !isLoading && (
            <caption>Nenhum registro encontrado</caption>
          )}
          {isLoading && (
            <TableFooter>
              <TableCell colSpan={columns.length}>
                <LinearProgress variant='indeterminate' />
              </TableCell>
            </TableFooter>
          )}
        </TableMUI>
      </TableContainer>
    </>
  );
};
