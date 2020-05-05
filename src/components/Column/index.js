import React, { useState, useEffect } from "react";
import AddCard from "../Cards/AddCard";
import Card from "../Cards";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCardsForColumn } from "../../api-fetcher";
import "./style.css";

library.add(faTimesCircle);

const Column = ({
  id,
  name,
  columnIndex,
  onDragOver,
  onDragStart,
  onDeleteButtonClick,
  onDrop,
}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCardsForColumn({
      userId: 1,
      columnId: id,
    }).then((_cards) => setCards(_cards));
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const addCard = ({ content }) => {
    // TODO add card via api, then refetch cards for this column
    // optimistic update
    setCards([...cards, { content, id: Math.random() }]);
  };

  const deleteCard = (cardId) => {
    if (window.confirm("Are you sure?")) {
      // TODO delete card via api, then refetch cards for this column
      // optimistic update
      setCards([...cards].filter((card) => card.id !== cardId));
    }
  };

  return (
    <div
      className="col"
      data-column-index={columnIndex}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <p className="title-column">
        {name}
        <FontAwesomeIcon
          className="icon-column"
          icon="times-circle"
          onClick={onDeleteButtonClick}
        />
      </p>
      {cards.map((card, index) => (
        <Card
          content={card.content}
          key={card.id}
          index={index}
          onDragStart={onDragStart}
          deleteItem={() => deleteCard(card.id)}
        />
      ))}
      <AddCard addCard={addCard} />
      <br />
    </div>
  );
};

export default Column;
