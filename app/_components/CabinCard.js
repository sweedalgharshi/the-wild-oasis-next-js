import Image from "next/image";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, image, regularPrice, discount } = cabin;
  return (
    <div>
      <Image src={cabin} alt={`Cabin ${name}`} className="flex-1 border-r border-primary-800" />

      <div className="flex-grow">
        <div></div>
        <h3>Cabin {name}</h3>
      </div>
    </div>
  );
}
export default CabinCard;
