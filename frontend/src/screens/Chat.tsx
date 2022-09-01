import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { useChannelContext } from "../hooks/useChannelContext";
import { FormEvent } from "../types/shared";
import { ChatHeader, Container, Form, MessagesContainer } from "./styles";

export const Chat = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();

  const { channel, joinChannel, createMessage, userName } = useChannelContext();

  const [message, setMessage] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onSubmitMessage: FormEvent = (e) => {
    e.preventDefault();

    createMessage(message);
    setMessage("");
  };

  const goToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    goToBottom();
  }, [channel?.messages]);

  useEffect(() => {
    if (!channelId) return navigate("/channels");

    if (!userName) {
      navigate("/login");
      return;
    }

    joinChannel(channelId);
  }, []);

  return (
    <Container>
      <ChatHeader>
        <h5># {channel?.name}</h5>
        <Link to="/channels">Voltar</Link>
      </ChatHeader>

      <MessagesContainer ref={scrollContainerRef}>
        {channel?.messages.length ? (
          channel?.messages.map((message, i) => (
            <div key={i}>
              <strong>{message.userName}</strong>: {message.message}
            </div>
          ))
        ) : (
          <span>Nenhuma mensagem até agora :)</span>
        )}
      </MessagesContainer>

      <Form onSubmit={onSubmitMessage}>
        <Input value={message} onChange={setMessage} placeholder="Mensagem" />
        <Button disabled={!message} />
      </Form>
    </Container>
  );
};
