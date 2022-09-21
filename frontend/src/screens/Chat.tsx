import { useEffect, useRef, useState } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { NoUserFound } from "../components/NoUserFound";

import { useChannelContext } from "../hooks/useChannelContext";
import { FormEvent } from "../types/shared";

export const Chat = () => {
  const { channel, createMessage, userName } = useChannelContext();

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
    <div className="card d-flex flex-column h-full m-0">
      {userName ? (
        <>
          <div className="card-title mt-0">
            <h5 className="mt-0"># {channel?.name}</h5>
          </div>

          <div ref={scrollContainerRef} className="overflow-auto  flex-grow-1">
            {channel?.messages.length ? (
              channel?.messages.map((message, i) => (
                <p className="my-5" key={i}>
                  <strong>{message.userName}</strong>: {message.message}
                </p>
              ))
            ) : (
              <span>No messages yet :)</span>
            )}
          </div>

          <form onSubmit={onSubmitMessage} className="d-flex mt-20">
            <Input
              value={message}
              onChange={setMessage}
              placeholder="Message"
            />
            <Button disabled={!message} />
          </form>
        </>
      ) : (
        <NoUserFound />
      )}
    </div>
  );
};
