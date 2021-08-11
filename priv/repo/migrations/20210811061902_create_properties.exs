defmodule Hotelverse.Repo.Migrations.CreateProperties do
  use Ecto.Migration

  def change do
    create table(:properties) do
      add :title, :string
      add :price, :float
      add :rating, :float
      add :location, :string
      add :description, :string

      timestamps()
    end

  end
end
