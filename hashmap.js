HashMap1d = function () {
  if (!(this instanceof HashMap1d)){
    return new HashMap1d();
  }
  this._hash = {};
};

HashMap1d.prototype.addItem = function(firstKey, value) {
  this._hash[firstKey] = value;
};

HashMap1d.prototype.getItem = function(firstKey) {
  return this._hash[firstKey];
};

HashMap1d.prototype.serialize = function () {
  return JSON.stringify(this._hash);
};

HashMap1d.prototype.deserialize = function (hashJson) {
  this._hash = JSON.parse(hashJson);
};

// XXX: contemplate metaprogramming approach to generating hashmaps with n keys
HashMap2d = function () {
  if (!(this instanceof HashMap2d)){
    return new HashMap2d();
  }
  this._hash = {};
};

HashMap2d.prototype.addItem = function(firstKey, secondKey, value) {
  if ("undefined" === typeof this._hash[firstKey]) {
    this._hash[firstKey] = { };
  }

  this._hash[firstKey][secondKey] = value;
};

HashMap2d.prototype.getItem = function(firstKey, secondKey) {
  return this._hash[firstKey] && this._hash[firstKey][secondKey];
};

HashMap2d.prototype.serialize = function () {
  return JSON.stringify(this._hash);
};

HashMap2d.prototype.deserialize = function (hashJson) {
  this._hash = JSON.parse(hashJson);
};