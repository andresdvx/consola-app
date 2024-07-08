export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOptions): string {
    let outPutMessge: string = "";
    for (let i = 1; i <= limit; i++) {
      outPutMessge += `${base} X ${i} = ${base * i}`;
      if(i < limit) outPutMessge += '\n';
    }
    return outPutMessge;
  }
}
