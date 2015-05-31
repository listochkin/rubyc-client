import JsonApiSerializer from 'ember-json-api/json-api-serializer';

export default JsonApiSerializer.extend({
  // AM:S returns { id, type, attributes: { title }}
  // ember-json-api expects { id, type, title }
  normalize (type, hash, key) {
    const h = Object.assign(hash, hash.attributes);
    return this._super(type, h, key);
  }
});
