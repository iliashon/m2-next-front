export type TCountries = {
    countries: TCountry[];
};

export type TRegion = {
    code: string;
    id: number;
    name: string;
};

export type TCountry = {
    full_name_english: string;
    id: string;
    available_regions: TRegion[] | null;
};
