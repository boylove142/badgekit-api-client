const getSlug = require('../lib/getSlug');

/**
 * @callback requestCallback
 * @param {?object} err - Resulting error, if raised
 * @param {?*} data - Resulting data, if returned
 */

/**
 * Fetches public issuers
 * `GET /issuers`
 * @param {requestCallback} callback - Callback to handle response
 */
exports.getIssuers = function getIssuers (callback) {
  const options = {
    path: '/issuers',
    filter: 'issuers',
    default: []
  };

  this.remote.get(options, callback);
}

/**
 * Fetches a single issuer
 * `GET /issuers/<id>`
 * @param {string|object} issuer - Slug (or object containing slug) identifier
 * @param {requestCallback} callback - Callback to handle response
 */
exports.getIssuer = function getIssuer (issuer, callback) {
  const options = {
    path: '/issuers/' + getSlug(issuer)
  };

  this.remote.get(options, callback);
}

/**
 * Creates a new issuer
 * `POST /issuers`
 * @param {object} issuer - Issuer object
 * @param {requestCallback} callback - Callback to handle response
 */
exports.createIssuer = function createIssuer (issuer, callback) {
  const options = {
    path: '/issuers',
    json: issuer,
    filter: 'status'
  };

  this.remote.post(options, callback);
}

/**
 * Deletes an existing issuer
 * `DELETE /issuers/<id>`
 * @param {string|object} issuer - Slug (or object containing slug) identifier
 * @param {requestCallback} callback - Callback to handle response
 */
exports.deleteIssuer = function deleteIssuer (issuer, callback) {
  const options = {
    path: '/issuers/' + getSlug(issuer),
    json: issuer,
    filter: 'status'
  };

  this.remote.del(options, callback);
}

/**
 * Updates an existing issuer
 * `PUT /issuers/<id>`
 * @param {object} issuer - Issuer object
 * @param {requestCallback} callback - Callback to handle response
 */
exports.updateIssuer = function updateIssuer (issuer, callback) {
  const options = {
    path: '/issuers/' + getSlug(issuer),
    json: issuer,
    filter: 'status'
  };

  this.remote.put(options, callback);
}
