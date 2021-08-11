defmodule HotelverseWeb.BookingController do
  use HotelverseWeb, :controller

  alias Hotelverse.Bookings
  alias Hotelverse.Bookings.Booking

  action_fallback HotelverseWeb.FallbackController

  def index(conn, _params) do
    bookings = Bookings.list_bookings()
    render(conn, "index.json", bookings: bookings)
  end

  def create(conn, %{"booking" => booking_params}) do
    with {:ok, %Booking{} = booking} <- Bookings.create_booking(booking_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.booking_path(conn, :show, booking))
      |> render("show.json", booking: booking)
    end
  end

  def show(conn, %{"id" => id}) do
    booking = Bookings.get_booking!(id)
    render(conn, "show.json", booking: booking)
  end

  def update(conn, %{"id" => id, "booking" => booking_params}) do
    booking = Bookings.get_booking!(id)

    with {:ok, %Booking{} = booking} <- Bookings.update_booking(booking, booking_params) do
      render(conn, "show.json", booking: booking)
    end
  end

  def delete(conn, %{"id" => id}) do
    booking = Bookings.get_booking!(id)

    with {:ok, %Booking{}} <- Bookings.delete_booking(booking) do
      send_resp(conn, :no_content, "")
    end
  end
end
