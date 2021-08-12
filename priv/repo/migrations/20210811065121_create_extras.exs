defmodule Hotelverse.Repo.Migrations.CreateExtras do
  use Ecto.Migration

  def change do
    create table(:extras, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :property_id, :integer
      add :name, :string
      add :price, :float
      add :icon, :string

      timestamps()
    end

  end
end
