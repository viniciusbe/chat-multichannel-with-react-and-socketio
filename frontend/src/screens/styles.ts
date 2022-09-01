import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const Form = styled("form", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  boxSizing: "border-box",
});

export const MessagesContainer = styled("div", {
  maxHeight: 300,
  overflow: "auto",
  border: "1px solid var(--border)",
  padding: 8,
  borderRadius: 4,
});

export const ChatHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid var(--border)",
});
