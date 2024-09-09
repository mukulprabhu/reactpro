function Hello({ person }) {
  return (
    <h1>
      {person.message} {person.emoji} {person.name} {person.seatNumbers}
    </h1>
  );
}

export default Hello;
