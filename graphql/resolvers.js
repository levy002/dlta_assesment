const CountryInfo = require('../models/CountryInfo');

module.exports = {
  Query: {
    async getAllCountryInfo(_, {}) {
      return await CountryInfo.find();
    },

    async countryInfo(_, { ID }) {
      return await CountryInfo.findById(ID);
    },

    async getCountryInfoByYear(_, { year }) {
      return await CountryInfo.find({ year: year });
    },
    async getCountryInfoBYearRange(_, { fromYear, toYear }) {
      return await CountryInfo.find({ year: { $gte: fromYear, $lte: toYear } });
    },
    async getCountryInfoByHighestNumberOfPopulation(_, {}) {
      return await CountryInfo.find().sort({ totalPopulation: -1 }).limit(1);
    },
    async getCountryInfoByLowestNumberOfPopulation(_, {}) {
      return await CountryInfo.find().sort({ totalPopulation: 1 }).limit(1);
    },
  },

  Mutation: {
    async newcountryInfo(
      _,
      { countryInfoInput: { country, year, area, totalPopulation } }
    ) {
      const newcountryInfo = new CountryInfo({
        country: country,
        year: year,
        area: area,
        totalPopulation: totalPopulation,
      });

      const res = await newcountryInfo.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },

    async deletecountryInfo(_, { ID }) {
      const wasDeleted = (await CountryInfo.deleteOne({ _id: ID }))
        .deletedCount;
      return wasDeleted;
    },
  },
};
