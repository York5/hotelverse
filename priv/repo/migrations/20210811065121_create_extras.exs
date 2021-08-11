defmodule Hotelverse.Repo.Migrations.CreateExtras do
  use Ecto.Migration

  def change do
    create table(:extras) do
      add :property_id, :integer
      add :name, :string
      add :price, :float

      timestamps()
    end

  end
end
