import {
  LinearProgress,
  Paper,
  Table as TableMUI,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import { ReactNode } from 'react';

export interface Rows {
  id: number;
  nome: string;
  price: string;
}

interface ColumnsProps {
  columnName: string;
  columnValue?: string;
  render?: (item: Rows) => ReactNode;
}

interface TableProps {
  isLoading: boolean;
  columns: ColumnsProps[];
  data: any;
}

interface CellProps {
  rowValue: string | number;
  actions?: ReactNode | null;
}

function Table({ isLoading, columns, data }: TableProps) {
  return (
    <>
      <TableContainer component={Paper}>
        <TableMUI size='medium'>
          <TableHead>
            <TableRow>
              {columns.map((item) => (
                <TableCell key={item.columnValue}>{item.columnName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading &&
              data.map((item: Rows) => {
                const cells = columns.map((column: ColumnsProps) => {
                  return {
                    rowValue: item[column.columnValue as keyof Rows],
                    actions: column?.render ? column.render(item) : null,
                  };
                });

                return (
                  <TableRow key={item.id} hover>
                    {cells.map((row: CellProps) => (
                      <>
                        {row.actions ? (
                          <TableCell key={row.rowValue}>
                            {row.actions}
                          </TableCell>
                        ) : (
                          <TableCell key={row.rowValue}>
                            {row.rowValue}
                          </TableCell>
                        )}
                      </>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
          {data.length === 0 && !isLoading && (
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
}

export default Table;
