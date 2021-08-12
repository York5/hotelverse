defmodule Hotelverse.Repo.Migrations.CreateProperties do
  use Ecto.Migration

  def change do
    create table(:properties, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :user_id, :uuid, null: false
      add :title, :string
      add :max_adults, :integer, default: 1
      add :max_kids, :integer, default: 0
      add :price, :float
      add :rating, :float
      add :location, :string
      add :features, {:array, :uuid}, default: []
      add :description, :text
      add :images, {:array, :text}, default: []

      timestamps()
    end

  end
end
