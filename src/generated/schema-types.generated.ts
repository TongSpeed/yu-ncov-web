export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type City = {
   __typename?: 'City',
  id: Scalars['String'],
  province: Province,
  title: Scalars['String'],
};

export type CityRecord = {
   __typename?: 'CityRecord',
  city: City,
  id: Scalars['String'],
  recordAt: Scalars['DateTime'],
  confirmedCount: Scalars['Int'],
  curedCount: Scalars['Int'],
  deadCount: Scalars['Int'],
  suspectedCount: Scalars['Int'],
  confirmedCountAdd: Scalars['Int'],
  curedCountAdd: Scalars['Int'],
  deadCountAdd: Scalars['Int'],
  suspectedCountAdd: Scalars['Int'],
  confirmedCountAddRate: Scalars['Float'],
  curedCountAddRate: Scalars['Float'],
  deadCountAddRate: Scalars['Float'],
  suspectedCountAddRate: Scalars['Float'],
};

export type Country = {
   __typename?: 'Country',
  continents?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  title: Scalars['String'],
};

export type CountryRecord = {
   __typename?: 'CountryRecord',
  confirmedCount: Scalars['Int'],
  country: Country,
  curedCount: Scalars['Int'],
  deadCount: Scalars['Int'],
  id: Scalars['String'],
  recordAt: Scalars['DateTime'],
  suspectedCount: Scalars['Int'],
  confirmedCountAdd: Scalars['Int'],
  curedCountAdd: Scalars['Int'],
  deadCountAdd: Scalars['Int'],
  suspectedCountAdd: Scalars['Int'],
  confirmedCountAddRate: Scalars['Float'],
  curedCountAddRate: Scalars['Float'],
  deadCountAddRate: Scalars['Float'],
  suspectedCountAddRate: Scalars['Float'],
};


export type News = {
   __typename?: 'News',
  content: Scalars['String'],
  id: Scalars['String'],
  infoSource: Scalars['String'],
  province: Scalars['String'],
  recordAt: Scalars['DateTime'],
  sourceUrl: Scalars['String'],
  title: Scalars['String'],
};

export type Province = {
   __typename?: 'Province',
  country: Country,
  id: Scalars['String'],
  title: Scalars['String'],
};

export type ProvinceRecord = {
   __typename?: 'ProvinceRecord',
  confirmedCount: Scalars['Int'],
  curedCount: Scalars['Int'],
  deadCount: Scalars['Int'],
  id: Scalars['String'],
  province: Province,
  recordAt: Scalars['DateTime'],
  suspectedCount: Scalars['Int'],
  confirmedCountAdd: Scalars['Int'],
  curedCountAdd: Scalars['Int'],
  deadCountAdd: Scalars['Int'],
  suspectedCountAdd: Scalars['Int'],
  confirmedCountAddRate: Scalars['Float'],
  curedCountAddRate: Scalars['Float'],
  deadCountAddRate: Scalars['Float'],
  suspectedCountAddRate: Scalars['Float'],
};

export type Query = {
   __typename?: 'Query',
  cityRecords: Array<CityRecord>,
  countryRecords: Array<CountryRecord>,
  provinceRecords: Array<ProvinceRecord>,
  rumors: Array<Rumor>,
  news: Array<News>,
  worldRecords: Array<WorldRecord>,
};


export type QueryCityRecordsArgs = {
  city?: Maybe<Scalars['String']>,
  province?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Boolean']>
};


export type QueryCountryRecordsArgs = {
  country?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Boolean']>
};


export type QueryProvinceRecordsArgs = {
  country?: Maybe<Scalars['String']>,
  province?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Boolean']>
};


export type QueryRumorsArgs = {
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryNewsArgs = {
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

export type Rumor = {
   __typename?: 'Rumor',
  content: Scalars['String'],
  id: Scalars['String'],
  recordAt: Scalars['DateTime'],
  subTitle: Scalars['String'],
  title: Scalars['String'],
};

export type WorldRecord = {
   __typename?: 'WorldRecord',
  confirmedCount: Scalars['Int'],
  curedCount: Scalars['Int'],
  deadCount: Scalars['Int'],
  id: Scalars['String'],
  recordAt: Scalars['DateTime'],
  suspectedCount: Scalars['Int'],
  confirmedCountAdd: Scalars['Int'],
  curedCountAdd: Scalars['Int'],
  deadCountAdd: Scalars['Int'],
  suspectedCountAdd: Scalars['Int'],
  confirmedCountAddRate: Scalars['Float'],
  curedCountAddRate: Scalars['Float'],
  deadCountAddRate: Scalars['Float'],
  suspectedCountAddRate: Scalars['Float'],
};
