import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useChannelContext } from "../hooks/useChannelContext";
import { Form } from "./styles";

export const Chat = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();

  const { channel, joinChannel, createMessage, userName } = useChannelContext();

  const [message, setMessage] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onSubmitMessage: React.FormEventHandler<HTMLFormElement> = (e) => {
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
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h5># {channel?.name}</h5>
        <Link to="/channels">Voltar</Link>
      </div>

      <div
        style={{
          maxHeight: 300,
          overflowY: "auto",
        }}
        ref={scrollContainerRef}
      >
        {channel?.messages.map((message, i) => (
          <div key={i}>
            <strong>{message.userName}</strong>: {message.message}
          </div>
        ))}
      </div>

      <Form>
        <form onSubmit={onSubmitMessage} style={{ width: "100%" }}>
          <Input value={message} onChange={setMessage} />
          <Button disabled={!message} />
        </form>
      </Form>
    </div>
  );
};
