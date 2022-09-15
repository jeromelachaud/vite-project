type LayoutProps = {
  children: React.ReactNode;
};

const ComponentWithChildren = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};
export default ComponentWithChildren;
