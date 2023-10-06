// To parse this data:
//
//   import { Convert, Cart } from "./file";
//
//   const cart = Convert.toCart(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Cart {
    status:         string;
    numOfCartItems: number;
    data:           Data;
}

export interface Data {
    _id:            string;
    cartOwner:      string;
    products:       ProductElement[];
    createdAt:      Date;
    updatedAt:      Date;
    __v:            number;
    totalCartPrice: number;
}

export interface ProductElement {
    count:   number;
    _id:     string;
    product: ProductProduct;
    price:   number;
}

export interface ProductProduct {
    subcategory:    Brand[];
    _id:            string;
    title:          string;
    quantity:       number;
    imageCover:     string;
    category:       Brand;
    brand:          Brand;
    ratingsAverage: number;
    id:             string;
}

export interface Brand {
    _id:       string;
    name:      string;
    slug:      string;
    image?:    string;
    category?: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
