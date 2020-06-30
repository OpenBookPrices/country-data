declare module 'country-data' {
    export interface ISO4217Currency {
        code: string
        decimals: number
        name: string
        number: string
    }
    export interface Country {
        alpha2: string
        alpha3: string
        countryCallingCodes: string[]
        currencies: string[]
        ioc: string
        languages: string
        name: string
        status: 'assigned' | 'reserved' | 'user assigned' | 'deleted'
        numeric: string
    }
    export interface CountryMap {
        [countryCode: string]: Country
    }
    export const countries: CountryMap & { all: Country[] }
    export const currencies: { all: ISO4217Currency[] }
}