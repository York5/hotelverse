defmodule Hotelverse.Content.Extra do
  use Hotelverse.Schema
  import Ecto.Changeset

  schema "extras" do
    field :property_id, :integer
    field :name, :string
    field :price, :float
    field :icon, :string

    timestamps()
  end

  @doc false
  def changeset(extra, attrs) do
    extra
    |> cast(attrs, [:property_id, :name, :price, :icon])
    |> validate_required([:property_id, :name, :price, :icon])
  end
end
