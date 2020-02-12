import { objectType,  inputObjectType } from 'nexus'

export const VirusInfo = objectType({
    name: 'VirusInfo',
    definition(t) {
        t.model.id()
        t.model.title()
        t.model.description()

    },
})
export const Rumor = objectType({
    name: 'Rumor',
    definition(t) {
        t.model.id()
        t.model.title()
        t.model.subTitle()
        t.model.recordAt()
        t.model.content()

    },
})
export const News = objectType({
    name: 'News',
    definition(t) {
        t.model.id()
        t.model.title()
        t.model.subTitle()
        t.model.recordAt()
        t.model.content()
        t.model.sourceUrl()
        t.model.infoSource()
        t.model.province()
  
    },
})
export const CountryRecord = objectType({
    name: 'CountryRecord',
    definition(t) {
        t.model.id()
        t.model.country()
        
        t.model.recordAt()
        t.model.virus()
        t.model.sourceUrl()
        t.model.seriousCount()
        t.model.suspectedCount()
        t.model.confirmedCount()
        t.model.deadCount()
        t.model.curedCount()
        t.model.continents()
        t.model.seriousAddCount()
        t.model.suspectedAddCount()
        t.model.confirmedAddCount()
        t.model.deadAddCount()
        t.model.curedAddCount()
        t.model.createdAt()
        t.model.updatedAt()

    },
})

export const ProvinceRecord = objectType({
    name: 'ProvinceRecord',
    definition(t) {
        t.model.id()
        t.model.country()
        t.model.province()
        t.model.recordAt()
        t.model.virus()
        t.model.sourceUrl()
        t.model.suspectedCount()
        t.model.confirmedCount()
        t.model.deadCount()
        t.model.curedCount()

        t.model.createdAt()
        t.model.updatedAt()

    },
})


export const CityRecord = objectType({
    name: 'CityRecord',
    definition(t) {
        t.model.id()
        t.model.country()
        t.model.province()
        t.model.city()
        t.model.recordAt()
        t.model.virus()
        t.model.sourceUrl()
        t.model.suspectedCount()
        t.model.confirmedCount()
        t.model.deadCount()
        t.model.curedCount()

        t.model.createdAt()
        t.model.updatedAt()

    },
})