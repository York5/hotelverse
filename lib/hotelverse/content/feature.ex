defmodule Hotelverse.Content.Feature do
  use Hotelverse.Schema
  import Ecto.Changeset

  schema "features" do
    field :name, :string
    field :property_id, :integer
    field :icon, :string


    timestamps()
  end

  @doc false
  def changeset(feature, attrs) do
    feature
    |> cast(attrs, [:property_id, :name, :icon])
    |> validate_required([:property_id, :name, :icon])
  end
end
