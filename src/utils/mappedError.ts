import {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  InternalServerError,
  NetworkError,
  NotFoundError,
  UnAuthenticatedError,
} from './handelErrors';

export function mapAxiosError(error) {
  if (!error.response) {
    return new NetworkError();
  } else {
    const status = error.response.status;
    const causeError = error.response.data?.error;
    switch (status) {
      case 401:
        return new UnAuthenticatedError(causeError.errors[0].message);
      case 403:
        return new ForbiddenError(causeError.errors[0].message);
      case 400:
        return new BadRequestError(causeError.errors[0].message);
      case 422:
        return _mapUnProccessableEntityError(causeError.errors);
      case 404:
        return new NotFoundError(causeError.errors[0].message);
      case 409:
        return new ConflictError(causeError.errors[0].message);
      case 500:
        return new InternalServerError(JSON.stringify(error.response.data));
      default:
        return error;
    }
  }
}
function _mapUnProccessableEntityError(errorsList) {
  const message = errorsList[0].message;
  if (typeof message === 'string') {
    return new UnProcessableEntityError(message);
  } else {
    // object
    const mappedError = {};
    errorsList.forEach(e => {
      mappedError[e.param] = Object.values(e.message)[0];
    });
    return new UnProcessableEntityError(
      mappedError[Object.keys(mappedError)[0]] || 'PARAMS',
      mappedError,
    );
  }
}
