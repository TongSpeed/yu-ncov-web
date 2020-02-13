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

export type Area = {
   __typename?: 'Area',
  city: City,
  cuid: Scalars['String'],
  id: Scalars['String'],
  tags: Scalars['String'],
  title: Scalars['String'],
};

export type AreaFilter = {
  every?: Maybe<AreaWhereInput>,
  none?: Maybe<AreaWhereInput>,
  some?: Maybe<AreaWhereInput>,
};

export type AreaOrderByInput = {
  cuid?: Maybe<OrderByArg>,
  id?: Maybe<OrderByArg>,
  tags?: Maybe<OrderByArg>,
  title?: Maybe<OrderByArg>,
};

export type AreaWhereInput = {
  AND?: Maybe<Array<AreaWhereInput>>,
  city?: Maybe<CityWhereInput>,
  cuid?: Maybe<StringFilter>,
  id?: Maybe<StringFilter>,
  NOT?: Maybe<Array<AreaWhereInput>>,
  OR?: Maybe<Array<AreaWhereInput>>,
  tags?: Maybe<StringFilter>,
  title?: Maybe<StringFilter>,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Int'],
};

export type City = {
   __typename?: 'City',
  areas: Array<Area>,
  cuid: Scalars['String'],
  id: Scalars['String'],
  province: Province,
  tags: Scalars['String'],
  title: Scalars['String'],
};


export type CityAreasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

export type CityFilter = {
  every?: Maybe<CityWhereInput>,
  none?: Maybe<CityWhereInput>,
  some?: Maybe<CityWhereInput>,
};

export type CityOrderByInput = {
  cuid?: Maybe<OrderByArg>,
  id?: Maybe<OrderByArg>,
  tags?: Maybe<OrderByArg>,
  title?: Maybe<OrderByArg>,
};

export type CityRecord = {
   __typename?: 'CityRecord',
  city: City,
  confirmedCount: Scalars['Int'],
  country: Country,
  createdAt: Scalars['DateTime'],
  curedCount: Scalars['Int'],
  deadCount: Scalars['Int'],
  id: Scalars['String'],
  province: Province,
  recordAt: Scalars['DateTime'],
  sourceUrl: Scalars['String'],
  suspectedCount: Scalars['Int'],
  updatedAt: Scalars['DateTime'],
  virus: VirusInfo,
};

export type CityRecordFilter = {
  every?: Maybe<CityRecordWhereInput>,
  none?: Maybe<CityRecordWhereInput>,
  some?: Maybe<CityRecordWhereInput>,
};

export type CityRecordOrderByInput = {
  confirmedCount?: Maybe<OrderByArg>,
  createdAt?: Maybe<OrderByArg>,
  curedCount?: Maybe<OrderByArg>,
  deadCount?: Maybe<OrderByArg>,
  id?: Maybe<OrderByArg>,
  recordAt?: Maybe<OrderByArg>,
  sourceUrl?: Maybe<OrderByArg>,
  suspectedCount?: Maybe<OrderByArg>,
  updatedAt?: Maybe<OrderByArg>,
};

export type CityRecordWhereInput = {
  AND?: Maybe<Array<CityRecordWhereInput>>,
  city?: Maybe<CityWhereInput>,
  confirmedCount?: Maybe<IntFilter>,
  country?: Maybe<CountryWhereInput>,
  createdAt?: Maybe<DateTimeFilter>,
  curedCount?: Maybe<IntFilter>,
  deadCount?: Maybe<IntFilter>,
  id?: Maybe<StringFilter>,
  NOT?: Maybe<Array<CityRecordWhereInput>>,
  OR?: Maybe<Array<CityRecordWhereInput>>,
  province?: Maybe<ProvinceWhereInput>,
  recordAt?: Maybe<DateTimeFilter>,
  sourceUrl?: Maybe<StringFilter>,
  suspectedCount?: Maybe<IntFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  virus?: Maybe<VirusInfoWhereInput>,
};

export type CityWhereInput = {
  AND?: Maybe<Array<CityWhereInput>>,
  areas?: Maybe<AreaFilter>,
  cityRecords?: Maybe<CityRecordFilter>,
  cuid?: Maybe<StringFilter>,
  id?: Maybe<StringFilter>,
  NOT?: Maybe<Array<CityWhereInput>>,
  OR?: Maybe<Array<CityWhereInput>>,
  province?: Maybe<ProvinceWhereInput>,
  tags?: Maybe<StringFilter>,
  title?: Maybe<StringFilter>,
};

export type CityWhereUniqueInput = {
  cuid?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

export type Country = {
   __typename?: 'Country',
  continents?: Maybe<Scalars['String']>,
  cuid: Scalars['String'],
  id: Scalars['String'],
  provinces: Array<Province>,
  tags: Scalars['String'],
  title: Scalars['String'],
};


export type CountryProvincesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

export type CountryRecord = {
   __typename?: 'CountryRecord',
  confirmedAddCount?: Maybe<Scalars['Int']>,
  confirmedCount: Scalars['Int'],
  continents?: Maybe<Scalars['String']>,
  country: Country,
  createdAt: Scalars['DateTime'],
  curedAddCount?: Maybe<Scalars['Int']>,
  curedCount: Scalars['Int'],
  deadAddCount?: Maybe<Scalars['Int']>,
  deadCount: Scalars['Int'],
  id: Scalars['String'],
  recordAt: Scalars['DateTime'],
  seriousAddCount?: Maybe<Scalars['Int']>,
  seriousCount?: Maybe<Scalars['Int']>,
  sourceUrl: Scalars['String'],
  suspectedAddCount?: Maybe<Scalars['Int']>,
  suspectedCount: Scalars['Int'],
  updatedAt: Scalars['DateTime'],
  virus: VirusInfo,
};

export type CountryRecordFilter = {
  every?: Maybe<CountryRecordWhereInput>,
  none?: Maybe<CountryRecordWhereInput>,
  some?: Maybe<CountryRecordWhereInput>,
};

export type CountryRecordOrderByInput = {
  confirmedAddCount?: Maybe<OrderByArg>,
  confirmedCount?: Maybe<OrderByArg>,
  continents?: Maybe<OrderByArg>,
  createdAt?: Maybe<OrderByArg>,
  curedAddCount?: Maybe<OrderByArg>,
  curedCount?: Maybe<OrderByArg>,
  deadAddCount?: Maybe<OrderByArg>,
  deadCount?: Maybe<OrderByArg>,
  id?: Maybe<OrderByArg>,
  recordAt?: Maybe<OrderByArg>,
  seriousAddCount?: Maybe<OrderByArg>,
  seriousCount?: Maybe<OrderByArg>,
  sourceUrl?: Maybe<OrderByArg>,
  suspectedAddCount?: Maybe<OrderByArg>,
  suspectedCount?: Maybe<OrderByArg>,
  updatedAt?: Maybe<OrderByArg>,
};

export type CountryRecordWhereInput = {
  AND?: Maybe<Array<CountryRecordWhereInput>>,
  confirmedAddCount?: Maybe<NullableIntFilter>,
  confirmedCount?: Maybe<IntFilter>,
  continents?: Maybe<NullableStringFilter>,
  country?: Maybe<CountryWhereInput>,
  createdAt?: Maybe<DateTimeFilter>,
  curedAddCount?: Maybe<NullableIntFilter>,
  curedCount?: Maybe<IntFilter>,
  deadAddCount?: Maybe<NullableIntFilter>,
  deadCount?: Maybe<IntFilter>,
  id?: Maybe<StringFilter>,
  NOT?: Maybe<Array<CountryRecordWhereInput>>,
  OR?: Maybe<Array<CountryRecordWhereInput>>,
  recordAt?: Maybe<DateTimeFilter>,
  seriousAddCount?: Maybe<NullableIntFilter>,
  seriousCount?: Maybe<NullableIntFilter>,
  sourceUrl?: Maybe<StringFilter>,
  suspectedAddCount?: Maybe<NullableIntFilter>,
  suspectedCount?: Maybe<IntFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  virus?: Maybe<VirusInfoWhereInput>,
};

export type CountryWhereInput = {
  AND?: Maybe<Array<CountryWhereInput>>,
  cityRecords?: Maybe<CityRecordFilter>,
  continents?: Maybe<NullableStringFilter>,
  countryRecords?: Maybe<CountryRecordFilter>,
  cuid?: Maybe<StringFilter>,
  id?: Maybe<StringFilter>,
  NOT?: Maybe<Array<CountryWhereInput>>,
  OR?: Maybe<Array<CountryWhereInput>>,
  provinceRecords?: Maybe<ProvinceRecordFilter>,
  provinces?: Maybe<ProvinceFilter>,
  tags?: Maybe<StringFilter>,
  title?: Maybe<StringFilter>,
};

export type CountryWhereUniqueInput = {
  cuid?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
  gte?: Maybe<Scalars['DateTime']>,
  in?: Maybe<Array<Scalars['DateTime']>>,
  lt?: Maybe<Scalars['DateTime']>,
  lte?: Maybe<Scalars['DateTime']>,
  not?: Maybe<Scalars['DateTime']>,
  notIn?: Maybe<Array<Scalars['DateTime']>>,
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  not?: Maybe<Scalars['Int']>,
  notIn?: Maybe<Array<Scalars['Int']>>,
};

export type Mutation = {
   __typename?: 'Mutation',
  deleteManyCity: BatchPayload,
  login: AuthPayload,
  signup: AuthPayload,
};


export type MutationDeleteManyCityArgs = {
  where?: Maybe<CityWhereInput>
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignupArgs = {
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  nickname?: Maybe<Scalars['String']>,
  password: Scalars['String']
};

export type News = {
   __typename?: 'News',
  content: Scalars['String'],
  id: Scalars['String'],
  infoSource: Scalars['String'],
  province: Scalars['String'],
  recordAt: Scalars['DateTime'],
  sourceUrl: Scalars['String'],
  subTitle?: Maybe<Scalars['String']>,
  title: Scalars['String'],
};

export type NewsOrderByInput = {
  content?: Maybe<OrderByArg>,
  createdAt?: Maybe<OrderByArg>,
  id?: Maybe<OrderByArg>,
  infoSource?: Maybe<OrderByArg>,
  province?: Maybe<OrderByArg>,
  recordAt?: Maybe<OrderByArg>,
  sourceUrl?: Maybe<OrderByArg>,
  subTitle?: Maybe<OrderByArg>,
  title?: Maybe<OrderByArg>,
  updatedAt?: Maybe<OrderByArg>,
};

export type NewsWhereInput = {
  AND?: Maybe<Array<NewsWhereInput>>,
  content?: Maybe<StringFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  id?: Maybe<StringFilter>,
  infoSource?: Maybe<StringFilter>,
  NOT?: Maybe<Array<NewsWhereInput>>,
  OR?: Maybe<Array<NewsWhereInput>>,
  province?: Maybe<StringFilter>,
  recordAt?: Maybe<DateTimeFilter>,
  sourceUrl?: Maybe<StringFilter>,
  subTitle?: Maybe<NullableStringFilter>,
  title?: Maybe<StringFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  not?: Maybe<Scalars['Int']>,
  notIn?: Maybe<Array<Scalars['Int']>>,
};

export type NullableStringFilter = {
  contains?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
  equals?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  notIn?: Maybe<Array<Scalars['String']>>,
  startsWith?: Maybe<Scalars['String']>,
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Province = {
   __typename?: 'Province',
  cities: Array<City>,
  country: Country,
  cuid: Scalars['String'],
  id: Scalars['String'],
  tags: Scalars['String'],
  title: Scalars['String'],
};


export type ProvinceCitiesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

export type ProvinceFilter = {
  every?: Maybe<ProvinceWhereInput>,
  none?: Maybe<ProvinceWhereInput>,
  some?: Maybe<ProvinceWhereInput>,
};

export type ProvinceOrderByInput = {
  cuid?: Maybe<OrderByArg>,
  id?: Maybe<OrderByArg>,
  tags?: Maybe<OrderByArg>,
  title?: Maybe<OrderByArg>,
};

export type ProvinceRecord = {
   __typename?: 'ProvinceRecord',
  confirmedCount: Scalars['Int'],
  country: Country,
  createdAt: Scalars['DateTime'],
  curedCount: Scalars['Int'],
  deadCount: Scalars['Int'],
  id: Scalars['String'],
  province: Province,
  recordAt: Scalars['DateTime'],
  sourceUrl: Scalars['String'],
  suspectedCount: Scalars['Int'],
  updatedAt: Scalars['DateTime'],
  virus: VirusInfo,
};

export type ProvinceRecordFilter = {
  every?: Maybe<ProvinceRecordWhereInput>,
  none?: Maybe<ProvinceRecordWhereInput>,
  some?: Maybe<ProvinceRecordWhereInput>,
};

export type ProvinceRecordOrderByInput = {
  confirmedCount?: Maybe<OrderByArg>,
  createdAt?: Maybe<OrderByArg>,
  curedCount?: Maybe<OrderByArg>,
  deadCount?: Maybe<OrderByArg>,
  id?: Maybe<OrderByArg>,
  recordAt?: Maybe<OrderByArg>,
  sourceUrl?: Maybe<OrderByArg>,
  suspectedCount?: Maybe<OrderByArg>,
  updatedAt?: Maybe<OrderByArg>,
};

export type ProvinceRecordWhereInput = {
  AND?: Maybe<Array<ProvinceRecordWhereInput>>,
  confirmedCount?: Maybe<IntFilter>,
  country?: Maybe<CountryWhereInput>,
  createdAt?: Maybe<DateTimeFilter>,
  curedCount?: Maybe<IntFilter>,
  deadCount?: Maybe<IntFilter>,
  id?: Maybe<StringFilter>,
  NOT?: Maybe<Array<ProvinceRecordWhereInput>>,
  OR?: Maybe<Array<ProvinceRecordWhereInput>>,
  province?: Maybe<ProvinceWhereInput>,
  recordAt?: Maybe<DateTimeFilter>,
  sourceUrl?: Maybe<StringFilter>,
  suspectedCount?: Maybe<IntFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  virus?: Maybe<VirusInfoWhereInput>,
};

export type ProvinceWhereInput = {
  AND?: Maybe<Array<ProvinceWhereInput>>,
  cities?: Maybe<CityFilter>,
  cityRecords?: Maybe<CityRecordFilter>,
  country?: Maybe<CountryWhereInput>,
  cuid?: Maybe<StringFilter>,
  id?: Maybe<StringFilter>,
  NOT?: Maybe<Array<ProvinceWhereInput>>,
  OR?: Maybe<Array<ProvinceWhereInput>>,
  provinceRecords?: Maybe<ProvinceRecordFilter>,
  tags?: Maybe<StringFilter>,
  title?: Maybe<StringFilter>,
};

export type Query = {
   __typename?: 'Query',
  areas: Array<Area>,
  cities: Array<City>,
  city?: Maybe<City>,
  cityRecords: Array<CityRecord>,
  countries: Array<Country>,
  country?: Maybe<Country>,
  countryRecords: Array<CountryRecord>,
  me?: Maybe<User>,
  news: Array<News>,
  provinceRecords: Array<ProvinceRecord>,
  provinces: Array<Province>,
  rumors: Array<Rumor>,
  virusInfo?: Maybe<VirusInfo>,
};


export type QueryAreasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AreaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AreaWhereInput>
};


export type QueryCitiesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CityOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CityWhereInput>
};


export type QueryCityArgs = {
  where: CityWhereUniqueInput
};


export type QueryCityRecordsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CityRecordOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CityRecordWhereInput>
};


export type QueryCountriesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCountryArgs = {
  where: CountryWhereUniqueInput
};


export type QueryCountryRecordsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CountryRecordOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CountryRecordWhereInput>
};


export type QueryNewsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<NewsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<NewsWhereInput>
};


export type QueryProvinceRecordsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProvinceRecordOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProvinceRecordWhereInput>
};


export type QueryProvincesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProvinceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProvinceWhereInput>
};


export type QueryRumorsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RumorOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RumorWhereInput>
};


export type QueryVirusInfoArgs = {
  where: VirusInfoWhereUniqueInput
};

export type Rumor = {
   __typename?: 'Rumor',
  content: Scalars['String'],
  id: Scalars['String'],
  recordAt: Scalars['DateTime'],
  subTitle: Scalars['String'],
  title: Scalars['String'],
};

export type RumorOrderByInput = {
  content?: Maybe<OrderByArg>,
  createdAt?: Maybe<OrderByArg>,
  id?: Maybe<OrderByArg>,
  recordAt?: Maybe<OrderByArg>,
  subTitle?: Maybe<OrderByArg>,
  title?: Maybe<OrderByArg>,
  updatedAt?: Maybe<OrderByArg>,
};

export type RumorWhereInput = {
  AND?: Maybe<Array<RumorWhereInput>>,
  content?: Maybe<StringFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  id?: Maybe<StringFilter>,
  NOT?: Maybe<Array<RumorWhereInput>>,
  OR?: Maybe<Array<RumorWhereInput>>,
  recordAt?: Maybe<DateTimeFilter>,
  subTitle?: Maybe<StringFilter>,
  title?: Maybe<StringFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
  equals?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  notIn?: Maybe<Array<Scalars['String']>>,
  startsWith?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  avatar: Scalars['Boolean'],
  createdAt: Scalars['DateTime'],
  email: Scalars['String'],
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  nickname: Scalars['String'],
  role: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type VirusInfo = {
   __typename?: 'VirusInfo',
  description: Scalars['String'],
  id: Scalars['String'],
  title: Scalars['String'],
};

export type VirusInfoWhereInput = {
  AND?: Maybe<Array<VirusInfoWhereInput>>,
  cityRecords?: Maybe<CityRecordFilter>,
  countryRecords?: Maybe<CountryRecordFilter>,
  description?: Maybe<StringFilter>,
  id?: Maybe<StringFilter>,
  NOT?: Maybe<Array<VirusInfoWhereInput>>,
  OR?: Maybe<Array<VirusInfoWhereInput>>,
  provinceRecords?: Maybe<ProvinceRecordFilter>,
  title?: Maybe<StringFilter>,
};

export type VirusInfoWhereUniqueInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};
