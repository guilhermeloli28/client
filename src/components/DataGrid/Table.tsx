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

interface Rows {
  id: number;
  nome: string;
  price: string;
}

interface ColumnsProps {
  columnName: string;
  columnValue: string;
}

interface TableProps {
  isLoading: boolean;
  columns: ColumnsProps[];
  data: any;
}

interface CellProps {
  rowValue: string | number;
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
                  };
                });
                return (
                  <TableRow key={Math.random()} hover>
                    {cells.map((row: CellProps) => (
                      <TableCell key={row.rowValue}>{row.rowValue}</TableCell>
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
