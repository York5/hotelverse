defmodule Hotelverse.Properties.Property do
  use Hotelverse.Schema
  import Ecto.Changeset

  schema "properties" do
    field :title, :string
    field :max_adults, :integer, default: 1
    field :max_kids, :integer, default: 0
    field :price, :float
    field :rating, :float, default: 0.0
    field :location, :string
    field :features, {:array, :binary_id}, default: []
    field :description, :string
    field :images, {:array, :string}, default: []

    timestamps()
  end

  @doc false
  def changeset(property, attrs) do
    property
    |> cast(attrs, [:title, :max_adults, :max_kids, :price, :rating, :location, :features, :description, :images])
    |> validate_required([:title, :max_adults, :max_kids, :price, :rating, :location, :features, :description, :images])
  end
end
