import Image from "./components/Image";
import TextContent from "./components/TextContent";

const App = () => {
  return (
    <main className="w-[327px]">
      <Image />
      <TextContent
        purple=" insights"
        paragraph="Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency."
      />
    </main>
  );
};

export default App;
