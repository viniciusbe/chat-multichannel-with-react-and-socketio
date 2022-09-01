import { styled } from "@stitches/react";

const Container = styled("div", {
  display: "flex",
  width: "100vw",
  height: "100vh",
});

const Sidebar = styled("menu", {
  width: 250,
});

const Main = styled("main", {
  flexGrow: 1,
});

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Sidebar>aaa</Sidebar>

      <Main>{children}</Main>
    </Container>
  );
};
