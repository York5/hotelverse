defmodule Hotelverse.Repo.Migrations.CreateProperties do
  use Ecto.Migration

  def change do
    create table(:properties, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :title, :string
      add :price, :float
      add :max_adults, :integer
      add :max_kids, :integer
      add :rating, :float
      add :location, :string
      add :description, :string

      timestamps()
    end

  end
end
