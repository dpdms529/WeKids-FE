export const convertToPingName = (name) => {
  // const firstName = name.slice(0, 1); 
  const lastName = name.slice(1); 
  
  return `${lastName}핑`;
};