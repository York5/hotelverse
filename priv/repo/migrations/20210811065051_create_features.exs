defmodule Hotelverse.Repo.Migrations.CreateFeatures do
  use Ecto.Migration

  def change do
    create table(:features, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :property_id, :integer
      add :name, :string
      add :icon, :string

      timestamps()
    end

  end
end
