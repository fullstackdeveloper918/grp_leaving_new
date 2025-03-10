import Sidebar from "./common/Sidebar";
import Card from "./common/Card";
import CollectionFilter from "./common/CollectionFilter";
import { fetchFromServer } from "@/app/actions/fetchFromServer";
const CardCollection = async ({ params }: any) => {
  console.log(params, "qwertyui");
  // Extract type and cardLabel from URL params
  const type = params.slug[0];
  const searchQuery = params?.slug[1]; // Assuming search type (popular, new, trending) is the second slug
  console.log(type, "type");
  console.log(searchQuery, "searchQuery");
  // Sidebar: Fetch collection listing
  let data = await fetch('https://magshopify.goaideme.com/card/collection-listing', { cache: 'no-store' });
  let data1 = await data.json();
  console.log(data1, "Collection Listing Data");
  // Find the matching collection type (UUID) based on the URL slug
  const normalizedType = type.replace('-', ' ');
  const matchedObject = data1?.data.find((item: any) => {
    const normalizedTags = item.collection_title.replace('-', ' ');
    return normalizedTags === normalizedType;
  });
  console.log(matchedObject, "Matched Object");
  const collectionType = matchedObject ? matchedObject.uuid : null;
  console.log(collectionType, "Collection Type (UUID)");
  // Validate the search query (allow only popular, new, and trending)
  const validSearchQueries = ["popular", "new", "trending"];
  const finalSearchQuery = validSearchQueries.includes(searchQuery) ? searchQuery : "";
  console.log("finalSearchQuery",finalSearchQuery)
  // All cards: Fetch cards based on search and category params
  const api2 = {
    url: `https://magshopify.goaideme.com/card/card-listing?search=${encodeURIComponent(finalSearchQuery)}&category=${encodeURIComponent(collectionType)}`,
    method: "GET",
  };
  const response = await fetchFromServer(api2);
  console.log(type, "type");
  console.log(searchQuery, "searchQuery");
  console.log(response, "Card Listing Response");
  return (
    <div className=" bg-lightBg py-12">
      <div className="container-fluid">
        <div className="md:flex md:space-x-3 md:space-y-0 space-y-6 ">
          {/* Sidebar with collection data */}
          <Sidebar urlValue={params?.slug[0]} cardLabel={finalSearchQuery} response={data1} />
          <main className="flex-1 md:pl-3">
            <div className="flex md:justify-between md:items-center mb-6 md:flex-row flex-col-reverse justify-start">
              <h2 className="xl:text-4xl md:text-lg text-md font-semibold mt-3">
                Pick a <span className="capitalize">{params?.slug[0]}</span> Card Design
              </h2>
              <CollectionFilter />
            </div>
            {/* Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6 min_gap">
              {response?.listing?.map((card: any) => (
                <Card item={card} index={card.id} key={card.id} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default CardCollection;






