export interface Brands {
    results:  number;
    metadata: Metadata;
    data:     brand[];
}

export interface brand {
    _id:       string;
    name:      string;
    slug:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Metadata {
    currentPage:   number;
    numberOfPages: number;
    limit:         number;
    prevPage:      number;
}
