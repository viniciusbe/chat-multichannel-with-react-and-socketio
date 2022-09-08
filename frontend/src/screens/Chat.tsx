import { useEffect, useRef, useState } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { useChannelContext } from "../hooks/useChannelContext";
import { FormEvent } from "../types/shared";

export const Chat = () => {
  const { channel, createMessage } = useChannelContext();

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

  return (
    <div className="card">
      <div className="card-title">
        <h5># {channel?.name}</h5>
      </div>

      <div ref={scrollContainerRef}>
        {channel?.messages.length ? (
          channel?.messages.map((message, i) => (
            <div key={i}>
              <strong>{message.userName}</strong>: {message.message}
            </div>
          ))
        ) : (
          <span>Nenhuma mensagem até agora :)</span>
        )}
      </div>

      <form onSubmit={onSubmitMessage} className="d-flex mt-10">
        <Input value={message} onChange={setMessage} placeholder="Mensagem" />
        <Button disabled={!message} />
      </form>
    </div>
  );
};
