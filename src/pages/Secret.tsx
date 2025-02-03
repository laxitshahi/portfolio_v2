type Props = {
  setPage: (value: string) => void;
};

export default function Secret({ setPage }: Props) {
  return (
    <div className="">
      <div className="">
        Congrats! You have my sincere thank you for finding this page. You
        win... a nice firm handshake! But all good things must come to an end.{" "}
        <button className="underline hover:decoration-red-800" onClick={() => setPage("home")}>
          Go Back
        </button>
      </div>
    </div>
  );
}
