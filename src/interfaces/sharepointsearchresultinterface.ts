

export interface Metadata {
    type: string;
}

export interface Metadata2 {
    type: string;
}

export interface Metadata3 {
    type: string;
}

export interface CustomResults {
    __metadata: Metadata3;
    results: any[];
}

export interface Metadata4 {
    type: string;
}

export interface Metadata5 {
    type: string;
}

export interface Result {
    __metadata: Metadata5;
    Key: string;
    Value: string;
    ValueType: string;
}

export interface Properties {
    results: Result[];
}

export interface Metadata6 {
    type: string;
}

export interface Metadata7 {
    type: string;
}

export interface Metadata8 {
    type: string;
}

export interface Result3 {
    __metadata: Metadata8;
    Key: string;
    Value: any;
    ValueType: string;
}

export interface Cells {
    results: Result3[];
}

export interface Result2 {
    __metadata: Metadata7;
    Cells: Cells;
}

export interface Rows {
    results: Result2[];
}

export interface Table {
    __metadata: Metadata6;
    Rows: Rows;
}

export interface RelevantResults {
    __metadata: Metadata4;
    GroupTemplateId?: any;
    ItemTemplateId?: any;
    Properties: Properties;
    ResultTitle?: any;
    ResultTitleUrl?: any;
    RowCount: number;
    Table: Table;
    TotalRows: number;
    TotalRowsIncludingDuplicates: number;
}

export interface PrimaryQueryResult {
    __metadata: Metadata2;
    CustomResults: CustomResults;
    QueryId: string;
    QueryRuleId: string;
    RefinementResults?: any;
    RelevantResults: RelevantResults;
    SpecialTermResults?: any;
}

export interface Metadata9 {
    type: string;
}

export interface Result4 {
    __metadata: Metadata9;
    Key: string;
    Value: string;
    ValueType: string;
}

export interface Properties2 {
    results: Result4[];
}

export interface Metadata10 {
    type: string;
}

export interface SecondaryQueryResults {
    __metadata: Metadata10;
    results: any[];
}

export interface Metadata11 {
    type: string;
}

export interface TriggeredRules {
    __metadata: Metadata11;
    results: any[];
}

export interface Query {
    __metadata: Metadata;
    ElapsedTime: number;
    PrimaryQueryResult: PrimaryQueryResult;
    Properties: Properties2;
    SecondaryQueryResults: SecondaryQueryResults;
    SpellingSuggestion: string;
    TriggeredRules: TriggeredRules;
}

export interface D {
    query: Query;
}

export interface SharepointSearchResult {
    d: D;
}


export interface SharepointSearchResultParsedItem {
    Title:string,
    Path:string     
}

