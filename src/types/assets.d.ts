declare module "*.png" {
  const source: import("react-native").ImageSourcePropType;

  export default source;
}

declare module '*.css' {
  const content: string;
  
  export default content;
}
