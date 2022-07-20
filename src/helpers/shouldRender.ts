/**
 * Takes an array and checks if every element is truthy
 * if not, returns null to avoid React errors.
 * @param {Array} props
 * @returns {Boolean}
 */
export const shouldRender = function(props: []) {
  if (!props?.length) return;

  return props.every(prop => prop) || null;
};
