defmodule Hotelverse.Repo.Migrations.CreateImages do
  use Ecto.Migration

  def change do
    create table(:images) do
      add :property_id, :integer
      add :url, :string

      timestamps()
    end

  end
end
