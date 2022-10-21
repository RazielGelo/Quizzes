// Follows this format "test@test.com"
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
// Follows this format "123-456-7890"
export const PHONE_REGEX = /\d{3}-\d{3}-\d{4}/;
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: 
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;