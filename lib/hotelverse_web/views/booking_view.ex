defmodule HotelverseWeb.BookingView do
  use HotelverseWeb, :view
  alias HotelverseWeb.BookingView

  def render("index.json", %{bookings: bookings}) do
    %{data: render_many(bookings, BookingView, "booking.json")}
  end

  def render("show.json", %{booking: booking}) do
    %{data: render_one(booking, BookingView, "booking.json")}
  end

  def render("booking.json", %{booking: booking}) do
    %{id: booking.id,
      user_id: booking.user_id,
      property_id: booking.property_id,
      checkin: booking.checkin,
      checkout: booking.checkout,
      adults: booking.adults,
      kids: booking.kids}
  end
end
