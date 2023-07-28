export const getContacts = state => state.contacts.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;
console.log('getCOntacts :>> ', getContacts);
