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

/** Support M2M relationship between comments and votes. I composed pk from (comment_id, vote_id) but maybe we just want a separate id field? Although it does ensure maximum one vote per user, per comment. */
export type Comment_Votes = {
  __typename?: 'comment_votes';
  /** An object relationship */
  comment: Comments;
  comment_id: Scalars['Int']['output'];
  /** An object relationship */
  vote: Votes;
  vote_id: Scalars['Int']['output'];
};

/** aggregated selection of "comment_votes" */
export type Comment_Votes_Aggregate = {
  __typename?: 'comment_votes_aggregate';
  aggregate?: Maybe<Comment_Votes_Aggregate_Fields>;
  nodes: Array<Comment_Votes>;
};

export type Comment_Votes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Comment_Votes_Aggregate_Bool_Exp_Count>;
};

export type Comment_Votes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comment_Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Comment_Votes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "comment_votes" */
export type Comment_Votes_Aggregate_Fields = {
  __typename?: 'comment_votes_aggregate_fields';
  avg?: Maybe<Comment_Votes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Comment_Votes_Max_Fields>;
  min?: Maybe<Comment_Votes_Min_Fields>;
  stddev?: Maybe<Comment_Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Votes_Sum_Fields>;
  var_pop?: Maybe<Comment_Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Votes_Var_Samp_Fields>;
  variance?: Maybe<Comment_Votes_Variance_Fields>;
};


/** aggregate fields of "comment_votes" */
export type Comment_Votes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comment_Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comment_votes" */
export type Comment_Votes_Aggregate_Order_By = {
  avg?: InputMaybe<Comment_Votes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comment_Votes_Max_Order_By>;
  min?: InputMaybe<Comment_Votes_Min_Order_By>;
  stddev?: InputMaybe<Comment_Votes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comment_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comment_Votes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comment_Votes_Sum_Order_By>;
  var_pop?: InputMaybe<Comment_Votes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comment_Votes_Var_Samp_Order_By>;
  variance?: InputMaybe<Comment_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comment_votes" */
export type Comment_Votes_Arr_Rel_Insert_Input = {
  data: Array<Comment_Votes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Comment_Votes_Avg_Fields = {
  __typename?: 'comment_votes_avg_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "comment_votes" */
export type Comment_Votes_Avg_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comment_votes". All fields are combined with a logical 'AND'. */
export type Comment_Votes_Bool_Exp = {
  _and?: InputMaybe<Array<Comment_Votes_Bool_Exp>>;
  _not?: InputMaybe<Comment_Votes_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Votes_Bool_Exp>>;
  comment?: InputMaybe<Comments_Bool_Exp>;
  comment_id?: InputMaybe<Int_Comparison_Exp>;
  vote?: InputMaybe<Votes_Bool_Exp>;
  vote_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "comment_votes" */
export enum Comment_Votes_Constraint {
  /** unique or primary key constraint on columns "comment_id", "vote_id" */
  CommentVotesCommentIdVoteIdKey = 'comment_votes_comment_id_vote_id_key',
  /** unique or primary key constraint on columns "comment_id", "vote_id" */
  CommentVotesPkey = 'comment_votes_pkey'
}

/** input type for incrementing numeric columns in table "comment_votes" */
export type Comment_Votes_Inc_Input = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  vote_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "comment_votes" */
export type Comment_Votes_Insert_Input = {
  comment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  vote?: InputMaybe<Votes_Obj_Rel_Insert_Input>;
  vote_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Comment_Votes_Max_Fields = {
  __typename?: 'comment_votes_max_fields';
  comment_id?: Maybe<Scalars['Int']['output']>;
  vote_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "comment_votes" */
export type Comment_Votes_Max_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Votes_Min_Fields = {
  __typename?: 'comment_votes_min_fields';
  comment_id?: Maybe<Scalars['Int']['output']>;
  vote_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "comment_votes" */
export type Comment_Votes_Min_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comment_votes" */
export type Comment_Votes_Mutation_Response = {
  __typename?: 'comment_votes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Comment_Votes>;
};

/** on_conflict condition type for table "comment_votes" */
export type Comment_Votes_On_Conflict = {
  constraint: Comment_Votes_Constraint;
  update_columns?: Array<Comment_Votes_Update_Column>;
  where?: InputMaybe<Comment_Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "comment_votes". */
export type Comment_Votes_Order_By = {
  comment?: InputMaybe<Comments_Order_By>;
  comment_id?: InputMaybe<Order_By>;
  vote?: InputMaybe<Votes_Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comment_votes */
export type Comment_Votes_Pk_Columns_Input = {
  comment_id: Scalars['Int']['input'];
  vote_id: Scalars['Int']['input'];
};

/** select columns of table "comment_votes" */
export enum Comment_Votes_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  VoteId = 'vote_id'
}

/** input type for updating data in table "comment_votes" */
export type Comment_Votes_Set_Input = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  vote_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Comment_Votes_Stddev_Fields = {
  __typename?: 'comment_votes_stddev_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "comment_votes" */
export type Comment_Votes_Stddev_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Votes_Stddev_Pop_Fields = {
  __typename?: 'comment_votes_stddev_pop_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "comment_votes" */
export type Comment_Votes_Stddev_Pop_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Votes_Stddev_Samp_Fields = {
  __typename?: 'comment_votes_stddev_samp_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "comment_votes" */
export type Comment_Votes_Stddev_Samp_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "comment_votes" */
export type Comment_Votes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comment_Votes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comment_Votes_Stream_Cursor_Value_Input = {
  comment_id?: InputMaybe<Scalars['Int']['input']>;
  vote_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Comment_Votes_Sum_Fields = {
  __typename?: 'comment_votes_sum_fields';
  comment_id?: Maybe<Scalars['Int']['output']>;
  vote_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "comment_votes" */
export type Comment_Votes_Sum_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** update columns of table "comment_votes" */
export enum Comment_Votes_Update_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  VoteId = 'vote_id'
}

export type Comment_Votes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Comment_Votes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comment_Votes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comment_Votes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Comment_Votes_Var_Pop_Fields = {
  __typename?: 'comment_votes_var_pop_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "comment_votes" */
export type Comment_Votes_Var_Pop_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Votes_Var_Samp_Fields = {
  __typename?: 'comment_votes_var_samp_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "comment_votes" */
export type Comment_Votes_Var_Samp_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Votes_Variance_Fields = {
  __typename?: 'comment_votes_variance_fields';
  comment_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "comment_votes" */
export type Comment_Votes_Variance_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type Comments = {
  __typename?: 'comments';
  /** I added this here instead of on posts so a post can have multiple accepted answers. */
  accepted_answer: Scalars['Boolean']['output'];
  /** I'm imagining this would be markdown. */
  body: Scalars['String']['output'];
  /** An array relationship */
  comment_votes: Array<Comment_Votes>;
  /** An aggregate relationship */
  comment_votes_aggregate: Comment_Votes_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  parent_comment?: Maybe<Comments>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int']['output'];
  /** An array relationship */
  responses: Array<Comments>;
  /** An aggregate relationship */
  responses_aggregate: Comments_Aggregate;
  /** sum of up votes - sum of down votes */
  score: Scalars['Int']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']['output']>;
};


/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type CommentsComment_VotesArgs = {
  distinct_on?: InputMaybe<Array<Comment_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Votes_Order_By>>;
  where?: InputMaybe<Comment_Votes_Bool_Exp>;
};


/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type CommentsComment_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Votes_Order_By>>;
  where?: InputMaybe<Comment_Votes_Bool_Exp>;
};


/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type CommentsResponsesArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** Comments made on a post, or in response to another comment. There is a foreign key to posts and an optional self referencing foreign key for the parent comment which may not be ideal. */
export type CommentsResponses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
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
  /** sum of up votes - sum of down votes */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  accepted_answer?: InputMaybe<Boolean_Comparison_Exp>;
  body?: InputMaybe<String_Comparison_Exp>;
  comment_votes?: InputMaybe<Comment_Votes_Bool_Exp>;
  comment_votes_aggregate?: InputMaybe<Comment_Votes_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  parent_comment?: InputMaybe<Comments_Bool_Exp>;
  parent_comment_id?: InputMaybe<Int_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Int_Comparison_Exp>;
  responses?: InputMaybe<Comments_Bool_Exp>;
  responses_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
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
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  /** I added this here instead of on posts so a post can have multiple accepted answers. */
  accepted_answer?: InputMaybe<Scalars['Boolean']['input']>;
  /** I'm imagining this would be markdown. */
  body?: InputMaybe<Scalars['String']['input']>;
  comment_votes?: InputMaybe<Comment_Votes_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  parent_comment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Scalars['Int']['input']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  responses?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
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
  /** sum of up votes - sum of down votes */
  score?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
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
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  /** sum of up votes - sum of down votes */
  score?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
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
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  comment_votes_aggregate?: InputMaybe<Comment_Votes_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_comment?: InputMaybe<Comments_Order_By>;
  parent_comment_id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  responses_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  score?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  Score = 'score',
  /** column name */
  UserId = 'user_id'
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
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
  __typename?: 'comments_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  /** sum of up votes - sum of down votes */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
  __typename?: 'comments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  /** sum of up votes - sum of down votes */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
  __typename?: 'comments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  /** sum of up votes - sum of down votes */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Order_By>;
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
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
  __typename?: 'comments_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Int']['output']>;
  post_id?: Maybe<Scalars['Int']['output']>;
  /** sum of up votes - sum of down votes */
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Order_By>;
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
  Score = 'score',
  /** column name */
  UserId = 'user_id'
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
  /** sum of up votes - sum of down votes */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
  __typename?: 'comments_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  /** sum of up votes - sum of down votes */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
  __typename?: 'comments_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  /** sum of up votes - sum of down votes */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** pk of a comment on a post this was made in response to. */
  parent_comment_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  /** sum of up votes - sum of down votes */
  score?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "comment_votes" */
  delete_comment_votes?: Maybe<Comment_Votes_Mutation_Response>;
  /** delete single row from the table: "comment_votes" */
  delete_comment_votes_by_pk?: Maybe<Comment_Votes>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "post_tags" */
  delete_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** delete single row from the table: "post_tags" */
  delete_post_tags_by_pk?: Maybe<Post_Tags>;
  /** delete data from the table: "post_votes" */
  delete_post_votes?: Maybe<Post_Votes_Mutation_Response>;
  /** delete single row from the table: "post_votes" */
  delete_post_votes_by_pk?: Maybe<Post_Votes>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>;
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "votes" */
  delete_votes?: Maybe<Votes_Mutation_Response>;
  /** delete single row from the table: "votes" */
  delete_votes_by_pk?: Maybe<Votes>;
  /** insert data into the table: "comment_votes" */
  insert_comment_votes?: Maybe<Comment_Votes_Mutation_Response>;
  /** insert a single row into the table: "comment_votes" */
  insert_comment_votes_one?: Maybe<Comment_Votes>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "post_tags" */
  insert_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** insert a single row into the table: "post_tags" */
  insert_post_tags_one?: Maybe<Post_Tags>;
  /** insert data into the table: "post_votes" */
  insert_post_votes?: Maybe<Post_Votes_Mutation_Response>;
  /** insert a single row into the table: "post_votes" */
  insert_post_votes_one?: Maybe<Post_Votes>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "votes" */
  insert_votes?: Maybe<Votes_Mutation_Response>;
  /** insert a single row into the table: "votes" */
  insert_votes_one?: Maybe<Votes>;
  /** update data of the table: "comment_votes" */
  update_comment_votes?: Maybe<Comment_Votes_Mutation_Response>;
  /** update single row of the table: "comment_votes" */
  update_comment_votes_by_pk?: Maybe<Comment_Votes>;
  /** update multiples rows of table: "comment_votes" */
  update_comment_votes_many?: Maybe<Array<Maybe<Comment_Votes_Mutation_Response>>>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  update_comments_many?: Maybe<Array<Maybe<Comments_Mutation_Response>>>;
  /** update data of the table: "post_tags" */
  update_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** update single row of the table: "post_tags" */
  update_post_tags_by_pk?: Maybe<Post_Tags>;
  /** update multiples rows of table: "post_tags" */
  update_post_tags_many?: Maybe<Array<Maybe<Post_Tags_Mutation_Response>>>;
  /** update data of the table: "post_votes" */
  update_post_votes?: Maybe<Post_Votes_Mutation_Response>;
  /** update single row of the table: "post_votes" */
  update_post_votes_by_pk?: Maybe<Post_Votes>;
  /** update multiples rows of table: "post_votes" */
  update_post_votes_many?: Maybe<Array<Maybe<Post_Votes_Mutation_Response>>>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update multiples rows of table: "posts" */
  update_posts_many?: Maybe<Array<Maybe<Posts_Mutation_Response>>>;
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>;
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>;
  /** update multiples rows of table: "tags" */
  update_tags_many?: Maybe<Array<Maybe<Tags_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "votes" */
  update_votes?: Maybe<Votes_Mutation_Response>;
  /** update single row of the table: "votes" */
  update_votes_by_pk?: Maybe<Votes>;
  /** update multiples rows of table: "votes" */
  update_votes_many?: Maybe<Array<Maybe<Votes_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Comment_VotesArgs = {
  where: Comment_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_Votes_By_PkArgs = {
  comment_id: Scalars['Int']['input'];
  vote_id: Scalars['Int']['input'];
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
export type Mutation_RootDelete_Post_TagsArgs = {
  where: Post_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Tags_By_PkArgs = {
  post_id: Scalars['Int']['input'];
  tag_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Post_VotesArgs = {
  where: Post_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Votes_By_PkArgs = {
  post_id: Scalars['Int']['input'];
  vote_id: Scalars['Int']['input'];
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
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
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
export type Mutation_RootInsert_Comment_VotesArgs = {
  objects: Array<Comment_Votes_Insert_Input>;
  on_conflict?: InputMaybe<Comment_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_Votes_OneArgs = {
  object: Comment_Votes_Insert_Input;
  on_conflict?: InputMaybe<Comment_Votes_On_Conflict>;
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
export type Mutation_RootInsert_Post_VotesArgs = {
  objects: Array<Post_Votes_Insert_Input>;
  on_conflict?: InputMaybe<Post_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Votes_OneArgs = {
  object: Post_Votes_Insert_Input;
  on_conflict?: InputMaybe<Post_Votes_On_Conflict>;
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
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
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
export type Mutation_RootUpdate_Comment_VotesArgs = {
  _inc?: InputMaybe<Comment_Votes_Inc_Input>;
  _set?: InputMaybe<Comment_Votes_Set_Input>;
  where: Comment_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_Votes_By_PkArgs = {
  _inc?: InputMaybe<Comment_Votes_Inc_Input>;
  _set?: InputMaybe<Comment_Votes_Set_Input>;
  pk_columns: Comment_Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_Votes_ManyArgs = {
  updates: Array<Comment_Votes_Updates>;
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
export type Mutation_RootUpdate_Post_VotesArgs = {
  _inc?: InputMaybe<Post_Votes_Inc_Input>;
  _set?: InputMaybe<Post_Votes_Set_Input>;
  where: Post_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Votes_By_PkArgs = {
  _inc?: InputMaybe<Post_Votes_Inc_Input>;
  _set?: InputMaybe<Post_Votes_Set_Input>;
  pk_columns: Post_Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Votes_ManyArgs = {
  updates: Array<Post_Votes_Updates>;
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
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
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

/** Support M2M relationship between posts and votes. I composed pk from (post_id, vote_id) but maybe we just want a separate id field? Although it does ensure maximum one vote per user, per post. */
export type Post_Votes = {
  __typename?: 'post_votes';
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int']['output'];
  /** An object relationship */
  vote: Votes;
  vote_id: Scalars['Int']['output'];
};

/** aggregated selection of "post_votes" */
export type Post_Votes_Aggregate = {
  __typename?: 'post_votes_aggregate';
  aggregate?: Maybe<Post_Votes_Aggregate_Fields>;
  nodes: Array<Post_Votes>;
};

export type Post_Votes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Votes_Aggregate_Bool_Exp_Count>;
};

export type Post_Votes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Post_Votes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "post_votes" */
export type Post_Votes_Aggregate_Fields = {
  __typename?: 'post_votes_aggregate_fields';
  avg?: Maybe<Post_Votes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Votes_Max_Fields>;
  min?: Maybe<Post_Votes_Min_Fields>;
  stddev?: Maybe<Post_Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Votes_Sum_Fields>;
  var_pop?: Maybe<Post_Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Votes_Var_Samp_Fields>;
  variance?: Maybe<Post_Votes_Variance_Fields>;
};


/** aggregate fields of "post_votes" */
export type Post_Votes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "post_votes" */
export type Post_Votes_Aggregate_Order_By = {
  avg?: InputMaybe<Post_Votes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Votes_Max_Order_By>;
  min?: InputMaybe<Post_Votes_Min_Order_By>;
  stddev?: InputMaybe<Post_Votes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Votes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Votes_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Votes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Votes_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_votes" */
export type Post_Votes_Arr_Rel_Insert_Input = {
  data: Array<Post_Votes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Votes_Avg_Fields = {
  __typename?: 'post_votes_avg_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "post_votes" */
export type Post_Votes_Avg_Order_By = {
  post_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_votes". All fields are combined with a logical 'AND'. */
export type Post_Votes_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Votes_Bool_Exp>>;
  _not?: InputMaybe<Post_Votes_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Votes_Bool_Exp>>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Int_Comparison_Exp>;
  vote?: InputMaybe<Votes_Bool_Exp>;
  vote_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_votes" */
export enum Post_Votes_Constraint {
  /** unique or primary key constraint on columns "vote_id", "post_id" */
  PostVotesPkey = 'post_votes_pkey',
  /** unique or primary key constraint on columns "vote_id", "post_id" */
  PostVotesPostIdVoteIdKey = 'post_votes_post_id_vote_id_key'
}

/** input type for incrementing numeric columns in table "post_votes" */
export type Post_Votes_Inc_Input = {
  post_id?: InputMaybe<Scalars['Int']['input']>;
  vote_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "post_votes" */
export type Post_Votes_Insert_Input = {
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['Int']['input']>;
  vote?: InputMaybe<Votes_Obj_Rel_Insert_Input>;
  vote_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Post_Votes_Max_Fields = {
  __typename?: 'post_votes_max_fields';
  post_id?: Maybe<Scalars['Int']['output']>;
  vote_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "post_votes" */
export type Post_Votes_Max_Order_By = {
  post_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Votes_Min_Fields = {
  __typename?: 'post_votes_min_fields';
  post_id?: Maybe<Scalars['Int']['output']>;
  vote_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "post_votes" */
export type Post_Votes_Min_Order_By = {
  post_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post_votes" */
export type Post_Votes_Mutation_Response = {
  __typename?: 'post_votes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Votes>;
};

/** on_conflict condition type for table "post_votes" */
export type Post_Votes_On_Conflict = {
  constraint: Post_Votes_Constraint;
  update_columns?: Array<Post_Votes_Update_Column>;
  where?: InputMaybe<Post_Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "post_votes". */
export type Post_Votes_Order_By = {
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  vote?: InputMaybe<Votes_Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_votes */
export type Post_Votes_Pk_Columns_Input = {
  post_id: Scalars['Int']['input'];
  vote_id: Scalars['Int']['input'];
};

/** select columns of table "post_votes" */
export enum Post_Votes_Select_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  VoteId = 'vote_id'
}

/** input type for updating data in table "post_votes" */
export type Post_Votes_Set_Input = {
  post_id?: InputMaybe<Scalars['Int']['input']>;
  vote_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Post_Votes_Stddev_Fields = {
  __typename?: 'post_votes_stddev_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "post_votes" */
export type Post_Votes_Stddev_Order_By = {
  post_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Votes_Stddev_Pop_Fields = {
  __typename?: 'post_votes_stddev_pop_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "post_votes" */
export type Post_Votes_Stddev_Pop_Order_By = {
  post_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Votes_Stddev_Samp_Fields = {
  __typename?: 'post_votes_stddev_samp_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "post_votes" */
export type Post_Votes_Stddev_Samp_Order_By = {
  post_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "post_votes" */
export type Post_Votes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Votes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Votes_Stream_Cursor_Value_Input = {
  post_id?: InputMaybe<Scalars['Int']['input']>;
  vote_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Post_Votes_Sum_Fields = {
  __typename?: 'post_votes_sum_fields';
  post_id?: Maybe<Scalars['Int']['output']>;
  vote_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "post_votes" */
export type Post_Votes_Sum_Order_By = {
  post_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** update columns of table "post_votes" */
export enum Post_Votes_Update_Column {
  /** column name */
  PostId = 'post_id',
  /** column name */
  VoteId = 'vote_id'
}

export type Post_Votes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Votes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Votes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Votes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Post_Votes_Var_Pop_Fields = {
  __typename?: 'post_votes_var_pop_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "post_votes" */
export type Post_Votes_Var_Pop_Order_By = {
  post_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Votes_Var_Samp_Fields = {
  __typename?: 'post_votes_var_samp_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "post_votes" */
export type Post_Votes_Var_Samp_Order_By = {
  post_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Votes_Variance_Fields = {
  __typename?: 'post_votes_variance_fields';
  post_id?: Maybe<Scalars['Float']['output']>;
  vote_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "post_votes" */
export type Post_Votes_Variance_Order_By = {
  post_id?: InputMaybe<Order_By>;
  vote_id?: InputMaybe<Order_By>;
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
  /** An array relationship */
  post_votes: Array<Post_Votes>;
  /** An aggregate relationship */
  post_votes_aggregate: Post_Votes_Aggregate;
  /** sum of upvotes - sum of down votes on post */
  score: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
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
export type PostsPost_VotesArgs = {
  distinct_on?: InputMaybe<Array<Post_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Votes_Order_By>>;
  where?: InputMaybe<Post_Votes_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Votes_Order_By>>;
  where?: InputMaybe<Post_Votes_Bool_Exp>;
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
  /** sum of upvotes - sum of down votes on post */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Order_By>;
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
  post_votes?: InputMaybe<Post_Votes_Bool_Exp>;
  post_votes_aggregate?: InputMaybe<Post_Votes_Aggregate_Bool_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post_tags?: InputMaybe<Post_Tags_Arr_Rel_Insert_Input>;
  post_votes?: InputMaybe<Post_Votes_Arr_Rel_Insert_Input>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** sum of upvotes - sum of down votes on post */
  score?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** sum of upvotes - sum of down votes on post */
  score?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  post_votes_aggregate?: InputMaybe<Post_Votes_Aggregate_Order_By>;
  score?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  Score = 'score',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** sum of upvotes - sum of down votes on post */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** sum of upvotes - sum of down votes on post */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** sum of upvotes - sum of down votes on post */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Order_By>;
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
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  /** sum of upvotes - sum of down votes on post */
  score?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Order_By>;
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
  Score = 'score',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
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
  /** sum of upvotes - sum of down votes on post */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** sum of upvotes - sum of down votes on post */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** sum of upvotes - sum of down votes on post */
  score?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  /** sum of upvotes - sum of down votes on post */
  score?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  comment_votes: Array<Comment_Votes>;
  /** An aggregate relationship */
  comment_votes_aggregate: Comment_Votes_Aggregate;
  /** fetch data from the table: "comment_votes" using primary key columns */
  comment_votes_by_pk?: Maybe<Comment_Votes>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>;
  /** An array relationship */
  post_votes: Array<Post_Votes>;
  /** An aggregate relationship */
  post_votes_aggregate: Post_Votes_Aggregate;
  /** fetch data from the table: "post_votes" using primary key columns */
  post_votes_by_pk?: Maybe<Post_Votes>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "votes" */
  votes: Array<Votes>;
  /** fetch aggregated fields from the table: "votes" */
  votes_aggregate: Votes_Aggregate;
  /** fetch data from the table: "votes" using primary key columns */
  votes_by_pk?: Maybe<Votes>;
};


export type Query_RootComment_VotesArgs = {
  distinct_on?: InputMaybe<Array<Comment_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Votes_Order_By>>;
  where?: InputMaybe<Comment_Votes_Bool_Exp>;
};


export type Query_RootComment_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Votes_Order_By>>;
  where?: InputMaybe<Comment_Votes_Bool_Exp>;
};


export type Query_RootComment_Votes_By_PkArgs = {
  comment_id: Scalars['Int']['input'];
  vote_id: Scalars['Int']['input'];
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


export type Query_RootPost_VotesArgs = {
  distinct_on?: InputMaybe<Array<Post_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Votes_Order_By>>;
  where?: InputMaybe<Post_Votes_Bool_Exp>;
};


export type Query_RootPost_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Votes_Order_By>>;
  where?: InputMaybe<Post_Votes_Bool_Exp>;
};


export type Query_RootPost_Votes_By_PkArgs = {
  post_id: Scalars['Int']['input'];
  vote_id: Scalars['Int']['input'];
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


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
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
  /** An array relationship */
  comment_votes: Array<Comment_Votes>;
  /** An aggregate relationship */
  comment_votes_aggregate: Comment_Votes_Aggregate;
  /** fetch data from the table: "comment_votes" using primary key columns */
  comment_votes_by_pk?: Maybe<Comment_Votes>;
  /** fetch data from the table in a streaming manner: "comment_votes" */
  comment_votes_stream: Array<Comment_Votes>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table in a streaming manner: "comments" */
  comments_stream: Array<Comments>;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>;
  /** fetch data from the table in a streaming manner: "post_tags" */
  post_tags_stream: Array<Post_Tags>;
  /** An array relationship */
  post_votes: Array<Post_Votes>;
  /** An aggregate relationship */
  post_votes_aggregate: Post_Votes_Aggregate;
  /** fetch data from the table: "post_votes" using primary key columns */
  post_votes_by_pk?: Maybe<Post_Votes>;
  /** fetch data from the table in a streaming manner: "post_votes" */
  post_votes_stream: Array<Post_Votes>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table in a streaming manner: "posts" */
  posts_stream: Array<Posts>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table in a streaming manner: "tags" */
  tags_stream: Array<Tags>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "votes" */
  votes: Array<Votes>;
  /** fetch aggregated fields from the table: "votes" */
  votes_aggregate: Votes_Aggregate;
  /** fetch data from the table: "votes" using primary key columns */
  votes_by_pk?: Maybe<Votes>;
  /** fetch data from the table in a streaming manner: "votes" */
  votes_stream: Array<Votes>;
};


export type Subscription_RootComment_VotesArgs = {
  distinct_on?: InputMaybe<Array<Comment_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Votes_Order_By>>;
  where?: InputMaybe<Comment_Votes_Bool_Exp>;
};


export type Subscription_RootComment_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Votes_Order_By>>;
  where?: InputMaybe<Comment_Votes_Bool_Exp>;
};


export type Subscription_RootComment_Votes_By_PkArgs = {
  comment_id: Scalars['Int']['input'];
  vote_id: Scalars['Int']['input'];
};


export type Subscription_RootComment_Votes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Comment_Votes_Stream_Cursor_Input>>;
  where?: InputMaybe<Comment_Votes_Bool_Exp>;
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


export type Subscription_RootPost_VotesArgs = {
  distinct_on?: InputMaybe<Array<Post_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Votes_Order_By>>;
  where?: InputMaybe<Post_Votes_Bool_Exp>;
};


export type Subscription_RootPost_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Votes_Order_By>>;
  where?: InputMaybe<Post_Votes_Bool_Exp>;
};


export type Subscription_RootPost_Votes_By_PkArgs = {
  post_id: Scalars['Int']['input'];
  vote_id: Scalars['Int']['input'];
};


export type Subscription_RootPost_Votes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Votes_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Votes_Bool_Exp>;
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


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
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

/** I used varchar for role thinking it will map to a hasura role, but maybe we want a user to have many roles mapping to different sets of permissions? */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation: Scalars['Int']['output'];
  /** Should a user be able to have multiple roles? */
  role: Scalars['String']['output'];
  username: Scalars['String']['output'];
};


/** I used varchar for role thinking it will map to a hasura role, but maybe we want a user to have many roles mapping to different sets of permissions? */
export type UsersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** I used varchar for role thinking it will map to a hasura role, but maybe we want a user to have many roles mapping to different sets of permissions? */
export type UsersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** I used varchar for role thinking it will map to a hasura role, but maybe we want a user to have many roles mapping to different sets of permissions? */
export type UsersPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** I used varchar for role thinking it will map to a hasura role, but maybe we want a user to have many roles mapping to different sets of permissions? */
export type UsersPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>;
  reputation?: InputMaybe<Int_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "username" */
  UsersUsernameKey = 'users_username_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: InputMaybe<Scalars['Int']['input']>;
  /** Should a user be able to have multiple roles? */
  role?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: Maybe<Scalars['Int']['output']>;
  /** Should a user be able to have multiple roles? */
  role?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: Maybe<Scalars['Int']['output']>;
  /** Should a user be able to have multiple roles? */
  role?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  reputation?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Reputation = 'reputation',
  /** column name */
  Role = 'role',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: InputMaybe<Scalars['Int']['input']>;
  /** Should a user be able to have multiple roles? */
  role?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: InputMaybe<Scalars['Int']['input']>;
  /** Should a user be able to have multiple roles? */
  role?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Reputation = 'reputation',
  /** column name */
  Role = 'role',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  /** sum of all up votes on all posts and comments - sum of all down votes on all pots and comments? */
  reputation?: Maybe<Scalars['Float']['output']>;
};

/** Up or down vote on a post or comment. Maximum one vote per user, per post or comment enforced by posts_votes or comment_votes pk. Will need to ensure that the post or comment score is updated properly when a user changes their vote. I think the score can be incremented / decremented just fine. Not sure yet whether up votes should be deleted when the user changes their mind and down votes and vice versa, or if the boolean value for up can be flipped. */
export type Votes = {
  __typename?: 'votes';
  /** An array relationship */
  comment_votes: Array<Comment_Votes>;
  /** An aggregate relationship */
  comment_votes_aggregate: Comment_Votes_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An array relationship */
  post_votes: Array<Post_Votes>;
  /** An aggregate relationship */
  post_votes_aggregate: Post_Votes_Aggregate;
  /** True for up vote, False for down vote. */
  up: Scalars['Boolean']['output'];
  user_id: Scalars['Int']['output'];
};


/** Up or down vote on a post or comment. Maximum one vote per user, per post or comment enforced by posts_votes or comment_votes pk. Will need to ensure that the post or comment score is updated properly when a user changes their vote. I think the score can be incremented / decremented just fine. Not sure yet whether up votes should be deleted when the user changes their mind and down votes and vice versa, or if the boolean value for up can be flipped. */
export type VotesComment_VotesArgs = {
  distinct_on?: InputMaybe<Array<Comment_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Votes_Order_By>>;
  where?: InputMaybe<Comment_Votes_Bool_Exp>;
};


/** Up or down vote on a post or comment. Maximum one vote per user, per post or comment enforced by posts_votes or comment_votes pk. Will need to ensure that the post or comment score is updated properly when a user changes their vote. I think the score can be incremented / decremented just fine. Not sure yet whether up votes should be deleted when the user changes their mind and down votes and vice versa, or if the boolean value for up can be flipped. */
export type VotesComment_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comment_Votes_Order_By>>;
  where?: InputMaybe<Comment_Votes_Bool_Exp>;
};


/** Up or down vote on a post or comment. Maximum one vote per user, per post or comment enforced by posts_votes or comment_votes pk. Will need to ensure that the post or comment score is updated properly when a user changes their vote. I think the score can be incremented / decremented just fine. Not sure yet whether up votes should be deleted when the user changes their mind and down votes and vice versa, or if the boolean value for up can be flipped. */
export type VotesPost_VotesArgs = {
  distinct_on?: InputMaybe<Array<Post_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Votes_Order_By>>;
  where?: InputMaybe<Post_Votes_Bool_Exp>;
};


/** Up or down vote on a post or comment. Maximum one vote per user, per post or comment enforced by posts_votes or comment_votes pk. Will need to ensure that the post or comment score is updated properly when a user changes their vote. I think the score can be incremented / decremented just fine. Not sure yet whether up votes should be deleted when the user changes their mind and down votes and vice versa, or if the boolean value for up can be flipped. */
export type VotesPost_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Votes_Order_By>>;
  where?: InputMaybe<Post_Votes_Bool_Exp>;
};

/** aggregated selection of "votes" */
export type Votes_Aggregate = {
  __typename?: 'votes_aggregate';
  aggregate?: Maybe<Votes_Aggregate_Fields>;
  nodes: Array<Votes>;
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

/** aggregate avg on columns */
export type Votes_Avg_Fields = {
  __typename?: 'votes_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "votes". All fields are combined with a logical 'AND'. */
export type Votes_Bool_Exp = {
  _and?: InputMaybe<Array<Votes_Bool_Exp>>;
  _not?: InputMaybe<Votes_Bool_Exp>;
  _or?: InputMaybe<Array<Votes_Bool_Exp>>;
  comment_votes?: InputMaybe<Comment_Votes_Bool_Exp>;
  comment_votes_aggregate?: InputMaybe<Comment_Votes_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  post_votes?: InputMaybe<Post_Votes_Bool_Exp>;
  post_votes_aggregate?: InputMaybe<Post_Votes_Aggregate_Bool_Exp>;
  up?: InputMaybe<Boolean_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "votes" */
export enum Votes_Constraint {
  /** unique or primary key constraint on columns "id" */
  VotesPkey = 'votes_pkey'
}

/** input type for incrementing numeric columns in table "votes" */
export type Votes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "votes" */
export type Votes_Insert_Input = {
  comment_votes?: InputMaybe<Comment_Votes_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post_votes?: InputMaybe<Post_Votes_Arr_Rel_Insert_Input>;
  /** True for up vote, False for down vote. */
  up?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Votes_Max_Fields = {
  __typename?: 'votes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Votes_Min_Fields = {
  __typename?: 'votes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "votes" */
export type Votes_Mutation_Response = {
  __typename?: 'votes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Votes>;
};

/** input type for inserting object relation for remote table "votes" */
export type Votes_Obj_Rel_Insert_Input = {
  data: Votes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Votes_On_Conflict>;
};

/** on_conflict condition type for table "votes" */
export type Votes_On_Conflict = {
  constraint: Votes_Constraint;
  update_columns?: Array<Votes_Update_Column>;
  where?: InputMaybe<Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "votes". */
export type Votes_Order_By = {
  comment_votes_aggregate?: InputMaybe<Comment_Votes_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_votes_aggregate?: InputMaybe<Post_Votes_Aggregate_Order_By>;
  up?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: votes */
export type Votes_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "votes" */
export enum Votes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Up = 'up',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "votes" */
export type Votes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** True for up vote, False for down vote. */
  up?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Votes_Stddev_Fields = {
  __typename?: 'votes_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Votes_Stddev_Pop_Fields = {
  __typename?: 'votes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Votes_Stddev_Samp_Fields = {
  __typename?: 'votes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** True for up vote, False for down vote. */
  up?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Votes_Sum_Fields = {
  __typename?: 'votes_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "votes" */
export enum Votes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Up = 'up',
  /** column name */
  UserId = 'user_id'
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
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Votes_Var_Samp_Fields = {
  __typename?: 'votes_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Votes_Variance_Fields = {
  __typename?: 'votes_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

export type ListPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPostsQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: number, title: string, body: string }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: string, username: string, reputation: number, created_at: any } | null };

export type CreateUserMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: string, username: string, reputation: number, created_at: any } | null };


export const ListPostsDocument = gql`
    query ListPosts {
  posts {
    id
    title
    body
  }
}
    `;

/**
 * __useListPostsQuery__
 *
 * To run a query within a React component, call `useListPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPostsQuery(baseOptions?: Apollo.QueryHookOptions<ListPostsQuery, ListPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPostsQuery, ListPostsQueryVariables>(ListPostsDocument, options);
      }
export function useListPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPostsQuery, ListPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPostsQuery, ListPostsQueryVariables>(ListPostsDocument, options);
        }
export function useListPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListPostsQuery, ListPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListPostsQuery, ListPostsQueryVariables>(ListPostsDocument, options);
        }
export type ListPostsQueryHookResult = ReturnType<typeof useListPostsQuery>;
export type ListPostsLazyQueryHookResult = ReturnType<typeof useListPostsLazyQuery>;
export type ListPostsSuspenseQueryHookResult = ReturnType<typeof useListPostsSuspenseQuery>;
export type ListPostsQueryResult = Apollo.QueryResult<ListPostsQuery, ListPostsQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: String!) {
  users_by_pk(id: $id) {
    id
    username
    reputation
    created_at
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables> & ({ variables: GetUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($id: String, $username: String!) {
  insert_users_one(object: {id: $id, username: $username}) {
    id
    username
    reputation
    created_at
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;