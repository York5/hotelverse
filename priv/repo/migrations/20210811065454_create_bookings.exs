defmodule Hotelverse.Repo.Migrations.CreateBookings do
  use Ecto.Migration

  def change do
    create table(:bookings, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :user_id, :integer
      add :property_id, :integer
      add :checkin, :date
      add :checkout, :date
      add :adults, :integer
      add :kids, :integer

      timestamps()
    end

  end
end
