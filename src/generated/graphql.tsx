import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  comments_scalar: { input: any; output: any; }
  posts_scalar: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "comment_scores" */
export type Comment_Scores = {
  __typename?: 'comment_scores';
  comment_id: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
};

/** aggregated selection of "comment_scores" */
export type Comment_Scores_Aggregate = {
  __typename?: 'comment_scores_aggregate';
  aggregate?: Maybe<Comment_Scores_Aggregate_Fields>;
  nodes: Array<Comment_Scores>;
};

/** aggregate fields of "comment_scores" */
export type Comment_Scores_Aggregate_Fields = {
  __typename?: 'comment_scores_aggregate_fields';
  avg?: Maybe<Comment_Scores_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Comment_Scores_Max_Fields>;
  min?: Maybe<Comment_Scores_Min_Fields>;
  stddev?: Maybe<Comment_Scores_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Scores_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Scores_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Scores_Sum_Fields>;
  var_pop?: Maybe<Comment_Scores_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Scores_Var_Samp_Fields>;
  variance?: Maybe<Comment_Scores_Variance_Fields>;
};


/** aggregate fields of "comment_scores" */
export type Comment_Scores_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comment_Scores_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comment_scores" */
export type Comment_Scores_Aggregate_Order_By = {
  avg?: InputMaybe<Comment_Scores_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comment_Scores_Max_Order_By>;
  min?: InputMaybe<Comment_Scores_Min_Order_By>;
  stddev?: InputMaybe<Comment_Scores_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comment_Scores_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comment_Scores_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comment_Scores_Sum_Order_By>;
  var_pop?: InputMaybe<Comment_Scores_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comment_Scores_Var_Samp_Order_By>;
  variance?: InputMaybe<Comment_Scores_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Comment_Scores_Avg_Fields = {
  __typename?: 'comment_scores_avg_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "comment_scores" */
export type Comment_Scores_Avg_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comment_scores". All fields are combined with a logical 'AND'. */
export type Comment_Scores_Bool_Exp = {
  _and?: InputMaybe<Array<Comment_Scores_Bool_Exp>>;
  _not?: InputMaybe<Comment_Scores_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Scores_Bool_Exp>>;
  comment_id?: InputMaybe<Int_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "comment_scores" */
export enum Comment_Scores_Constraint {
  /** unique or primary key constraint on columns "comment_id" */
  CommentScoresPkey = 'comment_scores_pkey'
}

/** input type for incrementing numeric columns in table "comment_scores" */
export type Comment_Scores_Inc_Input = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "comment_scores" */
export type Comment_Scores_Insert_Input = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Comment_Scores_Max_Fields = {
  __typename?: 'comment_scores_max_fields';
  comment_id?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "comment_scores" */
export type Comment_Scores_Max_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Scores_Min_Fields = {
  __typename?: 'comment_scores_min_fields';
  comment_id?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "comment_scores" */
export type Comment_Scores_Min_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comment_scores" */
export type Comment_Scores_Mutation_Response = {
  __typename?: 'comment_scores_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Comment_Scores>;
};

/** on_conflict condition type for table "comment_scores" */
export type Comment_Scores_On_Conflict = {
  constraint: Comment_Scores_Constraint;
  update_columns?: Array<Comment_Scores_Update_Column>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};

/** Ordering options when selecting data from "comment_scores". */
export type Comment_Scores_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comment_scores */
export type Comment_Scores_Pk_Columns_Input = {
  comment_id: Scalars['Int']['input'];
};

/** select columns of table "comment_scores" */
export enum Comment_Scores_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Score = 'score'
}

/** input type for updating data in table "comment_scores" */
export type Comment_Scores_Set_Input = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Comment_Scores_Stddev_Fields = {
  __typename?: 'comment_scores_stddev_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "comment_scores" */
export type Comment_Scores_Stddev_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Scores_Stddev_Pop_Fields = {
  __typename?: 'comment_scores_stddev_pop_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "comment_scores" */
export type Comment_Scores_Stddev_Pop_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Scores_Stddev_Samp_Fields = {
  __typename?: 'comment_scores_stddev_samp_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "comment_scores" */
export type Comment_Scores_Stddev_Samp_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "comment_scores" */
export type Comment_Scores_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comment_Scores_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comment_Scores_Stream_Cursor_Value_Input = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Comment_Scores_Sum_Fields = {
  __typename?: 'comment_scores_sum_fields';
  comment_id?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "comment_scores" */
export type Comment_Scores_Sum_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** update columns of table "comment_scores" */
export enum Comment_Scores_Update_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Score = 'score'
}

export type Comment_Scores_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Comment_Scores_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comment_Scores_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comment_Scores_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Comment_Scores_Var_Pop_Fields = {
  __typename?: 'comment_scores_var_pop_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "comment_scores" */
export type Comment_Scores_Var_Pop_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Scores_Var_Samp_Fields = {
  __typename?: 'comment_scores_var_samp_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "comment_scores" */
export type Comment_Scores_Var_Samp_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Scores_Variance_Fields = {
  __typename?: 'comment_scores_variance_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "comment_scores" */
export type Comment_Scores_Variance_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type Comments = {
  __typename?: 'comments';
  /** I added this here instead of on posts so a post can have multiple accepted answers. */
  accepted_answer: Scalars['Boolean']['output'];
  /** I'm imagining this would be markdown. */
  body: Scalars['String']['output'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int']['output'];
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['Int']['output'];
  /** A computed field, executes function "get_comment_score" */
  score?: Maybe<Array<Comment_Scores>>;
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
  votes_aggregate: Votes_Aggregate;
};


/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type CommentsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type CommentsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type CommentsScoreArgs = {
  distinct_on?: InputMaybe<Array<Comment_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Scores_Order_By>>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};


/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type CommentsVotesArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type CommentsVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

export type Comments_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Comments_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Comments_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Comments_Aggregate_Bool_Exp_Count>;
};

export type Comments_Aggregate_Bool_Exp_Bool_And = {
  arguments: Comments_Select_Column_Comments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Comments_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Comments_Select_Column_Comments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  avg?: Maybe<Comments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
  stddev?: Maybe<Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Comments_Sum_Fields>;
  var_pop?: Maybe<Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Comments_Var_Samp_Fields>;
  variance?: Maybe<Comments_Variance_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  avg?: InputMaybe<Comments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
  stddev?: InputMaybe<Comments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comments_Sum_Order_By>;
  var_pop?: InputMaybe<Comments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comments_Var_Samp_Order_By>;
  variance?: InputMaybe<Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Comments_Avg_Fields = {
  __typename?: 'comments_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  accepted_answer?: InputMaybe<Boolean_Comparison_Exp>;
  body?: InputMaybe<String_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  parent_comment_id?: InputMaybe<Int_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profile_id?: InputMaybe<Int_Comparison_Exp>;
  score?: InputMaybe<Comment_Scores_Bool_Exp>;
  votes?: InputMaybe<Votes_Bool_Exp>;
  votes_aggregate?: InputMaybe<Votes_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = 'comments_pkey'
}

/** input type for incrementing numeric columns in table "comments" */
export type Comments_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Scalars['Int']['input']>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  /** I added this here instead of on posts so a post can have multiple accepted answers. */
  accepted_answer?: InputMaybe<Scalars['Boolean']['input']>;
  /** I'm imagining this would be markdown. */
  body?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Scalars['Int']['input']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  votes?: InputMaybe<Votes_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  /** I'm imagining this would be markdown. */
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Int']['output']>;
  post_id?: Maybe<Scalars['Int']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  /** I'm imagining this would be markdown. */
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  /** I'm imagining this would be markdown. */
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Int']['output']>;
  post_id?: Maybe<Scalars['Int']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  /** I'm imagining this would be markdown. */
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  accepted_answer?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_comment_id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  score_aggregate?: InputMaybe<Comment_Scores_Aggregate_Order_By>;
  votes_aggregate?: InputMaybe<Votes_Aggregate_Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  AcceptedAnswer = 'accepted_answer',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ParentCommentId = 'parent_comment_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ProfileId = 'profile_id'
}

/** select "comments_aggregate_bool_exp_bool_and_arguments_columns" columns of table "comments" */
export enum Comments_Select_Column_Comments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  AcceptedAnswer = 'accepted_answer'
}

/** select "comments_aggregate_bool_exp_bool_or_arguments_columns" columns of table "comments" */
export enum Comments_Select_Column_Comments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  AcceptedAnswer = 'accepted_answer'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  /** I added this here instead of on posts so a post can have multiple accepted answers. */
  accepted_answer?: InputMaybe<Scalars['Boolean']['input']>;
  /** I'm imagining this would be markdown. */
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Scalars['Int']['input']>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
  __typename?: 'comments_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
  __typename?: 'comments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
  __typename?: 'comments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "comments" */
export type Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comments_Stream_Cursor_Value_Input = {
  /** I added this here instead of on posts so a post can have multiple accepted answers. */
  accepted_answer?: InputMaybe<Scalars['Boolean']['input']>;
  /** I'm imagining this would be markdown. */
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Scalars['Int']['input']>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
  __typename?: 'comments_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Int']['output']>;
  post_id?: Maybe<Scalars['Int']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  AcceptedAnswer = 'accepted_answer',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ParentCommentId = 'parent_comment_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ProfileId = 'profile_id'
}

export type Comments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Comments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Comments_Var_Pop_Fields = {
  __typename?: 'comments_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
  __typename?: 'comments_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
  __typename?: 'comments_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

export type Create_Or_Update_Vote_Args = {
  p_post_id?: InputMaybe<Scalars['Int']['input']>;
  p_profile_id?: InputMaybe<Scalars['Int']['input']>;
  p_value?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Or_Update_Vote_On_Comment_Args = {
  p_comment_id?: InputMaybe<Scalars['Int']['input']>;
  p_profile_id?: InputMaybe<Scalars['Int']['input']>;
  p_value?: InputMaybe<Scalars['Int']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Get_Comment_Score_Args = {
  comment_row?: InputMaybe<Scalars['comments_scalar']['input']>;
};

export type Get_Post_Score_Args = {
  post_row?: InputMaybe<Scalars['posts_scalar']['input']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** execute VOLATILE function "create_or_update_vote" which returns "votes" */
  create_or_update_vote: Array<Votes>;
  /** execute VOLATILE function "create_or_update_vote_on_comment" which returns "votes" */
  create_or_update_vote_on_comment: Array<Votes>;
  /** delete data from the table: "comment_scores" */
  delete_comment_scores?: Maybe<Comment_Scores_Mutation_Response>;
  /** delete single row from the table: "comment_scores" */
  delete_comment_scores_by_pk?: Maybe<Comment_Scores>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "post_scores" */
  delete_post_scores?: Maybe<Post_Scores_Mutation_Response>;
  /** delete single row from the table: "post_scores" */
  delete_post_scores_by_pk?: Maybe<Post_Scores>;
  /** delete data from the table: "post_tags" */
  delete_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** delete single row from the table: "post_tags" */
  delete_post_tags_by_pk?: Maybe<Post_Tags>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>;
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>;
  /** delete data from the table: "votes" */
  delete_votes?: Maybe<Votes_Mutation_Response>;
  /** delete single row from the table: "votes" */
  delete_votes_by_pk?: Maybe<Votes>;
  /** insert data into the table: "comment_scores" */
  insert_comment_scores?: Maybe<Comment_Scores_Mutation_Response>;
  /** insert a single row into the table: "comment_scores" */
  insert_comment_scores_one?: Maybe<Comment_Scores>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "post_scores" */
  insert_post_scores?: Maybe<Post_Scores_Mutation_Response>;
  /** insert a single row into the table: "post_scores" */
  insert_post_scores_one?: Maybe<Post_Scores>;
  /** insert data into the table: "post_tags" */
  insert_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** insert a single row into the table: "post_tags" */
  insert_post_tags_one?: Maybe<Post_Tags>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** insert data into the table: "votes" */
  insert_votes?: Maybe<Votes_Mutation_Response>;
  /** insert a single row into the table: "votes" */
  insert_votes_one?: Maybe<Votes>;
  /** update data of the table: "comment_scores" */
  update_comment_scores?: Maybe<Comment_Scores_Mutation_Response>;
  /** update single row of the table: "comment_scores" */
  update_comment_scores_by_pk?: Maybe<Comment_Scores>;
  /** update multiples rows of table: "comment_scores" */
  update_comment_scores_many?: Maybe<Array<Maybe<Comment_Scores_Mutation_Response>>>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  update_comments_many?: Maybe<Array<Maybe<Comments_Mutation_Response>>>;
  /** update data of the table: "post_scores" */
  update_post_scores?: Maybe<Post_Scores_Mutation_Response>;
  /** update single row of the table: "post_scores" */
  update_post_scores_by_pk?: Maybe<Post_Scores>;
  /** update multiples rows of table: "post_scores" */
  update_post_scores_many?: Maybe<Array<Maybe<Post_Scores_Mutation_Response>>>;
  /** update data of the table: "post_tags" */
  update_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** update single row of the table: "post_tags" */
  update_post_tags_by_pk?: Maybe<Post_Tags>;
  /** update multiples rows of table: "post_tags" */
  update_post_tags_many?: Maybe<Array<Maybe<Post_Tags_Mutation_Response>>>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update multiples rows of table: "posts" */
  update_posts_many?: Maybe<Array<Maybe<Posts_Mutation_Response>>>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update multiples rows of table: "profiles" */
  update_profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>;
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>;
  /** update multiples rows of table: "tags" */
  update_tags_many?: Maybe<Array<Maybe<Tags_Mutation_Response>>>;
  /** update data of the table: "votes" */
  update_votes?: Maybe<Votes_Mutation_Response>;
  /** update single row of the table: "votes" */
  update_votes_by_pk?: Maybe<Votes>;
  /** update multiples rows of table: "votes" */
  update_votes_many?: Maybe<Array<Maybe<Votes_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootCreate_Or_Update_VoteArgs = {
  args: Create_Or_Update_Vote_Args;
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


/** mutation root */
export type Mutation_RootCreate_Or_Update_Vote_On_CommentArgs = {
  args: Create_Or_Update_Vote_On_Comment_Args;
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


/** mutation root */
export type Mutation_RootDelete_Comment_ScoresArgs = {
  where: Comment_Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_Scores_By_PkArgs = {
  comment_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Post_ScoresArgs = {
  where: Post_Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Scores_By_PkArgs = {
  post_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TagsArgs = {
  where: Post_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Tags_By_PkArgs = {
  post_id: Scalars['Int']['input'];
  tag_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_VotesArgs = {
  where: Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Votes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Comment_ScoresArgs = {
  objects: Array<Comment_Scores_Insert_Input>;
  on_conflict?: InputMaybe<Comment_Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_Scores_OneArgs = {
  object: Comment_Scores_Insert_Input;
  on_conflict?: InputMaybe<Comment_Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_ScoresArgs = {
  objects: Array<Post_Scores_Insert_Input>;
  on_conflict?: InputMaybe<Post_Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Scores_OneArgs = {
  object: Post_Scores_Insert_Input;
  on_conflict?: InputMaybe<Post_Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TagsArgs = {
  objects: Array<Post_Tags_Insert_Input>;
  on_conflict?: InputMaybe<Post_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Tags_OneArgs = {
  object: Post_Tags_Insert_Input;
  on_conflict?: InputMaybe<Post_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>;
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input;
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VotesArgs = {
  objects: Array<Votes_Insert_Input>;
  on_conflict?: InputMaybe<Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Votes_OneArgs = {
  object: Votes_Insert_Input;
  on_conflict?: InputMaybe<Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_ScoresArgs = {
  _inc?: InputMaybe<Comment_Scores_Inc_Input>;
  _set?: InputMaybe<Comment_Scores_Set_Input>;
  where: Comment_Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_Scores_By_PkArgs = {
  _inc?: InputMaybe<Comment_Scores_Inc_Input>;
  _set?: InputMaybe<Comment_Scores_Set_Input>;
  pk_columns: Comment_Scores_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_Scores_ManyArgs = {
  updates: Array<Comment_Scores_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: InputMaybe<Comments_Inc_Input>;
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _inc?: InputMaybe<Comments_Inc_Input>;
  _set?: InputMaybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_ManyArgs = {
  updates: Array<Comments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Post_ScoresArgs = {
  _inc?: InputMaybe<Post_Scores_Inc_Input>;
  _set?: InputMaybe<Post_Scores_Set_Input>;
  where: Post_Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Scores_By_PkArgs = {
  _inc?: InputMaybe<Post_Scores_Inc_Input>;
  _set?: InputMaybe<Post_Scores_Set_Input>;
  pk_columns: Post_Scores_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Scores_ManyArgs = {
  updates: Array<Post_Scores_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TagsArgs = {
  _inc?: InputMaybe<Post_Tags_Inc_Input>;
  _set?: InputMaybe<Post_Tags_Set_Input>;
  where: Post_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Tags_By_PkArgs = {
  _inc?: InputMaybe<Post_Tags_Inc_Input>;
  _set?: InputMaybe<Post_Tags_Set_Input>;
  pk_columns: Post_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Tags_ManyArgs = {
  updates: Array<Post_Tags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_ManyArgs = {
  updates: Array<Posts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _inc?: InputMaybe<Profiles_Inc_Input>;
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _inc?: InputMaybe<Profiles_Inc_Input>;
  _set?: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_ManyArgs = {
  updates: Array<Profiles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TagsArgs = {
  _inc?: InputMaybe<Tags_Inc_Input>;
  _set?: InputMaybe<Tags_Set_Input>;
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_By_PkArgs = {
  _inc?: InputMaybe<Tags_Inc_Input>;
  _set?: InputMaybe<Tags_Set_Input>;
  pk_columns: Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_ManyArgs = {
  updates: Array<Tags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VotesArgs = {
  _inc?: InputMaybe<Votes_Inc_Input>;
  _set?: InputMaybe<Votes_Set_Input>;
  where: Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Votes_By_PkArgs = {
  _inc?: InputMaybe<Votes_Inc_Input>;
  _set?: InputMaybe<Votes_Set_Input>;
  pk_columns: Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Votes_ManyArgs = {
  updates: Array<Votes_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "post_scores" */
export type Post_Scores = {
  __typename?: 'post_scores';
  post_id: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
};

export type Post_Scores_Aggregate = {
  __typename?: 'post_scores_aggregate';
  aggregate?: Maybe<Post_Scores_Aggregate_Fields>;
  nodes: Array<Post_Scores>;
};

/** aggregate fields of "post_scores" */
export type Post_Scores_Aggregate_Fields = {
  __typename?: 'post_scores_aggregate_fields';
  avg?: Maybe<Post_Scores_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Scores_Max_Fields>;
  min?: Maybe<Post_Scores_Min_Fields>;
  stddev?: Maybe<Post_Scores_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Scores_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Scores_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Scores_Sum_Fields>;
  var_pop?: Maybe<Post_Scores_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Scores_Var_Samp_Fields>;
  variance?: Maybe<Post_Scores_Variance_Fields>;
};


/** aggregate fields of "post_scores" */
export type Post_Scores_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Scores_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "post_scores" */
export type Post_Scores_Aggregate_Order_By = {
  avg?: InputMaybe<Post_Scores_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Scores_Max_Order_By>;
  min?: InputMaybe<Post_Scores_Min_Order_By>;
  stddev?: InputMaybe<Post_Scores_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Scores_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Scores_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Scores_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Scores_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Scores_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Scores_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Post_Scores_Avg_Fields = {
  __typename?: 'post_scores_avg_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "post_scores" */
export type Post_Scores_Avg_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_scores". All fields are combined with a logical 'AND'. */
export type Post_Scores_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Scores_Bool_Exp>>;
  _not?: InputMaybe<Post_Scores_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Scores_Bool_Exp>>;
  post_id?: InputMaybe<Int_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_scores" */
export enum Post_Scores_Constraint {
  /** unique or primary key constraint on columns "post_id" */
  PostScoresPkey = 'post_scores_pkey'
}

/** input type for incrementing numeric columns in table "post_scores" */
export type Post_Scores_Inc_Input = {
  post_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "post_scores" */
export type Post_Scores_Insert_Input = {
  post_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Post_Scores_Max_Fields = {
  __typename?: 'post_scores_max_fields';
  post_id?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "post_scores" */
export type Post_Scores_Max_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Scores_Min_Fields = {
  __typename?: 'post_scores_min_fields';
  post_id?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "post_scores" */
export type Post_Scores_Min_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post_scores" */
export type Post_Scores_Mutation_Response = {
  __typename?: 'post_scores_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Scores>;
};

/** on_conflict condition type for table "post_scores" */
export type Post_Scores_On_Conflict = {
  constraint: Post_Scores_Constraint;
  update_columns?: Array<Post_Scores_Update_Column>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};

/** Ordering options when selecting data from "post_scores". */
export type Post_Scores_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_scores */
export type Post_Scores_Pk_Columns_Input = {
  post_id: Scalars['Int']['input'];
};

/** select columns of table "post_scores" */
export enum Post_Scores_Select_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  Score = 'score'
}

/** input type for updating data in table "post_scores" */
export type Post_Scores_Set_Input = {
  post_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Post_Scores_Stddev_Fields = {
  __typename?: 'post_scores_stddev_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "post_scores" */
export type Post_Scores_Stddev_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Scores_Stddev_Pop_Fields = {
  __typename?: 'post_scores_stddev_pop_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "post_scores" */
export type Post_Scores_Stddev_Pop_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Scores_Stddev_Samp_Fields = {
  __typename?: 'post_scores_stddev_samp_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "post_scores" */
export type Post_Scores_Stddev_Samp_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "post_scores" */
export type Post_Scores_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Scores_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Scores_Stream_Cursor_Value_Input = {
  post_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Post_Scores_Sum_Fields = {
  __typename?: 'post_scores_sum_fields';
  post_id?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "post_scores" */
export type Post_Scores_Sum_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** update columns of table "post_scores" */
export enum Post_Scores_Update_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  Score = 'score'
}

export type Post_Scores_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Scores_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Scores_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Scores_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Post_Scores_Var_Pop_Fields = {
  __typename?: 'post_scores_var_pop_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "post_scores" */
export type Post_Scores_Var_Pop_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Scores_Var_Samp_Fields = {
  __typename?: 'post_scores_var_samp_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "post_scores" */
export type Post_Scores_Var_Samp_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Scores_Variance_Fields = {
  __typename?: 'post_scores_variance_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "post_scores" */
export type Post_Scores_Variance_Order_By = {
  post_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
};

/** Support M2M relationship between posts and tags. Primary key is composed from (tag_id, post_id) but maybe we want a separate id field for pk? Although it does ensure there are no redundant tags on a post. */
export type Post_Tags = {
  __typename?: 'post_tags';
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int']['output'];
  /** An object relationship */
  tag: Tags;
  tag_id: Scalars['Int']['output'];
};

/** aggregated selection of "post_tags" */
export type Post_Tags_Aggregate = {
  __typename?: 'post_tags_aggregate';
  aggregate?: Maybe<Post_Tags_Aggregate_Fields>;
  nodes: Array<Post_Tags>;
};

export type Post_Tags_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Tags_Aggregate_Bool_Exp_Count>;
};

export type Post_Tags_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Post_Tags_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "post_tags" */
export type Post_Tags_Aggregate_Fields = {
  __typename?: 'post_tags_aggregate_fields';
  avg?: Maybe<Post_Tags_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Tags_Max_Fields>;
  min?: Maybe<Post_Tags_Min_Fields>;
  stddev?: Maybe<Post_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Tags_Sum_Fields>;
  var_pop?: Maybe<Post_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Tags_Var_Samp_Fields>;
  variance?: Maybe<Post_Tags_Variance_Fields>;
};


/** aggregate fields of "post_tags" */
export type Post_Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "post_tags" */
export type Post_Tags_Aggregate_Order_By = {
  avg?: InputMaybe<Post_Tags_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Tags_Max_Order_By>;
  min?: InputMaybe<Post_Tags_Min_Order_By>;
  stddev?: InputMaybe<Post_Tags_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Tags_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Tags_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Tags_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Tags_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_tags" */
export type Post_Tags_Arr_Rel_Insert_Input = {
  data: Array<Post_Tags_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Tags_Avg_Fields = {
  __typename?: 'post_tags_avg_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "post_tags" */
export type Post_Tags_Avg_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_tags". All fields are combined with a logical 'AND'. */
export type Post_Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Tags_Bool_Exp>>;
  _not?: InputMaybe<Post_Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Tags_Bool_Exp>>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Int_Comparison_Exp>;
  tag?: InputMaybe<Tags_Bool_Exp>;
  tag_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_tags" */
export enum Post_Tags_Constraint {
  /** unique or primary key constraint on columns "post_id", "tag_id" */
  PostTagsPkey = 'post_tags_pkey',
  /** unique or primary key constraint on columns "post_id", "tag_id" */
  PostTagsTagIdPostIdKey = 'post_tags_tag_id_post_id_key'
}

/** input type for incrementing numeric columns in table "post_tags" */
export type Post_Tags_Inc_Input = {
  post_id?: InputMaybe<Scalars['Int']['input']>;
  tag_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "post_tags" */
export type Post_Tags_Insert_Input = {
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Tags_Obj_Rel_Insert_Input>;
  tag_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Post_Tags_Max_Fields = {
  __typename?: 'post_tags_max_fields';
  post_id?: Maybe<Scalars['Int']['output']>;
  tag_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "post_tags" */
export type Post_Tags_Max_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Tags_Min_Fields = {
  __typename?: 'post_tags_min_fields';
  post_id?: Maybe<Scalars['Int']['output']>;
  tag_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "post_tags" */
export type Post_Tags_Min_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post_tags" */
export type Post_Tags_Mutation_Response = {
  __typename?: 'post_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Tags>;
};

/** on_conflict condition type for table "post_tags" */
export type Post_Tags_On_Conflict = {
  constraint: Post_Tags_Constraint;
  update_columns?: Array<Post_Tags_Update_Column>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "post_tags". */
export type Post_Tags_Order_By = {
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Tags_Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_tags */
export type Post_Tags_Pk_Columns_Input = {
  post_id: Scalars['Int']['input'];
  tag_id: Scalars['Int']['input'];
};

/** select columns of table "post_tags" */
export enum Post_Tags_Select_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  TagId = 'tag_id'
}

/** input type for updating data in table "post_tags" */
export type Post_Tags_Set_Input = {
  post_id?: InputMaybe<Scalars['Int']['input']>;
  tag_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Post_Tags_Stddev_Fields = {
  __typename?: 'post_tags_stddev_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "post_tags" */
export type Post_Tags_Stddev_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Tags_Stddev_Pop_Fields = {
  __typename?: 'post_tags_stddev_pop_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "post_tags" */
export type Post_Tags_Stddev_Pop_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Tags_Stddev_Samp_Fields = {
  __typename?: 'post_tags_stddev_samp_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "post_tags" */
export type Post_Tags_Stddev_Samp_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "post_tags" */
export type Post_Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Tags_Stream_Cursor_Value_Input = {
  post_id?: InputMaybe<Scalars['Int']['input']>;
  tag_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Post_Tags_Sum_Fields = {
  __typename?: 'post_tags_sum_fields';
  post_id?: Maybe<Scalars['Int']['output']>;
  tag_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "post_tags" */
export type Post_Tags_Sum_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** update columns of table "post_tags" */
export enum Post_Tags_Update_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  TagId = 'tag_id'
}

export type Post_Tags_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Tags_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Tags_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Tags_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Post_Tags_Var_Pop_Fields = {
  __typename?: 'post_tags_var_pop_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "post_tags" */
export type Post_Tags_Var_Pop_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Tags_Var_Samp_Fields = {
  __typename?: 'post_tags_var_samp_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "post_tags" */
export type Post_Tags_Var_Samp_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Tags_Variance_Fields = {
  __typename?: 'post_tags_variance_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "post_tags" */
export type Post_Tags_Variance_Order_By = {
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  body: Scalars['String']['output'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['Int']['output'];
  /** A computed field, executes function "get_post_score" */
  score?: Maybe<Array<Post_Scores>>;
  title: Scalars['String']['output'];
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
  votes_aggregate: Votes_Aggregate;
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsScoreArgs = {
  distinct_on?: InputMaybe<Array<Post_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Scores_Order_By>>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsVotesArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

export type Posts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Posts_Aggregate_Bool_Exp_Count>;
};

export type Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Posts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: InputMaybe<Posts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Posts_Max_Order_By>;
  min?: InputMaybe<Posts_Min_Order_By>;
  stddev?: InputMaybe<Posts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Posts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Posts_Sum_Order_By>;
  var_pop?: InputMaybe<Posts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Posts_Var_Samp_Order_By>;
  variance?: InputMaybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  post_tags?: InputMaybe<Post_Tags_Bool_Exp>;
  post_tags_aggregate?: InputMaybe<Post_Tags_Aggregate_Bool_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profile_id?: InputMaybe<Int_Comparison_Exp>;
  score?: InputMaybe<Post_Scores_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  votes?: InputMaybe<Votes_Bool_Exp>;
  votes_aggregate?: InputMaybe<Votes_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post_tags?: InputMaybe<Post_Tags_Arr_Rel_Insert_Input>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Votes_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  body?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_tags_aggregate?: InputMaybe<Post_Tags_Aggregate_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  score_aggregate?: InputMaybe<Post_Scores_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  votes_aggregate?: InputMaybe<Votes_Aggregate_Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "posts" */
export type Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Posts_Stream_Cursor_Value_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Title = 'title'
}

export type Posts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Posts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Posts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Posts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles';
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  reputation: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['String']['output'];
  username: Scalars['String']['output'];
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
  votes_aggregate: Votes_Aggregate;
};


/** columns and relationships of "profiles" */
export type ProfilesCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesVotesArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields';
  avg?: Maybe<Profiles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
  stddev?: Maybe<Profiles_Stddev_Fields>;
  stddev_pop?: Maybe<Profiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profiles_Stddev_Samp_Fields>;
  sum?: Maybe<Profiles_Sum_Fields>;
  var_pop?: Maybe<Profiles_Var_Pop_Fields>;
  var_samp?: Maybe<Profiles_Var_Samp_Fields>;
  variance?: Maybe<Profiles_Variance_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Profiles_Avg_Fields = {
  __typename?: 'profiles_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>;
  reputation?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  votes?: InputMaybe<Votes_Bool_Exp>;
  votes_aggregate?: InputMaybe<Votes_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfilesPkey = 'profiles_pkey',
  /** unique or primary key constraint on columns "user_id" */
  ProfilesUserIdKey = 'profiles_user_id_key',
  /** unique or primary key constraint on columns "username" */
  ProfilesUsernameKey = 'profiles_username_key'
}

/** input type for incrementing numeric columns in table "profiles" */
export type Profiles_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  reputation?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  reputation?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Votes_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  reputation?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  reputation?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** input type for inserting object relation for remote table "profiles" */
export type Profiles_Obj_Rel_Insert_Input = {
  data: Profiles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};

/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  reputation?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  votes_aggregate?: InputMaybe<Votes_Aggregate_Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Reputation = 'reputation',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  reputation?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Profiles_Stddev_Fields = {
  __typename?: 'profiles_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Profiles_Stddev_Pop_Fields = {
  __typename?: 'profiles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Profiles_Stddev_Samp_Fields = {
  __typename?: 'profiles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "profiles" */
export type Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  reputation?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Profiles_Sum_Fields = {
  __typename?: 'profiles_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  reputation?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Reputation = 'reputation',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

export type Profiles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Profiles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profiles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profiles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Profiles_Var_Pop_Fields = {
  __typename?: 'profiles_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Profiles_Var_Samp_Fields = {
  __typename?: 'profiles_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Profiles_Variance_Fields = {
  __typename?: 'profiles_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reputation?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "comment_scores" */
  comment_scores: Array<Comment_Scores>;
  /** fetch aggregated fields from the table: "comment_scores" */
  comment_scores_aggregate: Comment_Scores_Aggregate;
  /** fetch data from the table: "comment_scores" using primary key columns */
  comment_scores_by_pk?: Maybe<Comment_Scores>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** execute function "get_comment_score" which returns "comment_scores" */
  get_comment_score: Array<Comment_Scores>;
  /** execute function "get_comment_score" and query aggregates on result of table type "comment_scores" */
  get_comment_score_aggregate: Comment_Scores_Aggregate;
  /** execute function "get_post_score" which returns "post_scores" */
  get_post_score: Array<Post_Scores>;
  /** execute function "get_post_score" and query aggregates on result of table type "post_scores" */
  get_post_score_aggregate: Post_Scores_Aggregate;
  /** fetch data from the table: "post_scores" */
  post_scores: Array<Post_Scores>;
  /** fetch aggregated fields from the table: "post_scores" */
  post_scores_aggregate: Post_Scores_Aggregate;
  /** fetch data from the table: "post_scores" using primary key columns */
  post_scores_by_pk?: Maybe<Post_Scores>;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
  votes_aggregate: Votes_Aggregate;
  /** fetch data from the table: "votes" using primary key columns */
  votes_by_pk?: Maybe<Votes>;
};


export type Query_RootComment_ScoresArgs = {
  distinct_on?: InputMaybe<Array<Comment_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Scores_Order_By>>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};


export type Query_RootComment_Scores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Scores_Order_By>>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};


export type Query_RootComment_Scores_By_PkArgs = {
  comment_id: Scalars['Int']['input'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGet_Comment_ScoreArgs = {
  args: Get_Comment_Score_Args;
  distinct_on?: InputMaybe<Array<Comment_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Scores_Order_By>>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};


export type Query_RootGet_Comment_Score_AggregateArgs = {
  args: Get_Comment_Score_Args;
  distinct_on?: InputMaybe<Array<Comment_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Scores_Order_By>>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};


export type Query_RootGet_Post_ScoreArgs = {
  args: Get_Post_Score_Args;
  distinct_on?: InputMaybe<Array<Post_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Scores_Order_By>>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};


export type Query_RootGet_Post_Score_AggregateArgs = {
  args: Get_Post_Score_Args;
  distinct_on?: InputMaybe<Array<Post_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Scores_Order_By>>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};


export type Query_RootPost_ScoresArgs = {
  distinct_on?: InputMaybe<Array<Post_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Scores_Order_By>>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};


export type Query_RootPost_Scores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Scores_Order_By>>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};


export type Query_RootPost_Scores_By_PkArgs = {
  post_id: Scalars['Int']['input'];
};


export type Query_RootPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


export type Query_RootPost_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


export type Query_RootPost_Tags_By_PkArgs = {
  post_id: Scalars['Int']['input'];
  tag_id: Scalars['Int']['input'];
};


export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootVotesArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


export type Query_RootVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


export type Query_RootVotes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "comment_scores" */
  comment_scores: Array<Comment_Scores>;
  /** fetch aggregated fields from the table: "comment_scores" */
  comment_scores_aggregate: Comment_Scores_Aggregate;
  /** fetch data from the table: "comment_scores" using primary key columns */
  comment_scores_by_pk?: Maybe<Comment_Scores>;
  /** fetch data from the table in a streaming manner: "comment_scores" */
  comment_scores_stream: Array<Comment_Scores>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table in a streaming manner: "comments" */
  comments_stream: Array<Comments>;
  /** execute function "get_comment_score" which returns "comment_scores" */
  get_comment_score: Array<Comment_Scores>;
  /** execute function "get_comment_score" and query aggregates on result of table type "comment_scores" */
  get_comment_score_aggregate: Comment_Scores_Aggregate;
  /** execute function "get_post_score" which returns "post_scores" */
  get_post_score: Array<Post_Scores>;
  /** execute function "get_post_score" and query aggregates on result of table type "post_scores" */
  get_post_score_aggregate: Post_Scores_Aggregate;
  /** fetch data from the table: "post_scores" */
  post_scores: Array<Post_Scores>;
  /** fetch aggregated fields from the table: "post_scores" */
  post_scores_aggregate: Post_Scores_Aggregate;
  /** fetch data from the table: "post_scores" using primary key columns */
  post_scores_by_pk?: Maybe<Post_Scores>;
  /** fetch data from the table in a streaming manner: "post_scores" */
  post_scores_stream: Array<Post_Scores>;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>;
  /** fetch data from the table in a streaming manner: "post_tags" */
  post_tags_stream: Array<Post_Tags>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table in a streaming manner: "posts" */
  posts_stream: Array<Posts>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table in a streaming manner: "profiles" */
  profiles_stream: Array<Profiles>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table in a streaming manner: "tags" */
  tags_stream: Array<Tags>;
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
  votes_aggregate: Votes_Aggregate;
  /** fetch data from the table: "votes" using primary key columns */
  votes_by_pk?: Maybe<Votes>;
  /** fetch data from the table in a streaming manner: "votes" */
  votes_stream: Array<Votes>;
};


export type Subscription_RootComment_ScoresArgs = {
  distinct_on?: InputMaybe<Array<Comment_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Scores_Order_By>>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};


export type Subscription_RootComment_Scores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Scores_Order_By>>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};


export type Subscription_RootComment_Scores_By_PkArgs = {
  comment_id: Scalars['Int']['input'];
};


export type Subscription_RootComment_Scores_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Comment_Scores_Stream_Cursor_Input>>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootComments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootGet_Comment_ScoreArgs = {
  args: Get_Comment_Score_Args;
  distinct_on?: InputMaybe<Array<Comment_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Scores_Order_By>>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};


export type Subscription_RootGet_Comment_Score_AggregateArgs = {
  args: Get_Comment_Score_Args;
  distinct_on?: InputMaybe<Array<Comment_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Scores_Order_By>>;
  where?: InputMaybe<Comment_Scores_Bool_Exp>;
};


export type Subscription_RootGet_Post_ScoreArgs = {
  args: Get_Post_Score_Args;
  distinct_on?: InputMaybe<Array<Post_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Scores_Order_By>>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};


export type Subscription_RootGet_Post_Score_AggregateArgs = {
  args: Get_Post_Score_Args;
  distinct_on?: InputMaybe<Array<Post_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Scores_Order_By>>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};


export type Subscription_RootPost_ScoresArgs = {
  distinct_on?: InputMaybe<Array<Post_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Scores_Order_By>>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};


export type Subscription_RootPost_Scores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Scores_Order_By>>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};


export type Subscription_RootPost_Scores_By_PkArgs = {
  post_id: Scalars['Int']['input'];
};


export type Subscription_RootPost_Scores_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Scores_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Scores_Bool_Exp>;
};


export type Subscription_RootPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


export type Subscription_RootPost_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


export type Subscription_RootPost_Tags_By_PkArgs = {
  post_id: Scalars['Int']['input'];
  tag_id: Scalars['Int']['input'];
};


export type Subscription_RootPost_Tags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPosts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProfiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootVotesArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


export type Subscription_RootVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


export type Subscription_RootVotes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootVotes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Votes_Stream_Cursor_Input>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};

/** Tags for posts. Tag names are unique. Do we need categories as well, or are tags sufficient? */
export type Tags = {
  __typename?: 'tags';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
};


/** Tags for posts. Tag names are unique. Do we need categories as well, or are tags sufficient? */
export type TagsPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


/** Tags for posts. Tag names are unique. Do we need categories as well, or are tags sufficient? */
export type TagsPost_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};

/** aggregated selection of "tags" */
export type Tags_Aggregate = {
  __typename?: 'tags_aggregate';
  aggregate?: Maybe<Tags_Aggregate_Fields>;
  nodes: Array<Tags>;
};

/** aggregate fields of "tags" */
export type Tags_Aggregate_Fields = {
  __typename?: 'tags_aggregate_fields';
  avg?: Maybe<Tags_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Tags_Max_Fields>;
  min?: Maybe<Tags_Min_Fields>;
  stddev?: Maybe<Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Tags_Sum_Fields>;
  var_pop?: Maybe<Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Tags_Var_Samp_Fields>;
  variance?: Maybe<Tags_Variance_Fields>;
};


/** aggregate fields of "tags" */
export type Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Tags_Avg_Fields = {
  __typename?: 'tags_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Tags_Bool_Exp>>;
  _not?: InputMaybe<Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Tags_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  post_tags?: InputMaybe<Post_Tags_Bool_Exp>;
  post_tags_aggregate?: InputMaybe<Post_Tags_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint on columns "name" */
  TagsNameKey = 'tags_name_key',
  /** unique or primary key constraint on columns "id" */
  TagsPkey = 'tags_pkey'
}

/** input type for incrementing numeric columns in table "tags" */
export type Tags_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  post_tags?: InputMaybe<Post_Tags_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tags_Max_Fields = {
  __typename?: 'tags_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Tags_Min_Fields = {
  __typename?: 'tags_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
  __typename?: 'tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tags>;
};

/** input type for inserting object relation for remote table "tags" */
export type Tags_Obj_Rel_Insert_Input = {
  data: Tags_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};

/** on_conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint;
  update_columns?: Array<Tags_Update_Column>;
  where?: InputMaybe<Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "tags". */
export type Tags_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  post_tags_aggregate?: InputMaybe<Post_Tags_Aggregate_Order_By>;
};

/** primary key columns input for table: tags */
export type Tags_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "tags" */
export type Tags_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Tags_Stddev_Fields = {
  __typename?: 'tags_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Tags_Stddev_Pop_Fields = {
  __typename?: 'tags_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Tags_Stddev_Samp_Fields = {
  __typename?: 'tags_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "tags" */
export type Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tags_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Tags_Sum_Fields = {
  __typename?: 'tags_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "tags" */
export enum Tags_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Tags_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tags_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tags_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tags_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tags_Var_Pop_Fields = {
  __typename?: 'tags_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Tags_Var_Samp_Fields = {
  __typename?: 'tags_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Tags_Variance_Fields = {
  __typename?: 'tags_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Up or down vote on a post or comment. Maximum one vote per user, per post or comment enforced by posts_votes or comment_votes pk. Will need to ensure that the post or comment score is updated properly when a user changes their vote. I think the score can be incremented / decremented just fine. Not sure yet whether up votes should be deleted when the user changes their mind and down votes and vice versa, or if the boolean value for up can be flipped. */
export type Votes = {
  __typename?: 'votes';
  /** An object relationship */
  comment?: Maybe<Comments>;
  comment_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  post?: Maybe<Posts>;
  post_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

/** aggregated selection of "votes" */
export type Votes_Aggregate = {
  __typename?: 'votes_aggregate';
  aggregate?: Maybe<Votes_Aggregate_Fields>;
  nodes: Array<Votes>;
};

export type Votes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Votes_Aggregate_Bool_Exp_Count>;
};

export type Votes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Votes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "votes" */
export type Votes_Aggregate_Fields = {
  __typename?: 'votes_aggregate_fields';
  avg?: Maybe<Votes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Votes_Max_Fields>;
  min?: Maybe<Votes_Min_Fields>;
  stddev?: Maybe<Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Votes_Sum_Fields>;
  var_pop?: Maybe<Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Votes_Var_Samp_Fields>;
  variance?: Maybe<Votes_Variance_Fields>;
};


/** aggregate fields of "votes" */
export type Votes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "votes" */
export type Votes_Aggregate_Order_By = {
  avg?: InputMaybe<Votes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Votes_Max_Order_By>;
  min?: InputMaybe<Votes_Min_Order_By>;
  stddev?: InputMaybe<Votes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Votes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Votes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Votes_Sum_Order_By>;
  var_pop?: InputMaybe<Votes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Votes_Var_Samp_Order_By>;
  variance?: InputMaybe<Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "votes" */
export type Votes_Arr_Rel_Insert_Input = {
  data: Array<Votes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Votes_Avg_Fields = {
  __typename?: 'votes_avg_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "votes" */
export type Votes_Avg_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "votes". All fields are combined with a logical 'AND'. */
export type Votes_Bool_Exp = {
  _and?: InputMaybe<Array<Votes_Bool_Exp>>;
  _not?: InputMaybe<Votes_Bool_Exp>;
  _or?: InputMaybe<Array<Votes_Bool_Exp>>;
  comment?: InputMaybe<Comments_Bool_Exp>;
  comment_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profile_id?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "votes" */
export enum Votes_Constraint {
  /** unique or primary key constraint on columns "id" */
  VotesPkey = 'votes_pkey',
  /** unique or primary key constraint on columns "profile_id", "post_id" */
  VotesPostIdProfileIdKey = 'votes_post_id_profile_id_key'
}

/** input type for incrementing numeric columns in table "votes" */
export type Votes_Inc_Input = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "votes" */
export type Votes_Insert_Input = {
  comment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Votes_Max_Fields = {
  __typename?: 'votes_max_fields';
  comment_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  post_id?: Maybe<Scalars['Int']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "votes" */
export type Votes_Max_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Votes_Min_Fields = {
  __typename?: 'votes_min_fields';
  comment_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  post_id?: Maybe<Scalars['Int']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "votes" */
export type Votes_Min_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "votes" */
export type Votes_Mutation_Response = {
  __typename?: 'votes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Votes>;
};

/** on_conflict condition type for table "votes" */
export type Votes_On_Conflict = {
  constraint: Votes_Constraint;
  update_columns?: Array<Votes_Update_Column>;
  where?: InputMaybe<Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "votes". */
export type Votes_Order_By = {
  comment?: InputMaybe<Comments_Order_By>;
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: votes */
export type Votes_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "votes" */
export enum Votes_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "votes" */
export type Votes_Set_Input = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Votes_Stddev_Fields = {
  __typename?: 'votes_stddev_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "votes" */
export type Votes_Stddev_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Votes_Stddev_Pop_Fields = {
  __typename?: 'votes_stddev_pop_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "votes" */
export type Votes_Stddev_Pop_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Votes_Stddev_Samp_Fields = {
  __typename?: 'votes_stddev_samp_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "votes" */
export type Votes_Stddev_Samp_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "votes" */
export type Votes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Votes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Votes_Stream_Cursor_Value_Input = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Votes_Sum_Fields = {
  __typename?: 'votes_sum_fields';
  comment_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  post_id?: Maybe<Scalars['Int']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "votes" */
export type Votes_Sum_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** update columns of table "votes" */
export enum Votes_Update_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Value = 'value'
}

export type Votes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Votes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Votes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Votes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Votes_Var_Pop_Fields = {
  __typename?: 'votes_var_pop_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "votes" */
export type Votes_Var_Pop_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Votes_Var_Samp_Fields = {
  __typename?: 'votes_var_samp_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "votes" */
export type Votes_Var_Samp_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Votes_Variance_Fields = {
  __typename?: 'votes_variance_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "votes" */
export type Votes_Variance_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

export type ListPostsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ListPostsSubscription = { __typename?: 'subscription_root', posts: Array<{ __typename?: 'posts', id: number, title: string, body: string, created_at: any, score?: Array<{ __typename?: 'post_scores', score: number }> | null, profile: { __typename?: 'profiles', id: number, username: string, reputation: number }, votes: Array<{ __typename?: 'votes', profile_id: number, value: number }> }> };

export type GetPostSubscriptionVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetPostSubscription = { __typename?: 'subscription_root', posts_by_pk?: { __typename?: 'posts', id: number, title: string, body: string, created_at: any, score?: Array<{ __typename?: 'post_scores', score: number }> | null, profile: { __typename?: 'profiles', id: number, username: string, reputation: number }, comments: Array<{ __typename?: 'comments', id: number, post_id: number, parent_comment_id?: number | null, body: string, created_at: any, accepted_answer: boolean, score?: Array<{ __typename?: 'comment_scores', score: number }> | null, profile: { __typename?: 'profiles', id: number, username: string, reputation: number }, votes: Array<{ __typename?: 'votes', profile_id: number, value: number }> }>, votes: Array<{ __typename?: 'votes', profile_id: number, value: number }> } | null };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String']['input'];
  body: Scalars['String']['input'];
  profile_id: Scalars['Int']['input'];
}>;


export type CreatePostMutation = { __typename?: 'mutation_root', insert_posts_one?: { __typename?: 'posts', title: string, body: string } | null };

export type CommentOnPostMutationVariables = Exact<{
  post_id: Scalars['Int']['input'];
  body: Scalars['String']['input'];
  profile_id: Scalars['Int']['input'];
  parent_comment_id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CommentOnPostMutation = { __typename?: 'mutation_root', insert_comments_one?: { __typename?: 'comments', body: string } | null };

export type GetProfileByUserIdQueryVariables = Exact<{
  user_id: Scalars['String']['input'];
}>;


export type GetProfileByUserIdQuery = { __typename?: 'query_root', profiles: Array<{ __typename?: 'profiles', id: number, user_id: string, username: string }> };

export type CreateProfileMutationVariables = Exact<{
  username: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
}>;


export type CreateProfileMutation = { __typename?: 'mutation_root', insert_profiles_one?: { __typename?: 'profiles', id: number, username: string, user_id: string } | null };

export type VoteOnPostMutationVariables = Exact<{
  profile_id: Scalars['Int']['input'];
  post_id: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
}>;


export type VoteOnPostMutation = { __typename?: 'mutation_root', create_or_update_vote: Array<{ __typename?: 'votes', id: number, post_id?: number | null, profile_id: number, value: number }> };

export type VoteOnCommentMutationVariables = Exact<{
  profile_id: Scalars['Int']['input'];
  comment_id: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
}>;


export type VoteOnCommentMutation = { __typename?: 'mutation_root', create_or_update_vote_on_comment: Array<{ __typename?: 'votes', id: number, comment_id?: number | null, profile_id: number, value: number }> };

export type DeleteVoteOnPostMutationVariables = Exact<{
  post_id: Scalars['Int']['input'];
  profile_id: Scalars['Int']['input'];
}>;


export type DeleteVoteOnPostMutation = { __typename?: 'mutation_root', delete_votes?: { __typename?: 'votes_mutation_response', affected_rows: number } | null };

export type DeleteVoteOnCommentMutationVariables = Exact<{
  comment_id: Scalars['Int']['input'];
  profile_id: Scalars['Int']['input'];
}>;


export type DeleteVoteOnCommentMutation = { __typename?: 'mutation_root', delete_votes?: { __typename?: 'votes_mutation_response', affected_rows: number } | null };


export const ListPostsDocument = gql`
    subscription ListPosts {
  posts {
    id
    title
    body
    created_at
    score {
      score
    }
    profile {
      id
      username
      reputation
    }
    votes {
      profile_id
      value
    }
  }
}
    `;

/**
 * __useListPostsSubscription__
 *
 * To run a query within a React component, call `useListPostsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useListPostsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPostsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useListPostsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ListPostsSubscription, ListPostsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ListPostsSubscription, ListPostsSubscriptionVariables>(ListPostsDocument, options);
      }
export type ListPostsSubscriptionHookResult = ReturnType<typeof useListPostsSubscription>;
export type ListPostsSubscriptionResult = Apollo.SubscriptionResult<ListPostsSubscription>;
export const GetPostDocument = gql`
    subscription GetPost($id: Int!) {
  posts_by_pk(id: $id) {
    id
    title
    body
    created_at
    score {
      score
    }
    profile {
      id
      username
      reputation
    }
    comments {
      id
      post_id
      parent_comment_id
      body
      score {
        score
      }
      created_at
      accepted_answer
      profile {
        id
        username
        reputation
      }
      votes {
        profile_id
        value
      }
    }
    votes {
      profile_id
      value
    }
  }
}
    `;

/**
 * __useGetPostSubscription__
 *
 * To run a query within a React component, call `useGetPostSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetPostSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetPostSubscription, GetPostSubscriptionVariables> & ({ variables: GetPostSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetPostSubscription, GetPostSubscriptionVariables>(GetPostDocument, options);
      }
export type GetPostSubscriptionHookResult = ReturnType<typeof useGetPostSubscription>;
export type GetPostSubscriptionResult = Apollo.SubscriptionResult<GetPostSubscription>;
export const CreatePostDocument = gql`
    mutation CreatePost($title: String!, $body: String!, $profile_id: Int!) {
  insert_posts_one(object: {title: $title, body: $body, profile_id: $profile_id}) {
    title
    body
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      profile_id: // value for 'profile_id'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const CommentOnPostDocument = gql`
    mutation CommentOnPost($post_id: Int!, $body: String!, $profile_id: Int!, $parent_comment_id: Int) {
  insert_comments_one(
    object: {post_id: $post_id, body: $body, profile_id: $profile_id, parent_comment_id: $parent_comment_id}
  ) {
    body
  }
}
    `;
export type CommentOnPostMutationFn = Apollo.MutationFunction<CommentOnPostMutation, CommentOnPostMutationVariables>;

/**
 * __useCommentOnPostMutation__
 *
 * To run a mutation, you first call `useCommentOnPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommentOnPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commentOnPostMutation, { data, loading, error }] = useCommentOnPostMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *      body: // value for 'body'
 *      profile_id: // value for 'profile_id'
 *      parent_comment_id: // value for 'parent_comment_id'
 *   },
 * });
 */
export function useCommentOnPostMutation(baseOptions?: Apollo.MutationHookOptions<CommentOnPostMutation, CommentOnPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CommentOnPostMutation, CommentOnPostMutationVariables>(CommentOnPostDocument, options);
      }
export type CommentOnPostMutationHookResult = ReturnType<typeof useCommentOnPostMutation>;
export type CommentOnPostMutationResult = Apollo.MutationResult<CommentOnPostMutation>;
export type CommentOnPostMutationOptions = Apollo.BaseMutationOptions<CommentOnPostMutation, CommentOnPostMutationVariables>;
export const GetProfileByUserIdDocument = gql`
    query GetProfileByUserId($user_id: String!) {
  profiles(distinct_on: user_id, limit: 1, where: {user_id: {_eq: $user_id}}) {
    id
    user_id
    username
  }
}
    `;

/**
 * __useGetProfileByUserIdQuery__
 *
 * To run a query within a React component, call `useGetProfileByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileByUserIdQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetProfileByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables> & ({ variables: GetProfileByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>(GetProfileByUserIdDocument, options);
      }
export function useGetProfileByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>(GetProfileByUserIdDocument, options);
        }
export function useGetProfileByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>(GetProfileByUserIdDocument, options);
        }
export type GetProfileByUserIdQueryHookResult = ReturnType<typeof useGetProfileByUserIdQuery>;
export type GetProfileByUserIdLazyQueryHookResult = ReturnType<typeof useGetProfileByUserIdLazyQuery>;
export type GetProfileByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetProfileByUserIdSuspenseQuery>;
export type GetProfileByUserIdQueryResult = Apollo.QueryResult<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>;
export const CreateProfileDocument = gql`
    mutation CreateProfile($username: String!, $user_id: String!) {
  insert_profiles_one(object: {username: $username, user_id: $user_id}) {
    id
    username
    user_id
  }
}
    `;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      username: // value for 'username'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, options);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const VoteOnPostDocument = gql`
    mutation VoteOnPost($profile_id: Int!, $post_id: Int!, $value: Int!) {
  create_or_update_vote(
    args: {p_post_id: $post_id, p_profile_id: $profile_id, p_value: $value}
  ) {
    id
    post_id
    profile_id
    value
  }
}
    `;
export type VoteOnPostMutationFn = Apollo.MutationFunction<VoteOnPostMutation, VoteOnPostMutationVariables>;

/**
 * __useVoteOnPostMutation__
 *
 * To run a mutation, you first call `useVoteOnPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteOnPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteOnPostMutation, { data, loading, error }] = useVoteOnPostMutation({
 *   variables: {
 *      profile_id: // value for 'profile_id'
 *      post_id: // value for 'post_id'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useVoteOnPostMutation(baseOptions?: Apollo.MutationHookOptions<VoteOnPostMutation, VoteOnPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteOnPostMutation, VoteOnPostMutationVariables>(VoteOnPostDocument, options);
      }
export type VoteOnPostMutationHookResult = ReturnType<typeof useVoteOnPostMutation>;
export type VoteOnPostMutationResult = Apollo.MutationResult<VoteOnPostMutation>;
export type VoteOnPostMutationOptions = Apollo.BaseMutationOptions<VoteOnPostMutation, VoteOnPostMutationVariables>;
export const VoteOnCommentDocument = gql`
    mutation VoteOnComment($profile_id: Int!, $comment_id: Int!, $value: Int!) {
  create_or_update_vote_on_comment(
    args: {p_comment_id: $comment_id, p_profile_id: $profile_id, p_value: $value}
  ) {
    id
    comment_id
    profile_id
    value
  }
}
    `;
export type VoteOnCommentMutationFn = Apollo.MutationFunction<VoteOnCommentMutation, VoteOnCommentMutationVariables>;

/**
 * __useVoteOnCommentMutation__
 *
 * To run a mutation, you first call `useVoteOnCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteOnCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteOnCommentMutation, { data, loading, error }] = useVoteOnCommentMutation({
 *   variables: {
 *      profile_id: // value for 'profile_id'
 *      comment_id: // value for 'comment_id'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useVoteOnCommentMutation(baseOptions?: Apollo.MutationHookOptions<VoteOnCommentMutation, VoteOnCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteOnCommentMutation, VoteOnCommentMutationVariables>(VoteOnCommentDocument, options);
      }
export type VoteOnCommentMutationHookResult = ReturnType<typeof useVoteOnCommentMutation>;
export type VoteOnCommentMutationResult = Apollo.MutationResult<VoteOnCommentMutation>;
export type VoteOnCommentMutationOptions = Apollo.BaseMutationOptions<VoteOnCommentMutation, VoteOnCommentMutationVariables>;
export const DeleteVoteOnPostDocument = gql`
    mutation DeleteVoteOnPost($post_id: Int!, $profile_id: Int!) {
  delete_votes(where: {post_id: {_eq: $post_id}, profile_id: {_eq: $profile_id}}) {
    affected_rows
  }
}
    `;
export type DeleteVoteOnPostMutationFn = Apollo.MutationFunction<DeleteVoteOnPostMutation, DeleteVoteOnPostMutationVariables>;

/**
 * __useDeleteVoteOnPostMutation__
 *
 * To run a mutation, you first call `useDeleteVoteOnPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVoteOnPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVoteOnPostMutation, { data, loading, error }] = useDeleteVoteOnPostMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *      profile_id: // value for 'profile_id'
 *   },
 * });
 */
export function useDeleteVoteOnPostMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVoteOnPostMutation, DeleteVoteOnPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVoteOnPostMutation, DeleteVoteOnPostMutationVariables>(DeleteVoteOnPostDocument, options);
      }
export type DeleteVoteOnPostMutationHookResult = ReturnType<typeof useDeleteVoteOnPostMutation>;
export type DeleteVoteOnPostMutationResult = Apollo.MutationResult<DeleteVoteOnPostMutation>;
export type DeleteVoteOnPostMutationOptions = Apollo.BaseMutationOptions<DeleteVoteOnPostMutation, DeleteVoteOnPostMutationVariables>;
export const DeleteVoteOnCommentDocument = gql`
    mutation DeleteVoteOnComment($comment_id: Int!, $profile_id: Int!) {
  delete_votes(
    where: {comment_id: {_eq: $comment_id}, profile_id: {_eq: $profile_id}}
  ) {
    affected_rows
  }
}
    `;
export type DeleteVoteOnCommentMutationFn = Apollo.MutationFunction<DeleteVoteOnCommentMutation, DeleteVoteOnCommentMutationVariables>;

/**
 * __useDeleteVoteOnCommentMutation__
 *
 * To run a mutation, you first call `useDeleteVoteOnCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVoteOnCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVoteOnCommentMutation, { data, loading, error }] = useDeleteVoteOnCommentMutation({
 *   variables: {
 *      comment_id: // value for 'comment_id'
 *      profile_id: // value for 'profile_id'
 *   },
 * });
 */
export function useDeleteVoteOnCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVoteOnCommentMutation, DeleteVoteOnCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVoteOnCommentMutation, DeleteVoteOnCommentMutationVariables>(DeleteVoteOnCommentDocument, options);
      }
export type DeleteVoteOnCommentMutationHookResult = ReturnType<typeof useDeleteVoteOnCommentMutation>;
export type DeleteVoteOnCommentMutationResult = Apollo.MutationResult<DeleteVoteOnCommentMutation>;
export type DeleteVoteOnCommentMutationOptions = Apollo.BaseMutationOptions<DeleteVoteOnCommentMutation, DeleteVoteOnCommentMutationVariables>;