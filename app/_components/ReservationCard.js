import { formatDistance, isPast, parseISO } from "date-fns";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about", "");

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div>
      <div>
        <img src={image} alt={`Cabins ${name}`} />
      </div>

      <div>
        <div>
          <h3>
            {numNights} in the Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? <span>past</span> : <span>upcoming</span>}
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
