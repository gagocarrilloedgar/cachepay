const BASEURL = 'https://countriesnow.space/api/v0.1/countries'
const CODE_SLUG = '/codes'

const CountriesAPI = () => {
  const fetchCountries = async () =>
    fetch(BASEURL, { method: 'GET', redirect: 'follow' })
      .then((resp) => resp.json())
      .then((data) =>
        data?.data.map((country) => {
          return { name: country.country, cities: country.cities }
        })
      )

  const fetchCodes = async () =>
    fetch(BASEURL + CODE_SLUG, { method: 'GET', redirect: 'follow' })
      .then((resp) => resp.json())
      .then((data) => data?.data.map((country) => country.dial_code))

  return {
    fetchCountries,
    fetchCodes
  }
}

export default CountriesAPI
