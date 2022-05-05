export type CustomerDetail = {
    firstName: string,
    lastName: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    zip: string,
    country: string,
    dateOfPurchase: Date | null,
    purchasedFrom: string,
}


export type CustomerDetailValidation = {
    firstNameError: string,
    lastNameError: string,
    address1Error: string,
    address2Error: string,
    cityError: string,
    stateError: string,
    zipError: string,
    countryError: string,
    dateOfPurchaseError: string
    purchasedFromError: string,
}

export type WarrantyForm = CustomerDetail & CustomerDetailValidation;