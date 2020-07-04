export class User {
  user: {
    id: number,
    username: string,
    email: string
  };
  token?: string;
}


export class ExcelTableResponse {
  fields: [];
  data: [];
  columns: [];
}

export class ListResponse {
  method: {};
  fields: [];
  columns: [];
  data: [];
}

export class DataHeaderResponse {
  rows_headers = {
    title: {
      id: Number,
      nepali_name: String,
      name: String
    },
    children: []
  };
  col_headers = [];
  index_cols = [];
  empty_table = [];
}


export class SingleObjectResponse {
  method: {};
  fields: [];
  columns: [];
  data: {};
}

export class TableDetailsResponse {
  method: {};
  fields: [];
  columns: [];
  data: {
    name: string,
    nepali_name: string,
  };
}

export class FormResponse {
  formats: string;
  data: {
    id: string
  };
}

export class DataResponse {
  data: [];
}

export class TableStateResponse {
  data: {
    _id: string
  }
}
