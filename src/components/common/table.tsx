import React, { ReactNode } from 'react';
import { Table } from 'react-bootstrap';
import { Pagination } from '../index';
import { messages } from '../../constants';

export interface TableHeader {
  icons?: { className: string; onClick?: () => void }[];
  label?: string;
  className?: string;
  component?: ReactNode;
  onHeaderClick?: () => void;
}

interface TableProps {
  tableClass?: string;
  headers: TableHeader[];
  children: ReactNode;
  pageCount: number;
  onPageChange: (page: number) => void;
  activePage: number;
  countText: string;
  totalItemsCount: number;
  pageTextHidden?: boolean;
}

const CustomTable: React.FC<TableProps> = ({
  tableClass,
  headers,
  children,
  pageCount,
  onPageChange,
  activePage,
  countText,
  totalItemsCount,
  pageTextHidden,
}) => {
  return (
    <div>
      <div className="table-parent">
        <Table className={tableClass} hover>
          <thead>
            <tr>
              {headers.map(
                ({ icons, label, className, component, onHeaderClick }) => {
                  return (
                    <th className={className} onClick={onHeaderClick}>
                      <span>{component || label}</span>
                      {icons &&
                        icons.map((icon) => (
                          <i
                            className={icon.className}
                            onClick={icon.onClick}
                          />
                        ))}
                    </th>
                  );
                },
              )}
            </tr>
          </thead>
          <tbody>
            {children || (
              <tr className="no-data-msg">
                <td colSpan={headers && headers.length}>{messages.noData}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      {children && pageCount > 1 && (
        <Pagination
          page={activePage}
          pageText={countText}
          onPageChange={onPageChange as () => void}
          totalItemCount={totalItemsCount}
          totalPages={pageCount}
          color="grey"
          pageTextHidden={pageTextHidden}
        />
      )}
    </div>
  );
};

export default CustomTable;
