defmodule Hotelverse.BookingsTest do
  use Hotelverse.DataCase

  alias Hotelverse.Bookings

  describe "bookings" do
    alias Hotelverse.Bookings.Booking

    @valid_attrs %{adults: 42, checkin: ~D[2010-04-17], checkout: ~D[2010-04-17], kids: 42, property_id: 42, user_id: 42}
    @update_attrs %{adults: 43, checkin: ~D[2011-05-18], checkout: ~D[2011-05-18], kids: 43, property_id: 43, user_id: 43}
    @invalid_attrs %{adults: nil, checkin: nil, checkout: nil, kids: nil, property_id: nil, user_id: nil}

    def booking_fixture(attrs \\ %{}) do
      {:ok, booking} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Bookings.create_booking()

      booking
    end

    test "list_bookings/0 returns all bookings" do
      booking = booking_fixture()
      assert Bookings.list_bookings() == [booking]
    end

    test "get_booking!/1 returns the booking with given id" do
      booking = booking_fixture()
      assert Bookings.get_booking!(booking.id) == booking
    end

    test "create_booking/1 with valid data creates a booking" do
      assert {:ok, %Booking{} = booking} = Bookings.create_booking(@valid_attrs)
      assert booking.adults == 42
      assert booking.checkin == ~D[2010-04-17]
      assert booking.checkout == ~D[2010-04-17]
      assert booking.kids == 42
      assert booking.property_id == 42
      assert booking.user_id == 42
    end

    test "create_booking/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Bookings.create_booking(@invalid_attrs)
    end

    test "update_booking/2 with valid data updates the booking" do
      booking = booking_fixture()
      assert {:ok, %Booking{} = booking} = Bookings.update_booking(booking, @update_attrs)
      assert booking.adults == 43
      assert booking.checkin == ~D[2011-05-18]
      assert booking.checkout == ~D[2011-05-18]
      assert booking.kids == 43
      assert booking.property_id == 43
      assert booking.user_id == 43
    end

    test "update_booking/2 with invalid data returns error changeset" do
      booking = booking_fixture()
      assert {:error, %Ecto.Changeset{}} = Bookings.update_booking(booking, @invalid_attrs)
      assert booking == Bookings.get_booking!(booking.id)
    end

    test "delete_booking/1 deletes the booking" do
      booking = booking_fixture()
      assert {:ok, %Booking{}} = Bookings.delete_booking(booking)
      assert_raise Ecto.NoResultsError, fn -> Bookings.get_booking!(booking.id) end
    end

    test "change_booking/1 returns a booking changeset" do
      booking = booking_fixture()
      assert %Ecto.Changeset{} = Bookings.change_booking(booking)
    end
  end
end
