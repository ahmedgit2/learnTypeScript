export class NetworkError extends Error {}
export class UnProcessableEntityError extends Error {
  errorMap;
  constructor(message, errorMap) {
    super(message);
    this.errorMap = errorMap;
  }
}
export class ConflictError extends Error {}
export class BadRequestError extends Error {}
export class NotFoundError extends Error {}
export class UnAuthenticatedError extends Error {}
export class ForbiddenError extends Error {}
export class InternalServerError extends Error {}
