enum Type {
  Object = 'object',
  Function = 'function',
}

function isObject(value: any) {
  const type = typeof value;
  return value != null && (type === Type.Object || type === Type.Function);
}

export default isObject;
