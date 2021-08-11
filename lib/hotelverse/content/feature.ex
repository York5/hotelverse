defmodule Hotelverse.Content.Feature do
  use Ecto.Schema
  import Ecto.Changeset

  schema "features" do
    field :name, :string
    field :property_id, :integer

    timestamps()
  end

  @doc false
  def changeset(feature, attrs) do
    feature
    |> cast(attrs, [:property_id, :name])
    |> validate_required([:property_id, :name])
  end
end
