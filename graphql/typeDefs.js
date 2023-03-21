const { gql } = require('apollo-server-express');

module.exports = gql`
  type countryInfo {
    country: String
    year: String
    area: Int
    totalPopulation: Int
  }

  type Query {
    getAllCountryInfo: [countryInfo]
    countryInfo(ID: ID!): countryInfo!
    getCountryInfoByYear(year: String): [countryInfo]
    getCountryInfoBYearRange(fromYear: String, toYear: String): [countryInfo]
    getCountryInfoByHighestNumberOfPopulation: [countryInfo]
    getCountryInfoByLowestNumberOfPopulation: [countryInfo]
  }

  input CountryInfoInput {
    country: String
    year: String
    area: Int
    totalPopulation: Int
  }

  type Mutation {
    newcountryInfo(countryInfoInput: CountryInfoInput): countryInfo!
    deletecountryInfo(ID: ID!): Boolean
  }
`;