import Nav from "./Nav";

export default function Nav({ children }) {
  return (
    <>
      <Nav></Nav>
      <main>{children}</main>
    </>
  );
}
