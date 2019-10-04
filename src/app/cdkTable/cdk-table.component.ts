import { Component } from '@angular/core';

export type HeaderNames = 'first' | 'second' | 'third';

export interface CellContent {
  value: string;
}

@Component({
  selector: 'app-cdk-table',
  templateUrl: './cdk-table.component.html',
  styleUrls: ['./cdk-table.component.less']
})
export class CdkTableComponent {
  table = new Table<HeaderNames, CellContent>([
    {
      name: 'first',
      config: {
        title: 'First'
      }
    },
    {
      name: 'second',
      config: {
        title: 'Second'
      }
    },
    {
      name: 'third',
      config: {
        title: 'Third'
      }
    }
    ],

    [
      {
        first: { value : 'first cell content'},
        second: { value : 'second cell content'},
        third: {value: 'third cell content'}
      },
      {
        first: { value : 'first cell content'},
        second: { value : 'second cell content'},
        third: {value: 'third cell content'}
      },
      {
        first: { value : 'first cell content'},
        second: { value : 'second cell content'},
        third: {value: 'third cell content'}
      }
    ]
  );
}

export class Table<N extends string | number | symbol, C> {
  constructor (
    public header: Header<N>[],
    public rows: Row<N, C>[],
    public config?: TableConfig,
  ) {}

  get headersNames() {
    return this.header.map((header) => header.name);
  }
}

export interface TableConfig extends Config {}

export interface Header<N> {
  name: N;
  config?: HeaderConfig;
}

export interface HeaderConfig extends Config {
  title?: string;
}

export type Row<N extends string | number | symbol, C> = Partial<Record<N, C>> & {
  config?: RowConfig;
};

export interface RowConfig extends Config {

}

export interface Cell<T> {
  content: T;
}

export interface CellConfig extends Config {

}



export interface Config {}
