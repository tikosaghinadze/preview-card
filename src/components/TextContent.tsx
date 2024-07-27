import data from "../data/data";

interface TextContentProps {
  purple: string;
  paragraph: string;
}

const TextContent = ({ purple, paragraph }: TextContentProps) => {
  return (
    <div>
      <div>
        <h1>
          Get <span>{purple}</span> that help your business grow.
        </h1>
        <p>{paragraph}</p>
      </div>
      <div>
        {data.map((item) => {
          return (
            <>
              <h4>{item.amount}</h4>
              <span>{item.name}</span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TextContent;
