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

export class FormResponse {
  formats: string;
  data: {
    id: number
  };
}

export class DataResponse {
  data: [];
}
