export const reservationEmail = {
  to: "hello@savoryhaven.com",
  subject: "Table Reservation Request",
  body: `Hello Savory Haven,%0D%0A
I would like to make a table reservation.%0D%0A
Name:%0D%0A
Date:%0D%0A
Time:%0D%0A
Number of Guests:%0D%0A
Special Requests:%0D%0A
%0D%0AThank you!`,
};

export const getReservationMailto = () =>
  `mailto:${reservationEmail.to}?subject=${encodeURIComponent(
    reservationEmail.subject
  )}&body=${reservationEmail.body}`;
