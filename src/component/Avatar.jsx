export default function Avatar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "24px",
      }}
    >
      <img
        className="avatar"
        src="Danylo.jpg"
        alt="Danylo Hlushko"
        style={{
          width: "420px",
          height: "420px",
          objectFit: "cover",
          objectPosition: "100% 0",
        }}
      />
    </div>
  );
}
