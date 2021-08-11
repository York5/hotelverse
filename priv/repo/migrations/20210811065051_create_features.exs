defmodule Hotelverse.Repo.Migrations.CreateFeatures do
  use Ecto.Migration

  def change do
    create table(:features) do
      add :property_id, :integer
      add :name, :string

      timestamps()
    end

  end
end
