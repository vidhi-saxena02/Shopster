import Card from "./Card";

function CatagoryList({ catagories }) {
  const renderedList = catagories.map((cat, index) => {
    return <Card key={index} cat={cat} />;
  });
  return (
    <div className="flex flex-row mt-10 ml-10 mb-10 justify-between mr-10">
      {renderedList}
    </div>
  );
}

export default CatagoryList;
