export const UserCard = ({ userName }: Props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2>UserCard</h2>
      <p>{userName}</p>
    </div>
  );
};

type Props = {
  userName: string;
};
