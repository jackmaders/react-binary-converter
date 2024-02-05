// CONSTANTS
export const BINARY_REGEX = /^([01])+$/;
export const BINARY_MAX_LENGTH = 8;

// ERRORS
export const ERROR_BINARY_MAX_LENGTH = `Input binary should have be fewer than ${BINARY_MAX_LENGTH} characters.`;
export const ERROR_INVALID_BINARY = "Input binary should only contain 0 and 1.";
