export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type Area = {
  __typename?: 'Area'
  city: City
  id: Scalars['String']
  title: Scalars['String']
}

export type AreaCreateManyWithoutCityInput = {
  connect?: Maybe<Array<AreaWhereUniqueInput>>
  create?: Maybe<Array<AreaCreateWithoutCityInput>>
}

export type AreaCreateOneWithoutVirusRecordsInput = {
  connect?: Maybe<AreaWhereUniqueInput>
  create?: Maybe<AreaCreateWithoutVirusRecordsInput>
}

export type AreaCreateWithoutCityInput = {
  id?: Maybe<Scalars['String']>
  title: Scalars['String']
  virusRecords?: Maybe<VirusRecordCreateManyWithoutAreaInput>
}

export type AreaCreateWithoutVirusRecordsInput = {
  city: CityCreateOneWithoutAreasInput
  id?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type AreaFilter = {
  every?: Maybe<AreaWhereInput>
  none?: Maybe<AreaWhereInput>
  some?: Maybe<AreaWhereInput>
}

export type AreaOrderByInput = {
  id?: Maybe<OrderByArg>
  title?: Maybe<OrderByArg>
}

export type AreaScalarWhereInput = {
  AND?: Maybe<Array<AreaScalarWhereInput>>
  id?: Maybe<StringFilter>
  NOT?: Maybe<Array<AreaScalarWhereInput>>
  OR?: Maybe<Array<AreaScalarWhereInput>>
  title?: Maybe<StringFilter>
  virusRecords?: Maybe<VirusRecordFilter>
}

export type AreaUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type AreaUpdateManyWithoutCityInput = {
  connect?: Maybe<Array<AreaWhereUniqueInput>>
  create?: Maybe<Array<AreaCreateWithoutCityInput>>
  delete?: Maybe<Array<AreaWhereUniqueInput>>
  deleteMany?: Maybe<Array<AreaScalarWhereInput>>
  disconnect?: Maybe<Array<AreaWhereUniqueInput>>
  set?: Maybe<Array<AreaWhereUniqueInput>>
  update?: Maybe<Array<AreaUpdateWithWhereUniqueWithoutCityInput>>
  updateMany?: Maybe<Array<AreaUpdateManyWithWhereNestedInput>>
  upsert?: Maybe<Array<AreaUpsertWithWhereUniqueWithoutCityInput>>
}

export type AreaUpdateManyWithWhereNestedInput = {
  data: AreaUpdateManyDataInput
  where: AreaScalarWhereInput
}

export type AreaUpdateOneWithoutVirusRecordsInput = {
  connect?: Maybe<AreaWhereUniqueInput>
  create?: Maybe<AreaCreateWithoutVirusRecordsInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<AreaUpdateWithoutVirusRecordsDataInput>
  upsert?: Maybe<AreaUpsertWithoutVirusRecordsInput>
}

export type AreaUpdateWithoutCityDataInput = {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  virusRecords?: Maybe<VirusRecordUpdateManyWithoutAreaInput>
}

export type AreaUpdateWithoutVirusRecordsDataInput = {
  city?: Maybe<CityUpdateOneRequiredWithoutAreasInput>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type AreaUpdateWithWhereUniqueWithoutCityInput = {
  data: AreaUpdateWithoutCityDataInput
  where: AreaWhereUniqueInput
}

export type AreaUpsertWithoutVirusRecordsInput = {
  create: AreaCreateWithoutVirusRecordsInput
  update: AreaUpdateWithoutVirusRecordsDataInput
}

export type AreaUpsertWithWhereUniqueWithoutCityInput = {
  create: AreaCreateWithoutCityInput
  update: AreaUpdateWithoutCityDataInput
  where: AreaWhereUniqueInput
}

export type AreaWhereInput = {
  AND?: Maybe<Array<AreaWhereInput>>
  city?: Maybe<CityWhereInput>
  id?: Maybe<StringFilter>
  NOT?: Maybe<Array<AreaWhereInput>>
  OR?: Maybe<Array<AreaWhereInput>>
  title?: Maybe<StringFilter>
  virusRecords?: Maybe<VirusRecordFilter>
}

export type AreaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
}

export type AuthPayload = {
  __typename?: 'AuthPayload'
  token: Scalars['String']
  user: User
}

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>
  not?: Maybe<Scalars['Boolean']>
}

export type City = {
  __typename?: 'City'
  areas: Array<Area>
  id: Scalars['String']
  province: Province
  title: Scalars['String']
}

export type CityAreasArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type CityCreateManyWithoutProvinceInput = {
  connect?: Maybe<Array<CityWhereUniqueInput>>
  create?: Maybe<Array<CityCreateWithoutProvinceInput>>
}

export type CityCreateOneWithoutAreasInput = {
  connect?: Maybe<CityWhereUniqueInput>
  create?: Maybe<CityCreateWithoutAreasInput>
}

export type CityCreateOneWithoutVirusRecordsInput = {
  connect?: Maybe<CityWhereUniqueInput>
  create?: Maybe<CityCreateWithoutVirusRecordsInput>
}

export type CityCreateWithoutAreasInput = {
  id?: Maybe<Scalars['String']>
  province: ProvinceCreateOneWithoutCitiesInput
  title: Scalars['String']
  virusRecords?: Maybe<VirusRecordCreateManyWithoutCityInput>
}

export type CityCreateWithoutProvinceInput = {
  areas?: Maybe<AreaCreateManyWithoutCityInput>
  id?: Maybe<Scalars['String']>
  title: Scalars['String']
  virusRecords?: Maybe<VirusRecordCreateManyWithoutCityInput>
}

export type CityCreateWithoutVirusRecordsInput = {
  areas?: Maybe<AreaCreateManyWithoutCityInput>
  id?: Maybe<Scalars['String']>
  province: ProvinceCreateOneWithoutCitiesInput
  title: Scalars['String']
}

export type CityFilter = {
  every?: Maybe<CityWhereInput>
  none?: Maybe<CityWhereInput>
  some?: Maybe<CityWhereInput>
}

export type CityOrderByInput = {
  id?: Maybe<OrderByArg>
  title?: Maybe<OrderByArg>
}

export type CityScalarWhereInput = {
  AND?: Maybe<Array<CityScalarWhereInput>>
  areas?: Maybe<AreaFilter>
  id?: Maybe<StringFilter>
  NOT?: Maybe<Array<CityScalarWhereInput>>
  OR?: Maybe<Array<CityScalarWhereInput>>
  title?: Maybe<StringFilter>
  virusRecords?: Maybe<VirusRecordFilter>
}

export type CityUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type CityUpdateManyWithoutProvinceInput = {
  connect?: Maybe<Array<CityWhereUniqueInput>>
  create?: Maybe<Array<CityCreateWithoutProvinceInput>>
  delete?: Maybe<Array<CityWhereUniqueInput>>
  deleteMany?: Maybe<Array<CityScalarWhereInput>>
  disconnect?: Maybe<Array<CityWhereUniqueInput>>
  set?: Maybe<Array<CityWhereUniqueInput>>
  update?: Maybe<Array<CityUpdateWithWhereUniqueWithoutProvinceInput>>
  updateMany?: Maybe<Array<CityUpdateManyWithWhereNestedInput>>
  upsert?: Maybe<Array<CityUpsertWithWhereUniqueWithoutProvinceInput>>
}

export type CityUpdateManyWithWhereNestedInput = {
  data: CityUpdateManyDataInput
  where: CityScalarWhereInput
}

export type CityUpdateOneRequiredWithoutAreasInput = {
  connect?: Maybe<CityWhereUniqueInput>
  create?: Maybe<CityCreateWithoutAreasInput>
  update?: Maybe<CityUpdateWithoutAreasDataInput>
  upsert?: Maybe<CityUpsertWithoutAreasInput>
}

export type CityUpdateOneWithoutVirusRecordsInput = {
  connect?: Maybe<CityWhereUniqueInput>
  create?: Maybe<CityCreateWithoutVirusRecordsInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<CityUpdateWithoutVirusRecordsDataInput>
  upsert?: Maybe<CityUpsertWithoutVirusRecordsInput>
}

export type CityUpdateWithoutAreasDataInput = {
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceUpdateOneRequiredWithoutCitiesInput>
  title?: Maybe<Scalars['String']>
  virusRecords?: Maybe<VirusRecordUpdateManyWithoutCityInput>
}

export type CityUpdateWithoutProvinceDataInput = {
  areas?: Maybe<AreaUpdateManyWithoutCityInput>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  virusRecords?: Maybe<VirusRecordUpdateManyWithoutCityInput>
}

export type CityUpdateWithoutVirusRecordsDataInput = {
  areas?: Maybe<AreaUpdateManyWithoutCityInput>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceUpdateOneRequiredWithoutCitiesInput>
  title?: Maybe<Scalars['String']>
}

export type CityUpdateWithWhereUniqueWithoutProvinceInput = {
  data: CityUpdateWithoutProvinceDataInput
  where: CityWhereUniqueInput
}

export type CityUpsertWithoutAreasInput = {
  create: CityCreateWithoutAreasInput
  update: CityUpdateWithoutAreasDataInput
}

export type CityUpsertWithoutVirusRecordsInput = {
  create: CityCreateWithoutVirusRecordsInput
  update: CityUpdateWithoutVirusRecordsDataInput
}

export type CityUpsertWithWhereUniqueWithoutProvinceInput = {
  create: CityCreateWithoutProvinceInput
  update: CityUpdateWithoutProvinceDataInput
  where: CityWhereUniqueInput
}

export type CityWhereInput = {
  AND?: Maybe<Array<CityWhereInput>>
  areas?: Maybe<AreaFilter>
  id?: Maybe<StringFilter>
  NOT?: Maybe<Array<CityWhereInput>>
  OR?: Maybe<Array<CityWhereInput>>
  province?: Maybe<ProvinceWhereInput>
  title?: Maybe<StringFilter>
  virusRecords?: Maybe<VirusRecordFilter>
}

export type CityWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
}

export type Country = {
  __typename?: 'Country'
  id: Scalars['String']
  provinces: Array<Province>
  title: Scalars['String']
}

export type CountryProvincesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type CountryCreateOneWithoutProvincesInput = {
  connect?: Maybe<CountryWhereUniqueInput>
  create?: Maybe<CountryCreateWithoutProvincesInput>
}

export type CountryCreateOneWithoutVirusRecordsInput = {
  connect?: Maybe<CountryWhereUniqueInput>
  create?: Maybe<CountryCreateWithoutVirusRecordsInput>
}

export type CountryCreateWithoutProvincesInput = {
  id?: Maybe<Scalars['String']>
  title: Scalars['String']
  virusRecords?: Maybe<VirusRecordCreateManyWithoutCountryInput>
}

export type CountryCreateWithoutVirusRecordsInput = {
  id?: Maybe<Scalars['String']>
  provinces?: Maybe<ProvinceCreateManyWithoutCountryInput>
  title: Scalars['String']
}

export type CountryUpdateOneRequiredWithoutProvincesInput = {
  connect?: Maybe<CountryWhereUniqueInput>
  create?: Maybe<CountryCreateWithoutProvincesInput>
  update?: Maybe<CountryUpdateWithoutProvincesDataInput>
  upsert?: Maybe<CountryUpsertWithoutProvincesInput>
}

export type CountryUpdateOneRequiredWithoutVirusRecordsInput = {
  connect?: Maybe<CountryWhereUniqueInput>
  create?: Maybe<CountryCreateWithoutVirusRecordsInput>
  update?: Maybe<CountryUpdateWithoutVirusRecordsDataInput>
  upsert?: Maybe<CountryUpsertWithoutVirusRecordsInput>
}

export type CountryUpdateWithoutProvincesDataInput = {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  virusRecords?: Maybe<VirusRecordUpdateManyWithoutCountryInput>
}

export type CountryUpdateWithoutVirusRecordsDataInput = {
  id?: Maybe<Scalars['String']>
  provinces?: Maybe<ProvinceUpdateManyWithoutCountryInput>
  title?: Maybe<Scalars['String']>
}

export type CountryUpsertWithoutProvincesInput = {
  create: CountryCreateWithoutProvincesInput
  update: CountryUpdateWithoutProvincesDataInput
}

export type CountryUpsertWithoutVirusRecordsInput = {
  create: CountryCreateWithoutVirusRecordsInput
  update: CountryUpdateWithoutVirusRecordsDataInput
}

export type CountryWhereInput = {
  AND?: Maybe<Array<CountryWhereInput>>
  id?: Maybe<StringFilter>
  NOT?: Maybe<Array<CountryWhereInput>>
  OR?: Maybe<Array<CountryWhereInput>>
  provinces?: Maybe<ProvinceFilter>
  title?: Maybe<StringFilter>
  virusRecords?: Maybe<VirusRecordFilter>
}

export type CountryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  not?: Maybe<Scalars['DateTime']>
  notIn?: Maybe<Array<Scalars['DateTime']>>
}

export type InputVirusRecord = {
  area?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country?: Maybe<Scalars['String']>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  province?: Maybe<Scalars['String']>
  recordAt?: Maybe<Scalars['Float']>
  suspectedCount?: Maybe<Scalars['Int']>
  virus?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createVirusRecord: VirusRecord
  createVirusRecordDraft: VirusRecord
  deleteVirusRecord?: Maybe<VirusRecord>
  login: AuthPayload
  publish?: Maybe<VirusRecord>
  signup: AuthPayload
  updateVirusRecord?: Maybe<VirusRecord>
}

export type MutationCreateVirusRecordArgs = {
  data: VirusRecordCreateInput
}

export type MutationCreateVirusRecordDraftArgs = {
  data?: Maybe<InputVirusRecord>
}

export type MutationDeleteVirusRecordArgs = {
  where: VirusRecordWhereUniqueInput
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationPublishArgs = {
  id?: Maybe<Scalars['ID']>
}

export type MutationSignupArgs = {
  email: Scalars['String']
  name?: Maybe<Scalars['String']>
  nickname?: Maybe<Scalars['String']>
  password: Scalars['String']
}

export type MutationUpdateVirusRecordArgs = {
  data: VirusRecordUpdateInput
  where: VirusRecordWhereUniqueInput
}

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  not?: Maybe<Scalars['Int']>
  notIn?: Maybe<Array<Scalars['Int']>>
}

export type NullableStringFilter = {
  contains?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  equals?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  not?: Maybe<Scalars['String']>
  notIn?: Maybe<Array<Scalars['String']>>
  startsWith?: Maybe<Scalars['String']>
}

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Province = {
  __typename?: 'Province'
  cities: Array<City>
  country: Country
  id: Scalars['String']
  title: Scalars['String']
}

export type ProvinceCitiesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type ProvinceCreateManyWithoutCountryInput = {
  connect?: Maybe<Array<ProvinceWhereUniqueInput>>
  create?: Maybe<Array<ProvinceCreateWithoutCountryInput>>
}

export type ProvinceCreateOneWithoutCitiesInput = {
  connect?: Maybe<ProvinceWhereUniqueInput>
  create?: Maybe<ProvinceCreateWithoutCitiesInput>
}

export type ProvinceCreateOneWithoutVirusRecordsInput = {
  connect?: Maybe<ProvinceWhereUniqueInput>
  create?: Maybe<ProvinceCreateWithoutVirusRecordsInput>
}

export type ProvinceCreateWithoutCitiesInput = {
  country: CountryCreateOneWithoutProvincesInput
  id?: Maybe<Scalars['String']>
  title: Scalars['String']
  virusRecords?: Maybe<VirusRecordCreateManyWithoutProvinceInput>
}

export type ProvinceCreateWithoutCountryInput = {
  cities?: Maybe<CityCreateManyWithoutProvinceInput>
  id?: Maybe<Scalars['String']>
  title: Scalars['String']
  virusRecords?: Maybe<VirusRecordCreateManyWithoutProvinceInput>
}

export type ProvinceCreateWithoutVirusRecordsInput = {
  cities?: Maybe<CityCreateManyWithoutProvinceInput>
  country: CountryCreateOneWithoutProvincesInput
  id?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type ProvinceFilter = {
  every?: Maybe<ProvinceWhereInput>
  none?: Maybe<ProvinceWhereInput>
  some?: Maybe<ProvinceWhereInput>
}

export type ProvinceOrderByInput = {
  id?: Maybe<OrderByArg>
  title?: Maybe<OrderByArg>
}

export type ProvinceScalarWhereInput = {
  AND?: Maybe<Array<ProvinceScalarWhereInput>>
  cities?: Maybe<CityFilter>
  id?: Maybe<StringFilter>
  NOT?: Maybe<Array<ProvinceScalarWhereInput>>
  OR?: Maybe<Array<ProvinceScalarWhereInput>>
  title?: Maybe<StringFilter>
  virusRecords?: Maybe<VirusRecordFilter>
}

export type ProvinceUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ProvinceUpdateManyWithoutCountryInput = {
  connect?: Maybe<Array<ProvinceWhereUniqueInput>>
  create?: Maybe<Array<ProvinceCreateWithoutCountryInput>>
  delete?: Maybe<Array<ProvinceWhereUniqueInput>>
  deleteMany?: Maybe<Array<ProvinceScalarWhereInput>>
  disconnect?: Maybe<Array<ProvinceWhereUniqueInput>>
  set?: Maybe<Array<ProvinceWhereUniqueInput>>
  update?: Maybe<Array<ProvinceUpdateWithWhereUniqueWithoutCountryInput>>
  updateMany?: Maybe<Array<ProvinceUpdateManyWithWhereNestedInput>>
  upsert?: Maybe<Array<ProvinceUpsertWithWhereUniqueWithoutCountryInput>>
}

export type ProvinceUpdateManyWithWhereNestedInput = {
  data: ProvinceUpdateManyDataInput
  where: ProvinceScalarWhereInput
}

export type ProvinceUpdateOneRequiredWithoutCitiesInput = {
  connect?: Maybe<ProvinceWhereUniqueInput>
  create?: Maybe<ProvinceCreateWithoutCitiesInput>
  update?: Maybe<ProvinceUpdateWithoutCitiesDataInput>
  upsert?: Maybe<ProvinceUpsertWithoutCitiesInput>
}

export type ProvinceUpdateOneWithoutVirusRecordsInput = {
  connect?: Maybe<ProvinceWhereUniqueInput>
  create?: Maybe<ProvinceCreateWithoutVirusRecordsInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<ProvinceUpdateWithoutVirusRecordsDataInput>
  upsert?: Maybe<ProvinceUpsertWithoutVirusRecordsInput>
}

export type ProvinceUpdateWithoutCitiesDataInput = {
  country?: Maybe<CountryUpdateOneRequiredWithoutProvincesInput>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  virusRecords?: Maybe<VirusRecordUpdateManyWithoutProvinceInput>
}

export type ProvinceUpdateWithoutCountryDataInput = {
  cities?: Maybe<CityUpdateManyWithoutProvinceInput>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  virusRecords?: Maybe<VirusRecordUpdateManyWithoutProvinceInput>
}

export type ProvinceUpdateWithoutVirusRecordsDataInput = {
  cities?: Maybe<CityUpdateManyWithoutProvinceInput>
  country?: Maybe<CountryUpdateOneRequiredWithoutProvincesInput>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type ProvinceUpdateWithWhereUniqueWithoutCountryInput = {
  data: ProvinceUpdateWithoutCountryDataInput
  where: ProvinceWhereUniqueInput
}

export type ProvinceUpsertWithoutCitiesInput = {
  create: ProvinceCreateWithoutCitiesInput
  update: ProvinceUpdateWithoutCitiesDataInput
}

export type ProvinceUpsertWithoutVirusRecordsInput = {
  create: ProvinceCreateWithoutVirusRecordsInput
  update: ProvinceUpdateWithoutVirusRecordsDataInput
}

export type ProvinceUpsertWithWhereUniqueWithoutCountryInput = {
  create: ProvinceCreateWithoutCountryInput
  update: ProvinceUpdateWithoutCountryDataInput
  where: ProvinceWhereUniqueInput
}

export type ProvinceWhereInput = {
  AND?: Maybe<Array<ProvinceWhereInput>>
  cities?: Maybe<CityFilter>
  country?: Maybe<CountryWhereInput>
  id?: Maybe<StringFilter>
  NOT?: Maybe<Array<ProvinceWhereInput>>
  OR?: Maybe<Array<ProvinceWhereInput>>
  title?: Maybe<StringFilter>
  virusRecords?: Maybe<VirusRecordFilter>
}

export type ProvinceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  areas: Array<Area>
  cities: Array<City>
  city?: Maybe<City>
  countries: Array<Country>
  country?: Maybe<Country>
  me?: Maybe<User>
  provinces: Array<Province>
  virusInfo?: Maybe<VirusInfo>
  virusRecord?: Maybe<VirusRecord>
  virusRecords: Array<VirusRecord>
}

export type QueryAreasArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<AreaOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<AreaWhereInput>
}

export type QueryCitiesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<CityOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<CityWhereInput>
}

export type QueryCityArgs = {
  where: CityWhereUniqueInput
}

export type QueryCountriesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type QueryCountryArgs = {
  where: CountryWhereUniqueInput
}

export type QueryProvincesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ProvinceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<ProvinceWhereInput>
}

export type QueryVirusInfoArgs = {
  where: VirusInfoWhereUniqueInput
}

export type QueryVirusRecordArgs = {
  where: VirusRecordWhereUniqueInput
}

export type QueryVirusRecordsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<VirusRecordOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<VirusRecordWhereInput>
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Verified = 'VERIFIED'
}

export type StringFilter = {
  contains?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  equals?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  not?: Maybe<Scalars['String']>
  notIn?: Maybe<Array<Scalars['String']>>
  startsWith?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  avatar: Scalars['Boolean']
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  id: Scalars['String']
  name?: Maybe<Scalars['String']>
  nickname: Scalars['String']
  publicVirusRecords: Array<VirusRecord>
  role: Role
  updatedAt: Scalars['DateTime']
  updatedVirusRecords: Array<VirusRecord>
  virusRecords: Array<VirusRecord>
}

export type UserPublicVirusRecordsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<VirusRecordOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<VirusRecordWhereInput>
}

export type UserUpdatedVirusRecordsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<VirusRecordOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<VirusRecordWhereInput>
}

export type UserVirusRecordsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<VirusRecordOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<VirusRecordWhereInput>
}

export type UserCreateOneWithoutPublicVirusRecordsInput = {
  connect?: Maybe<UserWhereUniqueInput>
  create?: Maybe<UserCreateWithoutPublicVirusRecordsInput>
}

export type UserCreateOneWithoutUpdatedVirusRecordsInput = {
  connect?: Maybe<UserWhereUniqueInput>
  create?: Maybe<UserCreateWithoutUpdatedVirusRecordsInput>
}

export type UserCreateOneWithoutVirusRecordsInput = {
  connect?: Maybe<UserWhereUniqueInput>
  create?: Maybe<UserCreateWithoutVirusRecordsInput>
}

export type UserCreateWithoutPublicVirusRecordsInput = {
  avatar?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nickname: Scalars['String']
  password: Scalars['String']
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedVirusRecords?: Maybe<VirusRecordCreateManyWithoutUpdatedByInput>
  virusRecords?: Maybe<VirusRecordCreateManyWithoutCreatedByInput>
}

export type UserCreateWithoutUpdatedVirusRecordsInput = {
  avatar?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nickname: Scalars['String']
  password: Scalars['String']
  publicVirusRecords?: Maybe<VirusRecordCreateManyWithoutPublishedByInput>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  virusRecords?: Maybe<VirusRecordCreateManyWithoutCreatedByInput>
}

export type UserCreateWithoutVirusRecordsInput = {
  avatar?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nickname: Scalars['String']
  password: Scalars['String']
  publicVirusRecords?: Maybe<VirusRecordCreateManyWithoutPublishedByInput>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedVirusRecords?: Maybe<VirusRecordCreateManyWithoutUpdatedByInput>
}

export type UserUpdateOneWithoutPublicVirusRecordsInput = {
  connect?: Maybe<UserWhereUniqueInput>
  create?: Maybe<UserCreateWithoutPublicVirusRecordsInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<UserUpdateWithoutPublicVirusRecordsDataInput>
  upsert?: Maybe<UserUpsertWithoutPublicVirusRecordsInput>
}

export type UserUpdateOneWithoutUpdatedVirusRecordsInput = {
  connect?: Maybe<UserWhereUniqueInput>
  create?: Maybe<UserCreateWithoutUpdatedVirusRecordsInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<UserUpdateWithoutUpdatedVirusRecordsDataInput>
  upsert?: Maybe<UserUpsertWithoutUpdatedVirusRecordsInput>
}

export type UserUpdateOneWithoutVirusRecordsInput = {
  connect?: Maybe<UserWhereUniqueInput>
  create?: Maybe<UserCreateWithoutVirusRecordsInput>
  delete?: Maybe<Scalars['Boolean']>
  disconnect?: Maybe<Scalars['Boolean']>
  update?: Maybe<UserUpdateWithoutVirusRecordsDataInput>
  upsert?: Maybe<UserUpsertWithoutVirusRecordsInput>
}

export type UserUpdateWithoutPublicVirusRecordsDataInput = {
  avatar?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nickname?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedVirusRecords?: Maybe<VirusRecordUpdateManyWithoutUpdatedByInput>
  virusRecords?: Maybe<VirusRecordUpdateManyWithoutCreatedByInput>
}

export type UserUpdateWithoutUpdatedVirusRecordsDataInput = {
  avatar?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nickname?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  publicVirusRecords?: Maybe<VirusRecordUpdateManyWithoutPublishedByInput>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  virusRecords?: Maybe<VirusRecordUpdateManyWithoutCreatedByInput>
}

export type UserUpdateWithoutVirusRecordsDataInput = {
  avatar?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nickname?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  publicVirusRecords?: Maybe<VirusRecordUpdateManyWithoutPublishedByInput>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedVirusRecords?: Maybe<VirusRecordUpdateManyWithoutUpdatedByInput>
}

export type UserUpsertWithoutPublicVirusRecordsInput = {
  create: UserCreateWithoutPublicVirusRecordsInput
  update: UserUpdateWithoutPublicVirusRecordsDataInput
}

export type UserUpsertWithoutUpdatedVirusRecordsInput = {
  create: UserCreateWithoutUpdatedVirusRecordsInput
  update: UserUpdateWithoutUpdatedVirusRecordsDataInput
}

export type UserUpsertWithoutVirusRecordsInput = {
  create: UserCreateWithoutVirusRecordsInput
  update: UserUpdateWithoutVirusRecordsDataInput
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>
  avatar?: Maybe<BooleanFilter>
  createdAt?: Maybe<DateTimeFilter>
  email?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  name?: Maybe<NullableStringFilter>
  nickname?: Maybe<StringFilter>
  NOT?: Maybe<Array<UserWhereInput>>
  OR?: Maybe<Array<UserWhereInput>>
  password?: Maybe<StringFilter>
  publicVirusRecords?: Maybe<VirusRecordFilter>
  role?: Maybe<Role>
  updatedAt?: Maybe<DateTimeFilter>
  updatedVirusRecords?: Maybe<VirusRecordFilter>
  virusRecords?: Maybe<VirusRecordFilter>
}

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nickname?: Maybe<Scalars['String']>
}

export type VirusInfo = {
  __typename?: 'VirusInfo'
  description: Scalars['String']
  id: Scalars['String']
  title: Scalars['String']
}

export type VirusInfoCreateOneWithoutVirusRecordsInput = {
  connect?: Maybe<VirusInfoWhereUniqueInput>
  create?: Maybe<VirusInfoCreateWithoutVirusRecordsInput>
}

export type VirusInfoCreateWithoutVirusRecordsInput = {
  description: Scalars['String']
  id?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type VirusInfoUpdateOneRequiredWithoutVirusRecordsInput = {
  connect?: Maybe<VirusInfoWhereUniqueInput>
  create?: Maybe<VirusInfoCreateWithoutVirusRecordsInput>
  update?: Maybe<VirusInfoUpdateWithoutVirusRecordsDataInput>
  upsert?: Maybe<VirusInfoUpsertWithoutVirusRecordsInput>
}

export type VirusInfoUpdateWithoutVirusRecordsDataInput = {
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type VirusInfoUpsertWithoutVirusRecordsInput = {
  create: VirusInfoCreateWithoutVirusRecordsInput
  update: VirusInfoUpdateWithoutVirusRecordsDataInput
}

export type VirusInfoWhereInput = {
  AND?: Maybe<Array<VirusInfoWhereInput>>
  description?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  NOT?: Maybe<Array<VirusInfoWhereInput>>
  OR?: Maybe<Array<VirusInfoWhereInput>>
  title?: Maybe<StringFilter>
  virusRecords?: Maybe<VirusRecordFilter>
}

export type VirusInfoWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type VirusRecord = {
  __typename?: 'VirusRecord'
  area?: Maybe<Area>
  city?: Maybe<City>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country: Country
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<User>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id: Scalars['String']
  province?: Maybe<Province>
  published: Scalars['Boolean']
  publishedAt: Scalars['DateTime']
  publishedBy?: Maybe<User>
  recordAt: Scalars['DateTime']
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt: Scalars['DateTime']
  updatedBy?: Maybe<User>
  virus: VirusInfo
}

export type VirusRecordCreateInput = {
  area?: Maybe<AreaCreateOneWithoutVirusRecordsInput>
  city?: Maybe<CityCreateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country: CountryCreateOneWithoutVirusRecordsInput
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserCreateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceCreateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserCreateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserCreateOneWithoutUpdatedVirusRecordsInput>
  virus: VirusInfoCreateOneWithoutVirusRecordsInput
}

export type VirusRecordCreateManyWithoutAreaInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutAreaInput>>
}

export type VirusRecordCreateManyWithoutCityInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutCityInput>>
}

export type VirusRecordCreateManyWithoutCountryInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutCountryInput>>
}

export type VirusRecordCreateManyWithoutCreatedByInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutCreatedByInput>>
}

export type VirusRecordCreateManyWithoutProvinceInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutProvinceInput>>
}

export type VirusRecordCreateManyWithoutPublishedByInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutPublishedByInput>>
}

export type VirusRecordCreateManyWithoutUpdatedByInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutUpdatedByInput>>
}

export type VirusRecordCreateWithoutAreaInput = {
  city?: Maybe<CityCreateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country: CountryCreateOneWithoutVirusRecordsInput
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserCreateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceCreateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserCreateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserCreateOneWithoutUpdatedVirusRecordsInput>
  virus: VirusInfoCreateOneWithoutVirusRecordsInput
}

export type VirusRecordCreateWithoutCityInput = {
  area?: Maybe<AreaCreateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country: CountryCreateOneWithoutVirusRecordsInput
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserCreateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceCreateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserCreateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserCreateOneWithoutUpdatedVirusRecordsInput>
  virus: VirusInfoCreateOneWithoutVirusRecordsInput
}

export type VirusRecordCreateWithoutCountryInput = {
  area?: Maybe<AreaCreateOneWithoutVirusRecordsInput>
  city?: Maybe<CityCreateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserCreateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceCreateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserCreateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserCreateOneWithoutUpdatedVirusRecordsInput>
  virus: VirusInfoCreateOneWithoutVirusRecordsInput
}

export type VirusRecordCreateWithoutCreatedByInput = {
  area?: Maybe<AreaCreateOneWithoutVirusRecordsInput>
  city?: Maybe<CityCreateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country: CountryCreateOneWithoutVirusRecordsInput
  createdAt?: Maybe<Scalars['DateTime']>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceCreateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserCreateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserCreateOneWithoutUpdatedVirusRecordsInput>
  virus: VirusInfoCreateOneWithoutVirusRecordsInput
}

export type VirusRecordCreateWithoutProvinceInput = {
  area?: Maybe<AreaCreateOneWithoutVirusRecordsInput>
  city?: Maybe<CityCreateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country: CountryCreateOneWithoutVirusRecordsInput
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserCreateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserCreateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserCreateOneWithoutUpdatedVirusRecordsInput>
  virus: VirusInfoCreateOneWithoutVirusRecordsInput
}

export type VirusRecordCreateWithoutPublishedByInput = {
  area?: Maybe<AreaCreateOneWithoutVirusRecordsInput>
  city?: Maybe<CityCreateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country: CountryCreateOneWithoutVirusRecordsInput
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserCreateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceCreateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserCreateOneWithoutUpdatedVirusRecordsInput>
  virus: VirusInfoCreateOneWithoutVirusRecordsInput
}

export type VirusRecordCreateWithoutUpdatedByInput = {
  area?: Maybe<AreaCreateOneWithoutVirusRecordsInput>
  city?: Maybe<CityCreateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country: CountryCreateOneWithoutVirusRecordsInput
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserCreateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceCreateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserCreateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  virus: VirusInfoCreateOneWithoutVirusRecordsInput
}

export type VirusRecordFilter = {
  every?: Maybe<VirusRecordWhereInput>
  none?: Maybe<VirusRecordWhereInput>
  some?: Maybe<VirusRecordWhereInput>
}

export type VirusRecordOrderByInput = {
  comment?: Maybe<OrderByArg>
  confirmedCount?: Maybe<OrderByArg>
  createdAt?: Maybe<OrderByArg>
  curedCount?: Maybe<OrderByArg>
  deadCount?: Maybe<OrderByArg>
  id?: Maybe<OrderByArg>
  published?: Maybe<OrderByArg>
  publishedAt?: Maybe<OrderByArg>
  recordAt?: Maybe<OrderByArg>
  suspectedCount?: Maybe<OrderByArg>
  updatedAt?: Maybe<OrderByArg>
}

export type VirusRecordScalarWhereInput = {
  AND?: Maybe<Array<VirusRecordScalarWhereInput>>
  comment?: Maybe<NullableStringFilter>
  confirmedCount?: Maybe<NullableIntFilter>
  createdAt?: Maybe<DateTimeFilter>
  curedCount?: Maybe<NullableIntFilter>
  deadCount?: Maybe<NullableIntFilter>
  id?: Maybe<StringFilter>
  NOT?: Maybe<Array<VirusRecordScalarWhereInput>>
  OR?: Maybe<Array<VirusRecordScalarWhereInput>>
  published?: Maybe<BooleanFilter>
  publishedAt?: Maybe<DateTimeFilter>
  recordAt?: Maybe<DateTimeFilter>
  suspectedCount?: Maybe<NullableIntFilter>
  updatedAt?: Maybe<DateTimeFilter>
}

export type VirusRecordUpdateInput = {
  area?: Maybe<AreaUpdateOneWithoutVirusRecordsInput>
  city?: Maybe<CityUpdateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country?: Maybe<CountryUpdateOneRequiredWithoutVirusRecordsInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserUpdateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceUpdateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserUpdateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserUpdateOneWithoutUpdatedVirusRecordsInput>
  virus?: Maybe<VirusInfoUpdateOneRequiredWithoutVirusRecordsInput>
}

export type VirusRecordUpdateManyDataInput = {
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['DateTime']>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type VirusRecordUpdateManyWithoutAreaInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutAreaInput>>
  delete?: Maybe<Array<VirusRecordWhereUniqueInput>>
  deleteMany?: Maybe<Array<VirusRecordScalarWhereInput>>
  disconnect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  set?: Maybe<Array<VirusRecordWhereUniqueInput>>
  update?: Maybe<Array<VirusRecordUpdateWithWhereUniqueWithoutAreaInput>>
  updateMany?: Maybe<Array<VirusRecordUpdateManyWithWhereNestedInput>>
  upsert?: Maybe<Array<VirusRecordUpsertWithWhereUniqueWithoutAreaInput>>
}

export type VirusRecordUpdateManyWithoutCityInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutCityInput>>
  delete?: Maybe<Array<VirusRecordWhereUniqueInput>>
  deleteMany?: Maybe<Array<VirusRecordScalarWhereInput>>
  disconnect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  set?: Maybe<Array<VirusRecordWhereUniqueInput>>
  update?: Maybe<Array<VirusRecordUpdateWithWhereUniqueWithoutCityInput>>
  updateMany?: Maybe<Array<VirusRecordUpdateManyWithWhereNestedInput>>
  upsert?: Maybe<Array<VirusRecordUpsertWithWhereUniqueWithoutCityInput>>
}

export type VirusRecordUpdateManyWithoutCountryInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutCountryInput>>
  delete?: Maybe<Array<VirusRecordWhereUniqueInput>>
  deleteMany?: Maybe<Array<VirusRecordScalarWhereInput>>
  disconnect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  set?: Maybe<Array<VirusRecordWhereUniqueInput>>
  update?: Maybe<Array<VirusRecordUpdateWithWhereUniqueWithoutCountryInput>>
  updateMany?: Maybe<Array<VirusRecordUpdateManyWithWhereNestedInput>>
  upsert?: Maybe<Array<VirusRecordUpsertWithWhereUniqueWithoutCountryInput>>
}

export type VirusRecordUpdateManyWithoutCreatedByInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutCreatedByInput>>
  delete?: Maybe<Array<VirusRecordWhereUniqueInput>>
  deleteMany?: Maybe<Array<VirusRecordScalarWhereInput>>
  disconnect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  set?: Maybe<Array<VirusRecordWhereUniqueInput>>
  update?: Maybe<Array<VirusRecordUpdateWithWhereUniqueWithoutCreatedByInput>>
  updateMany?: Maybe<Array<VirusRecordUpdateManyWithWhereNestedInput>>
  upsert?: Maybe<Array<VirusRecordUpsertWithWhereUniqueWithoutCreatedByInput>>
}

export type VirusRecordUpdateManyWithoutProvinceInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutProvinceInput>>
  delete?: Maybe<Array<VirusRecordWhereUniqueInput>>
  deleteMany?: Maybe<Array<VirusRecordScalarWhereInput>>
  disconnect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  set?: Maybe<Array<VirusRecordWhereUniqueInput>>
  update?: Maybe<Array<VirusRecordUpdateWithWhereUniqueWithoutProvinceInput>>
  updateMany?: Maybe<Array<VirusRecordUpdateManyWithWhereNestedInput>>
  upsert?: Maybe<Array<VirusRecordUpsertWithWhereUniqueWithoutProvinceInput>>
}

export type VirusRecordUpdateManyWithoutPublishedByInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutPublishedByInput>>
  delete?: Maybe<Array<VirusRecordWhereUniqueInput>>
  deleteMany?: Maybe<Array<VirusRecordScalarWhereInput>>
  disconnect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  set?: Maybe<Array<VirusRecordWhereUniqueInput>>
  update?: Maybe<Array<VirusRecordUpdateWithWhereUniqueWithoutPublishedByInput>>
  updateMany?: Maybe<Array<VirusRecordUpdateManyWithWhereNestedInput>>
  upsert?: Maybe<Array<VirusRecordUpsertWithWhereUniqueWithoutPublishedByInput>>
}

export type VirusRecordUpdateManyWithoutUpdatedByInput = {
  connect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  create?: Maybe<Array<VirusRecordCreateWithoutUpdatedByInput>>
  delete?: Maybe<Array<VirusRecordWhereUniqueInput>>
  deleteMany?: Maybe<Array<VirusRecordScalarWhereInput>>
  disconnect?: Maybe<Array<VirusRecordWhereUniqueInput>>
  set?: Maybe<Array<VirusRecordWhereUniqueInput>>
  update?: Maybe<Array<VirusRecordUpdateWithWhereUniqueWithoutUpdatedByInput>>
  updateMany?: Maybe<Array<VirusRecordUpdateManyWithWhereNestedInput>>
  upsert?: Maybe<Array<VirusRecordUpsertWithWhereUniqueWithoutUpdatedByInput>>
}

export type VirusRecordUpdateManyWithWhereNestedInput = {
  data: VirusRecordUpdateManyDataInput
  where: VirusRecordScalarWhereInput
}

export type VirusRecordUpdateWithoutAreaDataInput = {
  city?: Maybe<CityUpdateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country?: Maybe<CountryUpdateOneRequiredWithoutVirusRecordsInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserUpdateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceUpdateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserUpdateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserUpdateOneWithoutUpdatedVirusRecordsInput>
  virus?: Maybe<VirusInfoUpdateOneRequiredWithoutVirusRecordsInput>
}

export type VirusRecordUpdateWithoutCityDataInput = {
  area?: Maybe<AreaUpdateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country?: Maybe<CountryUpdateOneRequiredWithoutVirusRecordsInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserUpdateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceUpdateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserUpdateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserUpdateOneWithoutUpdatedVirusRecordsInput>
  virus?: Maybe<VirusInfoUpdateOneRequiredWithoutVirusRecordsInput>
}

export type VirusRecordUpdateWithoutCountryDataInput = {
  area?: Maybe<AreaUpdateOneWithoutVirusRecordsInput>
  city?: Maybe<CityUpdateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserUpdateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceUpdateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserUpdateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserUpdateOneWithoutUpdatedVirusRecordsInput>
  virus?: Maybe<VirusInfoUpdateOneRequiredWithoutVirusRecordsInput>
}

export type VirusRecordUpdateWithoutCreatedByDataInput = {
  area?: Maybe<AreaUpdateOneWithoutVirusRecordsInput>
  city?: Maybe<CityUpdateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country?: Maybe<CountryUpdateOneRequiredWithoutVirusRecordsInput>
  createdAt?: Maybe<Scalars['DateTime']>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceUpdateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserUpdateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserUpdateOneWithoutUpdatedVirusRecordsInput>
  virus?: Maybe<VirusInfoUpdateOneRequiredWithoutVirusRecordsInput>
}

export type VirusRecordUpdateWithoutProvinceDataInput = {
  area?: Maybe<AreaUpdateOneWithoutVirusRecordsInput>
  city?: Maybe<CityUpdateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country?: Maybe<CountryUpdateOneRequiredWithoutVirusRecordsInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserUpdateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserUpdateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserUpdateOneWithoutUpdatedVirusRecordsInput>
  virus?: Maybe<VirusInfoUpdateOneRequiredWithoutVirusRecordsInput>
}

export type VirusRecordUpdateWithoutPublishedByDataInput = {
  area?: Maybe<AreaUpdateOneWithoutVirusRecordsInput>
  city?: Maybe<CityUpdateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country?: Maybe<CountryUpdateOneRequiredWithoutVirusRecordsInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserUpdateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceUpdateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedBy?: Maybe<UserUpdateOneWithoutUpdatedVirusRecordsInput>
  virus?: Maybe<VirusInfoUpdateOneRequiredWithoutVirusRecordsInput>
}

export type VirusRecordUpdateWithoutUpdatedByDataInput = {
  area?: Maybe<AreaUpdateOneWithoutVirusRecordsInput>
  city?: Maybe<CityUpdateOneWithoutVirusRecordsInput>
  comment?: Maybe<Scalars['String']>
  confirmedCount?: Maybe<Scalars['Int']>
  country?: Maybe<CountryUpdateOneRequiredWithoutVirusRecordsInput>
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy?: Maybe<UserUpdateOneWithoutVirusRecordsInput>
  curedCount?: Maybe<Scalars['Int']>
  deadCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  province?: Maybe<ProvinceUpdateOneWithoutVirusRecordsInput>
  published?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedBy?: Maybe<UserUpdateOneWithoutPublicVirusRecordsInput>
  recordAt?: Maybe<Scalars['DateTime']>
  suspectedCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  virus?: Maybe<VirusInfoUpdateOneRequiredWithoutVirusRecordsInput>
}

export type VirusRecordUpdateWithWhereUniqueWithoutAreaInput = {
  data: VirusRecordUpdateWithoutAreaDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpdateWithWhereUniqueWithoutCityInput = {
  data: VirusRecordUpdateWithoutCityDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpdateWithWhereUniqueWithoutCountryInput = {
  data: VirusRecordUpdateWithoutCountryDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: VirusRecordUpdateWithoutCreatedByDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpdateWithWhereUniqueWithoutProvinceInput = {
  data: VirusRecordUpdateWithoutProvinceDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpdateWithWhereUniqueWithoutPublishedByInput = {
  data: VirusRecordUpdateWithoutPublishedByDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: VirusRecordUpdateWithoutUpdatedByDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpsertWithWhereUniqueWithoutAreaInput = {
  create: VirusRecordCreateWithoutAreaInput
  update: VirusRecordUpdateWithoutAreaDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpsertWithWhereUniqueWithoutCityInput = {
  create: VirusRecordCreateWithoutCityInput
  update: VirusRecordUpdateWithoutCityDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpsertWithWhereUniqueWithoutCountryInput = {
  create: VirusRecordCreateWithoutCountryInput
  update: VirusRecordUpdateWithoutCountryDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: VirusRecordCreateWithoutCreatedByInput
  update: VirusRecordUpdateWithoutCreatedByDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpsertWithWhereUniqueWithoutProvinceInput = {
  create: VirusRecordCreateWithoutProvinceInput
  update: VirusRecordUpdateWithoutProvinceDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpsertWithWhereUniqueWithoutPublishedByInput = {
  create: VirusRecordCreateWithoutPublishedByInput
  update: VirusRecordUpdateWithoutPublishedByDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: VirusRecordCreateWithoutUpdatedByInput
  update: VirusRecordUpdateWithoutUpdatedByDataInput
  where: VirusRecordWhereUniqueInput
}

export type VirusRecordWhereInput = {
  AND?: Maybe<Array<VirusRecordWhereInput>>
  area?: Maybe<AreaWhereInput>
  city?: Maybe<CityWhereInput>
  comment?: Maybe<NullableStringFilter>
  confirmedCount?: Maybe<NullableIntFilter>
  country?: Maybe<CountryWhereInput>
  createdAt?: Maybe<DateTimeFilter>
  createdBy?: Maybe<UserWhereInput>
  curedCount?: Maybe<NullableIntFilter>
  deadCount?: Maybe<NullableIntFilter>
  id?: Maybe<StringFilter>
  NOT?: Maybe<Array<VirusRecordWhereInput>>
  OR?: Maybe<Array<VirusRecordWhereInput>>
  province?: Maybe<ProvinceWhereInput>
  published?: Maybe<BooleanFilter>
  publishedAt?: Maybe<DateTimeFilter>
  publishedBy?: Maybe<UserWhereInput>
  recordAt?: Maybe<DateTimeFilter>
  suspectedCount?: Maybe<NullableIntFilter>
  updatedAt?: Maybe<DateTimeFilter>
  updatedBy?: Maybe<UserWhereInput>
  virus?: Maybe<VirusInfoWhereInput>
}

export type VirusRecordWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
}
