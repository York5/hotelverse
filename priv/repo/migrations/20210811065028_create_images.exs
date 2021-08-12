defmodule Hotelverse.Repo.Migrations.CreateImages do
  use Ecto.Migration

  def change do
    create table(:images, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :property_id, :integer
      add :url, :string
      add :seq, :integer

      timestamps()
    end

  end
end
