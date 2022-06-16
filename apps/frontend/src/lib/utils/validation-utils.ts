
export const hasValidationErrors = (errors: {[key: string]: any}) => {
    const result = Object.values(errors).some((value) => value !== null);

    return result;
}