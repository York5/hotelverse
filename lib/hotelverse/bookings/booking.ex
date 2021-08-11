defmodule Hotelverse.Bookings.Booking do
  use Ecto.Schema
  import Ecto.Changeset

  schema "bookings" do
    field :adults, :integer
    field :checkin, :date
    field :checkout, :date
    field :kids, :integer
    field :property_id, :integer
    field :user_id, :integer

    timestamps()
  end

  @doc false
  def changeset(booking, attrs) do
    booking
    |> cast(attrs, [:user_id, :property_id, :checkin, :checkout, :adults, :kids])
    |> validate_required([:user_id, :property_id, :checkin, :checkout, :adults, :kids])
  end
end
