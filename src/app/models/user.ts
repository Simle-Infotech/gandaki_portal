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

export class singleTableStateResponse {
  data:{
    _id: String,
    tableId: String,
    colState: [
      {
        colId: String,
        hide: boolean,
        aggFunc: any,
        width: Number,
        pivotIndex: any,
        pinned: any,
        rowGroupIndex: any,
        flex: number
      }
    ],
    groupState: [
      {
        groupId: String,
        open: boolean
      }
    ],
    sortState: [],
    filterState: [],
  }
}


export class CollectionResponse {
  data:[
    {
      id: number,
      icon_name: string,
      icon_class: string,
      icon_path: string,
      icon_description: string,
      name: string,
      nepali_name: string,
      ordering: number,
      higher_collection: any,
      related_table: any
    }
  ]
}
